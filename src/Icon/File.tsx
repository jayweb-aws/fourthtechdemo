import Icon from "./icons";
import { IconPropsT } from "./types";

function File(props: IconPropsT) {
  const { title = "File", size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 70 70" size={size} title={title} {...otherProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.9843 8.05575H23.5797C17.5131 8.03241 12.5401 12.8682 12.3972 18.932V50.1782C12.2631 56.3412 17.1485 61.4482 23.3114 61.5853C23.4018 61.5853 23.4893 61.5882 23.5797 61.5853H46.881C52.9885 61.3374 57.801 56.2916 57.7572 50.1782V23.4441L42.9843 8.05575Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.2188 8.02148V16.5061C42.2188 20.6477 45.5671 24.0048 49.7088 24.0165H57.7442"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.6719 44.7982H25.9219"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.7102 33.8509H25.9219"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default File;
