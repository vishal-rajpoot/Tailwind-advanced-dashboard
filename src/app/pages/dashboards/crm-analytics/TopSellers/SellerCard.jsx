// Import Dependencies
import { PropTypes } from "prop-types";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Avatar, Button, Card } from "components/ui";

// ----------------------------------------------------------------------

export function SellerCard({
  name,
  avatar,
  messages,
  mails,
  sells,
  target,
  clients,
  relations,
  awards,
}) {
  return (
    <Card skin="shadow" className="w-72 shrink-0 space-y-9 p-4 sm:p-5">
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-3">
          <Avatar
            size={10}
            name={name}
            src={avatar}
            classNames={{ display: "mask is-squircle rounded-none" }}
            initialColor="auto"
          />

          <div>
            <p className="font-medium text-gray-800 dark:text-dark-100">
              {name}
            </p>
            <p className="text-xs text-gray-400 dark:text-dark-300">Employee</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Button className="size-7" color="primary" variant="soft" isIcon>
              <ChatBubbleOvalLeftEllipsisIcon className="size-4" />
            </Button>
            {messages && (
              <div className="pointer-events-none absolute right-0 top-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary-600 px-1 text-tiny font-medium leading-none text-white dark:bg-primary-500">
                {messages}
              </div>
            )}
          </div>
          <div className="relative">
            <Button className="size-7" color="primary" variant="soft" isIcon>
              <EnvelopeIcon className="size-4" />
            </Button>
            {mails && (
              <div className="pointer-events-none absolute right-0 top-0 -m-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary-600 px-1 text-tiny font-medium leading-none text-white dark:bg-primary-500">
                {mails}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <div>
          <p className="text-xs+">Sells</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-dark-100">
            {sells}
          </p>
        </div>
        <div>
          <p className="text-xs+">Target</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-dark-100">
            {target}
          </p>
        </div>
        <div>
          <p className="text-xs+">Clients</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-dark-100">
            {clients}
          </p>
        </div>
      </div>

      <div className="grow">
        <div className="flex w-full gap-1">
          {relations?.calls && (
            <div
              className="this:primary h-2 rounded-full bg-this dark:bg-this-light"
              style={{
                width: `${relations.calls * 100}%`,
              }}
            />
          )}
          {relations?.chatMessages && (
            <div
              className="this:success h-2 rounded-full bg-this dark:bg-this-light"
              style={{
                width: `${relations.chatMessages * 100}%`,
              }}
            />
          )}
          {relations?.emails && (
            <div
              className="this:info h-2 rounded-full bg-this dark:bg-this-light"
              style={{
                width: `${relations.emails * 100}%`,
              }}
            />
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {relations?.calls && (
            <div className="inline-flex items-center gap-x-2">
              <div className="this:primary size-2 rounded-full bg-this dark:bg-this-light" />
              <div className="flex space-x-1 text-xs leading-none rtl:space-x-reverse">
                <span className="font-medium text-gray-800 dark:text-dark-100">
                  Calls
                </span>
                <span>{(relations.calls * 100).toFixed(0)}%</span>
              </div>
            </div>
          )}
          {relations?.chatMessages && (
            <div className="inline-flex items-center gap-x-2">
              <div className="this:success size-2 rounded-full bg-this dark:bg-this-light" />
              <div className="flex space-x-1 text-xs leading-none rtl:space-x-reverse">
                <span className="font-medium text-gray-800 dark:text-dark-100">
                  Chat Messages
                </span>
                <span>{(relations.chatMessages * 100).toFixed(0)}%</span>
              </div>
            </div>
          )}
          {relations?.emails && (
            <div className="inline-flex items-center gap-x-2">
              <div className="this:info size-2 rounded-full bg-this dark:bg-this-light" />
              <div className="flex space-x-1 text-xs leading-none rtl:space-x-reverse">
                <span className="font-medium text-gray-800 dark:text-dark-100">
                  Emails
                </span>
                <span>{(relations?.emails * 100).toFixed(0)}%</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          {awards.map((award) => (
            <img
              key={award.uid}
              data-tooltip
              data-tooltip-content={award.label}
              className="size-6"
              src={award.image}
              alt={award.label}
            />
          ))}
        </div>
        <Button
          variant="flat"
          isIcon
          className="size-8 rounded-full ltr:-mr-1.5 rtl:-ml-1.5"
        >
          <Cog6ToothIcon className="size-5" />
        </Button>
      </div>
    </Card>
  );
}

SellerCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  messages: PropTypes.number,
  mails: PropTypes.number,
  sells: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired,
  clients: PropTypes.number.isRequired,
  relations: PropTypes.shape({
    calls: PropTypes.number,
    chatMessages: PropTypes.number,
    emails: PropTypes.number,
  }),
  awards: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
  ),
};
