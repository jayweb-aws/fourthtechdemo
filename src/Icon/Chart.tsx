import Icon from "./icons";
import { IconPropsT } from "./types";

function Chart(props: IconPropsT) {
  const { title = "Chart", size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 70 70" size={size} title={title} {...otherProps}>
      <path
        d="M21.4983 29.7546V49.7634"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.1076 20.1836V49.7665"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.4983 40.3276V49.7631"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.6654 5.83398H21.332C11.8043 5.83398 5.83203 12.5776 5.83203 22.124V47.8773C5.83203 57.4237 11.7765 64.1673 21.332 64.1673H48.6654C58.2209 64.1673 64.1654 57.4237 64.1654 47.8773V22.124C64.1654 12.5776 58.2209 5.83398 48.6654 5.83398Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default Chart;
