import invariant from "tiny-invariant";

/**
 * Detects the type of device based on the user agent string.
 * 
 * @param {Navigator} navigator - The Navigator object from the browser.
 * @returns {string} - The type of the device ('tablet', 'phone', 'desktop', 'watch', 'vision', 'ereader', 'smarttv', 'console', 'laptop', 'vr', 'iot', 'unknown').
 */
export function detectDeviceType(navigator = window?.navigator) {
    invariant(navigator, 'navigator is not defined');

    const { userAgent: ua } = navigator;

    // Regular expressions for detecting specific device types
    const devicePatterns = [
        { type: 'tablet', pattern: /(tablet|iPad|Nexus 9)/i },
        { type: 'phone', pattern: /(mobi|iphone|ipod|android.*mobile)/i },
        { type: 'watch', pattern: /(watch|applewatch|android wear|Wear OS)/i },
        { type: 'vision', pattern: /(visionOS|Vision Pro|apple vision)/i },
        { type: 'ereader', pattern: /(kindle|kobo|book)/i },
        { type: 'smarttv', pattern: /(smarttv|googletv|apple tv|roku|samsungtv|tizen|webos)/i },
        { type: 'console', pattern: /(playstation|xbox|nintendo|switch)/i },
        { type: 'laptop', pattern: /(laptop|notebook)/i },
        { type: 'vr', pattern: /(oculus|htc vive|vr|virtual reality)/i },
        { type: 'iot', pattern: /(smart home|alexa|google home|iot)/i },
        { type: 'desktop', pattern: /(windows|macintosh|linux|x11)/i },
    ];

    // Iterate through the patterns to match the user agent
    for (const { type, pattern } of devicePatterns) {
        if (pattern.test(ua)) {
            return type;
        }
    }

    // Default fallback if no match is found
    return 'unknown';
}
