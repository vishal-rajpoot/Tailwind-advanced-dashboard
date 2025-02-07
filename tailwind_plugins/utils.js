import Color from 'color'

const colorConfigKeys = [
    'accentColor',
    'backgroundColor',
    'borderColor',
    'caretColor',
    'colors',
    'divideColor',
    'fill',
    'gradientColorStops',
    'placeholderColor',
    'ringColor',
    'ringOffsetColor',
    'stroke',
    'textColor',
]

function kebabCase(string) {
    return string
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()
}

function tailwindVariableHelper(name) {
    return function ({ opacityVariable, opacityValue } = {}) {
        if (opacityValue !== undefined) {
            return `rgb(var(--${name}) / ${opacityValue})`
        }
        if (opacityVariable !== undefined) {
            return `rgb(var(--${name}) / var(${opacityVariable}, 1))`
        }
        return `rgb(var(--${name}))`
    }
}

function flatten(
    obj,
    transformKeyCallback = key => key.join('.'),
    transformValueCallback = (keys, value) => value,
    previousKeys = [],
    flattened = {}
) {
    return Object
        .entries(obj)
        .reduce((acc, [key, value]) => {
            const keyPath = [...previousKeys, key]

            if (typeof value === 'object' && !Array.isArray(value)) {
                flatten(value, transformKeyCallback, transformValueCallback, keyPath, acc)
            } else {
                flattened[transformKeyCallback(keyPath)] = transformValueCallback(keyPath, value)
            }
            return acc
        }, flattened)
}

const getTailwindKeyName = keys =>
    keys.filter(key => key.toLowerCase() !== 'default').map(kebabCase).join('-')

function toRgba(color) {
    try {
        const [r, g, b] = Color(color).rgb().array()
        return [r, g, b]
    } catch {
        return null
    }
}

function defaultCustomPropValueTransformer(keys, value) {
    if (colorConfigKeys.includes(keys[0])) {
        const color = toRgba(value)
        if (color) {
            const [r, g, b] = color
            return `${r} ${g} ${b}`
        }
    }

    if (Array.isArray(value)) {
        return value.join(', ')
    }

    return value
}

function defaultConfigValueTransformer(keys, value) {
    if (colorConfigKeys.includes(keys[0])) {
        if (toRgba(value)) {
            return tailwindVariableHelper(getTailwindKeyName(keys))
        }
    }

    return `var(--${getTailwindKeyName(keys)}, ${value})`
}

export function getThemeAsCustomProps(
    tokenValues,
    transformer = defaultCustomPropValueTransformer
) {
    return flatten(
        tokenValues,
        keys => `--${getTailwindKeyName(keys)}`,
        transformer
    )
}

export function resolveThemeConfig(
    tokenValue,
    previousKeys = [],
    valueTransformer = defaultConfigValueTransformer
) {
    return Object
        .entries(tokenValue)
        .reduce((acc, [key, value]) => {
            const keyPath = [...previousKeys, key]
            return {
                ...acc,
                [key]: typeof value === "object"
                    ? resolveThemeConfig(value, keyPath)
                    : valueTransformer(keyPath, value)
            }
        }, {})
}