// Import Dependencies
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import {
  Bars2Icon,
  ListBulletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { useBreakpointsContext } from "app/contexts/breakpoint/context";
import { useDisclosure } from "hooks";
import { Button } from "components/ui";
import { getHeadings } from "./utils";

// ----------------------------------------------------------------------

function getActiveElement(rects) {
  if (rects.length === 0) {
    return -1;
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc;
      }

      return {
        index,
        position: item.y,
      };
    },
    { index: 0, position: rects[0]?.y },
  );

  return closest.index;
}

export function Toc({ wrapperSelector }) {
  const [active, setActive] = useState(0);
  const [headings, setHeadings] = useState([]);
  const { hash } = useLocation();
  const headingsRef = useRef([]);
  const { lgAndUp } = useBreakpointsContext();
  const [isOpen, { open, close }] = useDisclosure(false);

  const filteredHeadings = headings.filter((heading) => heading.depth > 1);

  const handleScroll = () => {
    setActive(
      getActiveElement(
        headingsRef.current.map((d) => d?.getNode()?.getBoundingClientRect()),
      ),
    );
  };

  useEffect(() => {
    const _headings = getHeadings(wrapperSelector);
    headingsRef.current = _headings;
    setHeadings(_headings);
    setActive(
      getActiveElement(
        _headings.map((d) => d.getNode().getBoundingClientRect()),
      ),
    );
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      element?.scrollIntoView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (filteredHeadings.length === 0) {
    return null;
  }

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
                <span>Table of Content</span>
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
              {filteredHeadings.map((item, i) => (
                <Item
                  key={item.id}
                  active={i === active}
                  id={item.id}
                  content={item.content}
                  onClick={close}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="sticky top-[5.5rem] col-span-1 flex max-h-[calc(100dvh-5.5rem)] flex-col self-start overflow-hidden">
      <h3 className="flex items-center gap-4 text-base font-medium text-gray-800 dark:text-dark-100">
        <ListBulletIcon className="size-6" />
        <span>Table of Content</span>
      </h3>
      <div className="custom-scrollbar mt-3 flex h-full flex-col overflow-y-auto">
        {filteredHeadings.map((item, i) => (
          <Item
            key={item.id}
            active={i === active}
            id={item.id}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

function Item({ active, id, content, ...rest }) {
  return (
    <Link
      to={`#${id}`}
      className={clsx(
        "inline-flex h-9 min-w-0 shrink-0 items-center border-l px-3 transition-colors",
        active
          ? "this:primary border-current bg-this-darker/[.08] font-medium text-this-darker dark:bg-this-lighter/10 dark:text-this-lighter"
          : "dark:border-dark-600",
      )}
      {...rest}
    >
      <span className="truncate">{content}</span>
    </Link>
  );
}

Item.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  content: PropTypes.string,
};

Toc.propTypes = {
  wrapperSelector: PropTypes.string,
};
