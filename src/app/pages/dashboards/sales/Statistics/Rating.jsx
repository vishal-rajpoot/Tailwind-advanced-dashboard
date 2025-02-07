// Local Imports
import { Card, Circlebar } from "components/ui";

// ----------------------------------------------------------------------

export function Rating() {
  return (
    <Card className="flex items-center gap-3 p-4">
      <Circlebar size={12} value={85} color="success" isActive strokeWidth={10}>
        <div className="flex items-center justify-center text-xs">85%</div>
      </Circlebar>
      <div className="[word-break:break-word] text-xs+ font-medium text-gray-800 dark:text-dark-100">
        Current Rating
      </div>
    </Card>
  );
}
