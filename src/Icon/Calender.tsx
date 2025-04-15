import Icon from "./icons";
import { IconPropsT } from "./types";

function Calender(props: IconPropsT) {
  const { title = "Calender", size, ...otherProps } = props;
  return (
    <Icon
      width="62"
      height="69"
      viewBox="0 0 62 69"
      size={size}
      title={title}
      {...otherProps}
    >
      <path
        d="M1.30859 25.8051H60.7218"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.8069 38.8876H45.8378"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.0129 38.8886H31.0438"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1926 38.8876H16.2235"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.8069 51.9081H45.8378"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.0129 51.9081H31.0438"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1926 51.9081H16.2235"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.4776 1V12.0241"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5518 1V12.0241"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.1275 6.29004H16.9032C7.11424 6.29004 1 11.7704 1 21.8442V52.1606C1 62.3928 7.11424 67.9999 16.9032 67.9999H45.0967C54.9165 67.9999 60.9999 62.4879 60.9999 52.4141V21.8442C61.0308 11.7704 54.9474 6.29004 45.1275 6.29004Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default Calender;
