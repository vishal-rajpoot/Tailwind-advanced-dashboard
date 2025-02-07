// Local Imports
import { PropTypes } from "prop-types";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Chart from "react-apexcharts";

// Import Dependencies
import { Avatar, Box, Button } from "components/ui";

// ----------------------------------------------------------------------

const chartConfig = {
  colors: ["#4467EF"],
  chart: {
    parentHeightOffset: 0,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },

  grid: {
    padding: {
      left: 0,
      right: 0,
      top: -10,
      bottom: 0,
    },
  },
  xaxis: {
    show: false,
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
  yaxis: {
    show: false,
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

export function SellerCard({ avatar, name, sales, impression, chartData }) {
  return (
    <Box className="px-4">
      <div className="flex flex-col items-center space-y-3 pt-4 text-center">
        <Avatar
          size={16}
          classNames={{
            root: "rounded-full bg-gradient-to-r from-sky-400 to-blue-600 p-0.5",
            display: "border-2 border-white text-lg dark:border-dark-700",
          }}
          src={avatar}
          name={name}
          initialColor="auto"
        />

        <div>
          <p className="text-base font-medium text-gray-800 dark:text-dark-100">
            {name}
          </p>
          <p className="text-xs+ text-gray-400 dark:text-dark-300">Salesman</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="dark:bg-surface-3 rounded-xl bg-slate-100 p-4">
          <p>Sales</p>
          <div className="mt-0.5 flex gap-2">
            <p className="text-xl font-semibold text-gray-800 dark:text-dark-100">
              {sales}
            </p>
            <p
              className={clsx(
                `this:${impression > 0 ? "success" : "error"}`,
                "this:success flex items-center space-x-0.5 text-xs text-this dark:text-this-lighter",
              )}
            >
              {impression > 0 ? (
                <ArrowUpIcon className="size-4" />
              ) : (
                <ArrowDownIcon className="size-4" />
              )}
              <span>{Math.abs(impression).toFixed(2)}%</span>
            </p>
          </div>
          <div className="ax-transparent-gridline">
            <Chart
              type="line"
              height="120"
              options={chartConfig}
              series={[
                {
                  name: "Income",
                  data: chartData,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-2">
        <Button
          color="primary"
          variant="soft"
          isIcon
          className="size-8 rounded-full"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="size-4" />
        </Button>
        <Button
          color="primary"
          variant="soft"
          isIcon
          className="size-8 rounded-full"
        >
          <EnvelopeIcon className="size-4" />
        </Button>
        <Button
          color="primary"
          variant="soft"
          isIcon
          className="size-8 rounded-full"
        >
          <PhoneIcon className="size-4" />
        </Button>
      </div>
      <div className="h-12"></div>
    </Box>
  );
}

SellerCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  sales: PropTypes.string,
  impression: PropTypes.number.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.number).isRequired,
};
