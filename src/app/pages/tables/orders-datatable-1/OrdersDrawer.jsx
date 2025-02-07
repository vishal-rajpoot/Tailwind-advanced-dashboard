// Import Dependencies
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

// Local Imports
import {
  Avatar,
  Badge,
  Button,
  Table,
  Tag,
  THead,
  TBody,
  Th,
  Tr,
  Td,
} from "components/ui";
import { orderStatusOptions } from "./data";
import { useLocaleContext } from "app/contexts/locale/context";

// ----------------------------------------------------------------------

const cols = ["Name", "SKU", "Price", "Quantity", "Discount", "Total"];

export function OrdersDrawer({ isOpen, close, row }) {
  const statusOption = orderStatusOptions.find(
    (item) => item.value === row.original.order_status,
  );

  const { locale } = useLocaleContext();
  const timestapms = +row.original.created_at;
  const date = dayjs(timestapms).locale(locale).format("DD MMM YYYY");
  const time = dayjs(timestapms).locale(locale).format("hh:mm A");

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={close}>
        <TransitionChild
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 bg-gray-900/50 backdrop-blur transition-opacity dark:bg-black/40"
        />

        <TransitionChild
          as={DialogPanel}
          enter="ease-out transform-gpu transition-transform duration-200"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in transform-gpu transition-transform duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="fixed right-0 top-0 flex h-full w-full max-w-xl transform-gpu flex-col bg-white py-4 transition-transform duration-200 dark:bg-dark-700"
        >
          <div className="flex justify-between px-4 sm:px-5">
            <div>
              <div className="font-semibold">Order ID:</div>
              <div className="text-xl font-medium text-primary-600 dark:text-primary-400">
                {row.original.order_id} &nbsp;
                <Badge className="align-text-bottom" color={statusOption.color}>
                  {statusOption.label}
                </Badge>
              </div>
            </div>

            <Button
              onClick={close}
              variant="flat"
              isIcon
              className="size-6 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
            >
              <XMarkIcon className="size-4.5" />
            </Button>
          </div>

          <div className="mt-3 flex w-full justify-between px-4 sm:px-5">
            <div className="flex flex-col">
              <div className="mb-1.5 font-semibold">Customer:</div>

              <Avatar
                size={16}
                name={row.original.customer.name}
                src={row.original.customer.avatar_img}
                initialColor="auto"
                classNames={{
                  display: "mask is-squircle rounded-none text-xl",
                }}
              />

              <div className="mt-1.5 text-lg font-medium text-gray-800 dark:text-dark-50">
                {row.original.customer.name}
              </div>
            </div>
            <div className="text-end">
              <div className="font-semibold">Date:</div>
              <div className="mt-1.5">
                <p className="font-medium">{date}</p>
                <p className="mt-0.5 text-xs text-gray-400 dark:text-dark-300">
                  {time}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-1 px-4 sm:px-5">
            <div className="font-semibold">Shipping Address:</div>
            <p className="mt-1">
              {`${row.original.shipping_address?.street}, ${row.original.shipping_address?.line}`}
            </p>
          </div>

          <hr
            className="mx-4 my-4 h-px border-gray-150 dark:border-dark-500 sm:mx-5"
            role="none"
          />

          <p className="px-4 font-medium text-gray-800 dark:text-dark-100 sm:px-5">
            Customer orders:
          </p>

          <div className="mt-1 grow overflow-x-auto overscroll-x-contain px-4 sm:px-5">
            <Table
              hoverable
              className="w-full text-left text-xs+ rtl:text-right [&_.table-td]:py-2"
            >
              <THead>
                <Tr className="border-y border-transparent border-b-gray-200 dark:border-b-dark-500">
                  {cols.map((title, index) => (
                    <Th
                      key={index}
                      className="py-2 font-semibold uppercase text-gray-800 first:px-0 last:px-0 dark:text-dark-100"
                    >
                      {title}
                    </Th>
                  ))}
                </Tr>
              </THead>
              <TBody>
                {row.original.products.map((tr) => (
                  <Tr
                    key={tr.sku}
                    className="border-y border-transparent border-b-gray-200 dark:border-b-dark-500"
                  >
                    <Td className="px-0 font-medium ltr:rounded-l-lg rtl:rounded-r-lg">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="size-8">
                          <img
                            src={tr.image}
                            alt={tr.name}
                            className="h-full w-full rounded object-cover object-center"
                          />
                        </div>
                        <span>{tr.name}</span>
                      </div>
                    </Td>
                    <Td>{tr.sku}</Td>
                    <Td>{tr.price}</Td>
                    <Td>{tr.qty}</Td>
                    <Td>{tr.discount}</Td>
                    <Td className="px-0 font-medium text-gray-800 dark:text-dark-100 ltr:rounded-r-lg rtl:rounded-l-lg">
                      {tr.total}
                    </Td>
                  </Tr>
                ))}
              </TBody>
            </Table>
          </div>

          <div className="flex justify-end px-4 sm:px-5">
            <div className="mt-4 w-full max-w-xs text-end">
              <Table className="w-full [&_.table-td]:px-0 [&_.table-td]:py-1">
                <TBody>
                  <Tr>
                    <Td>Summary :</Td>
                    <Td>
                      <span className="font-medium text-gray-800 dark:text-dark-100">
                        ${row.original.subtotal}
                      </span>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Delivery fee :</Td>
                    <Td>
                      <span className="font-medium text-gray-800 dark:text-dark-100">
                        ${row.original.delivery_fee}
                      </span>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tax :</Td>
                    <Td>
                      <span className="font-medium text-gray-800 dark:text-dark-100">
                        ${row.original.tax}
                      </span>
                    </Td>
                  </Tr>
                  <Tr className="text-lg text-primary-600 dark:text-primary-400">
                    <Td>Total :</Td>
                    <Td>
                      <span className="font-medium">${row.original.total}</span>
                    </Td>
                  </Tr>
                </TBody>
              </Table>
              <div className="mt-2 flex justify-end space-x-1.5">
                <Tag component="button" className="min-w-[4rem]">
                  Invoice
                </Tag>
                <Tag
                  component="button"
                  color="primary"
                  className="min-w-[4rem]"
                >
                  View
                </Tag>
              </div>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}

OrdersDrawer.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  row: PropTypes.object,
};
