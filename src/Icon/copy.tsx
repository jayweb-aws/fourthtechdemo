import Icon from "./icons";
import { IconPropsT } from "./types";

function Copy(props: IconPropsT) {
  const { title = "Copy", size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 18 18" size={size} title={title} {...otherProps}>
      <rect
        x="0.5"
        y="0.5"
        width="11.4615"
        height="11.4615"
        className="fill-white dark:fill-black"
      />
      <rect x="5.53857" y="5.53906" width="12.4615" height="12.4615" />
    </Icon>
  );
}

export default Copy;
