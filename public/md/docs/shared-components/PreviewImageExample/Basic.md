```jsx
// Import Dependencies
import { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Button, Upload } from "components/ui";
import { PreviewImg } from "components/shared/PreviewImg";

// ----------------------------------------------------------------------

export function Basic() {
  const [file, setFile] = useState(null);

  return (
    <div>
      <PreviewImg
        className="size-16 rounded-lg"
        src="/images/200x200.png"
        file={file}
      />

      <div className="mt-4">
        <Upload onChange={setFile} accept="image/*">
          {({ ...props }) => (
            <Button {...props} className="space-x-2 rtl:space-x-reverse">
              <ArrowUpTrayIcon className="size-5" />
              <span>Choose File</span>
            </Button>
          )}
        </Upload>
      </div>
    </div>
  );
}
```