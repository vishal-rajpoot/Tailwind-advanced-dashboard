// Import Dependencies
import Chart from "react-apexcharts";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Radio,
  RadioGroup,
  Transition,
} from "@headlessui/react";
import { clsx } from "clsx";
import { Fragment, useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

// Local Imports
import { Button, Card } from "components/ui";

// ----------------------------------------------------------------------

const data = {
  yearly: {
    series: [
      {
        name: "Sales",
        data: [28, 45, 35, 50, 32, 55, 23, 60, 28, 45, 35, 50],
      },
      {
        name: "Profit",
        data: [14, 25, 20, 25, 12, 20, 15, 20, 14, 25, 20, 25],
      },
    ],
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  monthly: {
    series: [
      {
        name: "High",
        data: [51, 42, 50, 41, 31, 44, 55, 42, 50, 32, 55, 23],
      },
      {
        name: "Low",
        data: [40, 30, 12, 24, 11, 32, 20, 24, 25, 12, 20, 15],
      },
    ],
    categories: [
      "10 Mar",
      "11 Mar",
      "12 Mar",
      "13 Mar",
      "14 Mar",
      "15 Mar",
      "16 Mar",
      "17 Mar",
      "18 Mar",
      "19 Mar",
      "20 Mar",
      "21 Mar",
    ],
  },
  daily: {
    series: [
      {
        name: "High",
        data: [51, 42, 50, 41, 31, 44, 55, 42, 28, 45, 35, 50],
      },
      {
        name: "Low",
        data: [40, 30, 12, 24, 11, 32, 20, 24, 14, 25, 20, 25],
      },
    ],
    categories: [
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
      "00:00",
      "02:00",
      "04:00",
    ],
  },
};

const chartConfig = {
  colors: ["#4C4EE7", "#0EA5E9"],
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      barHeight: "90%",
      columnWidth: "40%",
    },
  },
  legend: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  grid: {
    padding: {
      left: -8,
      right: -8,
      top: 0,
      bottom: -6,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
};

export function SalesReport() {
  const [activeRange, setActiveRange] = useState("monthly");
  const chartOptions = JSON.parse(JSON.stringify(chartConfig));
  chartOptions.xaxis.categories = data[activeRange].categories;

  return (
    <Card className="col-span-12 sm:col-span-6 lg:col-span-7 xl:col-span-8">
      <div className="mt-3 flex flex-col justify-between gap-2 px-4 sm:flex-row sm:items-center sm:px-5">
        <div className="flex flex-1 items-center justify-between space-x-2 sm:flex-initial rtl:space-x-reverse">
          <h2 className="text-sm+ font-medium tracking-wide text-gray-800 dark:text-dark-100">
            Sales Report
          </h2>
          <ActionMenu />
        </div>
        <RadioGroup
          name="options"
          value={activeRange}
          onChange={setActiveRange}
          className="flex flex-wrap -space-x-px rtl:space-x-reverse"
        >
          <Radio
            as={Button}
            unstyled
            value="daily"
            className={({ checked }) =>
              clsx(
                "h-8 border border-gray-300 px-3 text-xs+ text-gray-800 dark:border-dark-450 dark:text-dark-100 ltr:first:rounded-l-lg ltr:last:rounded-r-lg rtl:first:rounded-r-lg rtl:last:rounded-l-lg",
                checked && "bg-gray-200 dark:bg-surface-2",
              )
            }
          >
            Daily
          </Radio>
          <Radio
            as={Button}
            unstyled
            value="monthly"
            className={({ checked }) =>
              clsx(
                "h-8 border border-gray-300 px-3 text-xs+ text-gray-800 dark:border-dark-450 dark:text-dark-100 ltr:first:rounded-l-lg ltr:last:rounded-r-lg rtl:first:rounded-r-lg rtl:last:rounded-l-lg",
                checked && "bg-gray-200 dark:bg-surface-2",
              )
            }
          >
            Monthly
          </Radio>
          <Radio
            as={Button}
            unstyled
            value="yearly"
            className={({ checked }) =>
              clsx(
                "h-8 border border-gray-300 px-3 text-xs+ text-gray-800 dark:border-dark-450 dark:text-dark-100 ltr:first:rounded-l-lg ltr:last:rounded-r-lg rtl:first:rounded-r-lg rtl:last:rounded-l-lg",
                checked && "bg-gray-200 dark:bg-surface-2",
              )
            }
          >
            Yearly
          </Radio>
        </RadioGroup>
      </div>
      <div className="ax-transparent-gridline pr-2">
        <Chart
          type="bar"
          height="260"
          options={chartOptions}
          series={data[activeRange].series}
        />
      </div>
    </Card>
  );
}

function ActionMenu() {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left ltr:-mr-1.5 rtl:-ml-1.5"
    >
      <MenuButton
        as={Button}
        variant="flat"
        isIcon
        className="size-8 rounded-full"
      >
        <EllipsisHorizontalIcon className="size-5" />
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <MenuItems className="absolute z-[100] mt-1.5 min-w-[10rem] rounded-lg border border-gray-300 bg-white py-1 shadow-lg shadow-gray-200/50 outline-none focus-visible:outline-none dark:border-dark-500 dark:bg-dark-700 dark:shadow-none ltr:right-0 sm:ltr:left-0 rtl:left-0 sm:rtl:right-0">
          <MenuItem>
            {({ focus }) => (
              <button
                className={clsx(
                  "flex h-9 w-full items-center px-3 tracking-wide outline-none transition-colors",
                  focus &&
                    "bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-dark-100",
                )}
              >
                <span>Action</span>
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <button
                className={clsx(
                  "flex h-9 w-full items-center px-3 tracking-wide outline-none transition-colors",
                  focus &&
                    "bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-dark-100",
                )}
              >
                <span>Another action</span>
              </button>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <button
                className={clsx(
                  "flex h-9 w-full items-center px-3 tracking-wide outline-none transition-colors",
                  focus &&
                    "bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-dark-100",
                )}
              >
                <span>Other action</span>
              </button>
            )}
          </MenuItem>

          <hr className="mx-3 my-1.5 h-px border-gray-150 dark:border-dark-500" />

          <MenuItem>
            {({ focus }) => (
              <button
                className={clsx(
                  "flex h-9 w-full items-center px-3 tracking-wide outline-none transition-colors",
                  focus &&
                    "bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-dark-100",
                )}
              >
                <span>Separated action</span>
              </button>
            )}
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
