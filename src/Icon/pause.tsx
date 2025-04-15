import Icon from "./icons";
import { IconPropsT } from "./types";

function Pause(props: IconPropsT) {
  const { title = "Upload", size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 80 80" size={size} title={title} {...otherProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 0C62.088 0 80 17.908 80 40C80 62.092 62.088 80 40 80C17.908 80 0 62.092 0 40C0 17.908 17.908 0 40 0Z"
        fill="#001F4D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.1034 40.242C52.1034 36.8267 34.5983 25.9008 32.6125 27.8654C30.6268 29.8299 30.4358 50.469 32.6125 52.6186C34.7892 54.7758 52.1034 43.6573 52.1034 40.242Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}
{
  /* <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">

  </svg> */
}

export default Pause;
