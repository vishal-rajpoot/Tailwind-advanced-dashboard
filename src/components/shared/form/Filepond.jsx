// Import Dependencies
import { FilePond as BaseFilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { forwardRef } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImagePreview);

// ----------------------------------------------------------------------

const FilePond = forwardRef(
  (
    {
      className,
      classNames,
      bordered = true,
      filled = false,
      grid = 1,
      style,
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        className={clsx(
          className,
          classNames?.root,
          bordered && "fp-bordered",
          filled && "fp-filled",
          grid && grid > 1 && "fp-grid",
        )}
        style={{ "--fp-grid": grid, ...style }}
      >
        <BaseFilePond className={classNames?.filepond} ref={ref} {...rest} />
      </div>
    );
  },
);

FilePond.displayName = "FilePond";

FilePond.propTypes = {
  className: PropTypes.string,
  classNames: PropTypes.object,
  bordered: PropTypes.bool,
  filled: PropTypes.bool,
  grid: PropTypes.number,
  style: PropTypes.object,
};

export { FilePond };
