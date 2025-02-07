// Import Dependencies
import PropTypes from "prop-types";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

// Local Imports
import { Button, ScrollShadow } from "components/ui";
import { useDisclosure } from "hooks";
import VerticalSliderIcon from "assets/dualicons/vertical-slider.svg?react";
import { Header } from "./Header";
import { Search } from "./Search";
import { BankingCard } from "./BankingCard";
import { Apps } from "./Apps";
import { Widgets } from "./Widgets";
import { News } from "./News";
import { Upgrade } from "./Upgrade";

// ----------------------------------------------------------------------

export function RightSidebar() {
  const [isOpen, { open, close }] = useDisclosure();

  return (
    <>
      <Button
        onClick={open}
        variant="flat"
        isIcon
        className="relative size-9 rounded-full"
      >
        <VerticalSliderIcon className="size-6" />
      </Button>
      <RightSidebarContent isOpen={isOpen} close={close} />
    </>
  );
}

function RightSidebarContent({ isOpen, close }) {
  return (
    <Transition show={isOpen}>
      <Dialog open={true} onClose={close} static autoFocus>
        <TransitionChild
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 z-[60] bg-gray-900/50 backdrop-blur transition-opacity dark:bg-black/40"
        ></TransitionChild>

        <TransitionChild
          as={DialogPanel}
          enter="ease-out transform-gpu transition-transform duration-200"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in transform-gpu transition-transform duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          className="fixed inset-y-0 right-0 z-[61] flex w-screen transform-gpu flex-col bg-white transition-transform duration-200 dark:bg-dark-750 sm:inset-y-2 sm:mx-2 sm:w-80 sm:rounded-xl"
        >
          <Header close={close} />
          <ScrollShadow
            size={4}
            className="hide-scrollbar overflow-y-auto overscroll-contain pb-5"
          >
            <Search />
            <BankingCard />
            <Apps close={close} />
            <Widgets />
            <News />
            <Upgrade />
          </ScrollShadow>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}

RightSidebarContent.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
};
