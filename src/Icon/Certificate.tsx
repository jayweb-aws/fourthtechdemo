import Icon from "./icons";
import { IconPropsT } from "./types";

function Certificate(props: IconPropsT) {
  const { title = "Certificate", size, ...otherProps } = props;
  return (
    <Icon viewBox="0 0 70 70" size={size} title={title} {...otherProps}>
      <path
        d="M45 50.5882C50.5228 50.5882 55 46.0848 55 40.5295C55 34.9742 50.5228 30.4707 45 30.4707C39.4772 30.4707 35 34.9742 35 40.5295C35 46.0848 39.4772 50.5882 45 50.5882Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.332 48.9121V64.0003L44.9987 58.9709L51.6654 64.0003V48.9121"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.3333 53.9409H11.6667C9.89856 53.9409 8.20286 53.2344 6.95262 51.9768C5.70238 50.7192 5 49.0136 5 47.2351V13.7058C5 10.0176 8 7 11.6667 7H58.3333C60.1014 7 61.7971 7.70651 63.0474 8.9641C64.2976 10.2217 65 11.9273 65 13.7058V47.2351C64.9988 48.411 64.6902 49.566 64.1051 50.5841C63.5201 51.6022 62.6791 52.4476 61.6667 53.0356"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 20.4119H55"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 30.4707H25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 40.5293H21.6667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default Certificate;
