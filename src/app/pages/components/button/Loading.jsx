import { Button, GhostSpinner, Spinner } from "components/ui";

const Loading = () => {
  return (
    <div className="inline-space">
      <Button className="space-x-2 rtl:space-x-reverse">
        <Spinner className="size-4 border-2" />
        <span>Loading</span>
      </Button>

      <Button className="space-x-2 rtl:space-x-reverse" color="primary">
        <GhostSpinner className="size-4 border-2" />
        <span>Loading</span>
      </Button>

      <Button className="space-x-2 rtl:space-x-reverse" color="primary">
        <GhostSpinner variant="soft" className="size-4 border-2" />
        <span>Loading</span>
      </Button>

      <Button className="space-x-2 rtl:space-x-reverse" color="primary">
        <GhostSpinner variant="innerDot" className="size-4" />
        <span>Loading</span>
      </Button>
    </div>
  );
};

export { Loading };
