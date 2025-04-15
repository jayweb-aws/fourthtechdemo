import * as React from "react";
import { IconPropsT } from "./types";

const Icon: React.FC<IconPropsT> = (props) => {
  const {
    children,
    title,
    size = "24px",
    className,
    height,
    fill,
    ...otherProps
  } = props;

  return (
    <svg
      style={{ fill: `${fill || "currentcolor"}` }}
      className={`${className} text-black dark:text-white`}
      height={height || size}
      width={size || "auto"}
      {...otherProps}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

export default Icon;
