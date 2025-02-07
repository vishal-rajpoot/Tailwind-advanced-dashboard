// Import Dependencies
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import PropTypes from "prop-types";

// Local Imports
import { Button } from "components/ui";
import { TableSettings } from "components/shared/table/TableSettings";

// ----------------------------------------------------------------------

export function TableConfig({ table }) {
  return (
    <Popover className="relative w-full">
      <PopoverButton
        isIcon
        variant="flat"
        className="size-8 rounded-full"
        as={Button}
        aria-label="Table Settings"
        title="Table Settings"
      >
        <Cog6ToothIcon className="size-5" />
      </PopoverButton>
      <Transition
        as={Fragment}
        enter="transition ease-out"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <PopoverPanel
          style={{ width: "16rem", maxHeight: "27rem" }}
          anchor={{ to: "top end", gap: 8 }}
          className="absolute z-[100] flex flex-col rounded-md border border-gray-300 bg-white text-xs+ shadow-lg shadow-gray-200/50 outline-none ring-primary-500/50 focus-visible:outline-none focus-visible:ring dark:border-dark-500 dark:bg-dark-750 dark:shadow-none"
        >
          <h3 className="px-3 pt-2.5 text-sm+ font-medium tracking-wide text-gray-800 dark:text-dark-100">
            Table Settings
          </h3>

          <TableSettings table={table} />
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}

TableConfig.propTypes = {
  table: PropTypes.object,
};
