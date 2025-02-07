// Import Dependencies
import PropTypes from "prop-types";
import { NavLink } from "react-router";
import clsx from "clsx";
import {
  Bars2Icon,
  ListBulletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { useBreakpointsContext } from "app/contexts/breakpoint/context";
import { useDisclosure } from "hooks";
import { Button } from "components/ui";

// ----------------------------------------------------------------------

export function DocsNavigation({ prefix, items, title }) {
  const { lgAndUp } = useBreakpointsContext();
  const [isOpen, { open, close }] = useDisclosure(false);

  if (!lgAndUp) {
    return (
      <>
        <div className="fixed bottom-3 right-3 z-10 rounded-full bg-white dark:bg-dark-700">
          <Button
            onClick={open}
            color="primary"
            className="size-14 rounded-full"
            isIcon
          >
            <Bars2Icon className="size-7" />
          </Button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-[100] bg-white px-4 pt-4 dark:bg-dark-800">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-4 text-base font-medium text-gray-800 dark:text-dark-100">
                <ListBulletIcon className="size-6" />
                <span>{title}</span>
              </h3>
              <Button
                onClick={close}
                isIcon
                variant="flat"
                className="size-6 rounded-full"
              >
                <XMarkIcon className="size-4.5" />
              </Button>
            </div>
            <div className="custom-scrollbar mt-3 flex h-full flex-col overflow-y-auto">
              {items.map((item) => (
                <Item
                  key={item.path}
                  path={item.path}
                  label={item.label}
                  onClick={close}
                  prefix={prefix}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="sticky top-[5.5rem] col-span-1 mt-5 flex max-h-[calc(100dvh-5.5rem)] flex-col self-start overflow-hidden lg:mt-5 lg:mt-6">
      <h3 className="flex items-center gap-4 text-base font-medium text-gray-800 dark:text-dark-100">
        <ListBulletIcon className="size-6" />
        <span>{title}</span>
      </h3>
      <div className="custom-scrollbar mt-3 flex h-full min-w-0 flex-col overflow-y-auto">
        {items.map((item) => (
          <Item
            key={item.path}
            prefix={prefix}
            path={item.path}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
}

function Item({ path, label, prefix, ...rest }) {
  return (
    <NavLink
      to={`${prefix}/${path}`}
      className={({ isActive }) =>
        clsx(
          "relative inline-flex h-9 min-w-0 shrink-0 items-center border-l px-3 transition-colors",
          isActive
            ? "this:primary border-current bg-this-darker/[.08] font-medium text-this-darker dark:bg-this-lighter/10 dark:text-this-lighter"
            : "dark:border-dark-600",
        )
      }
      {...rest}
    >
      <span className="truncate"> {label}</span>
    </NavLink>
  );
}

DocsNavigation.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  prefix: PropTypes.string,
};

Item.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.string,
};
