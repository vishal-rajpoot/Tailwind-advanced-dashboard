
// Local Imports
import { Button } from "components/ui";
import { createScopedKeydownHandler } from "utils/dom/createScopedKeydownHandler";
import { useLocaleContext } from "app/contexts/locale/context";

// ----------------------------------------------------------------------

const ButtonGroup = () => {
  const { isRtl } = useLocaleContext();

  const onKeyDown = createScopedKeydownHandler({
    siblingSelector: ".btn-base",
    parentSelector: "[data-button-group]",
    activateOnFocus: false,
    loop: true,
    orientation: "horizontal",
    dir: isRtl ? "rtl" : "ltr",
  });

  return (
    <div
      className="flex flex-wrap -space-x-px rtl:space-x-reverse"
      data-button-group
    >
      <Button
        variant="outlined"
        className="ltr:rounded-r-none rtl:rounded-l-none"
        onKeyDown={onKeyDown}
      >
        Import
      </Button>
      <Button
        variant="outlined"
        className="rounded-none px-5 py-2"
        onKeyDown={onKeyDown}
      >
        Export
      </Button>
      <Button
        variant="outlined"
        className="ltr:rounded-l-none rtl:rounded-r-none"
        onKeyDown={onKeyDown}
      >
        Print
      </Button>
    </div>
  );
};

export { ButtonGroup };
