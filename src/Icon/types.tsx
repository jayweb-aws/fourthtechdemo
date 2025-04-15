export type SizeT = number | string;
export type ColorT = string;

export type IconPropsT = {
  // Size of element, will be passed to the svg width/height style.
  size?: SizeT;
  // Allows you to set the SVG <title> label, which is used for accessibility
  title?: string;
} & React.SVGProps<SVGSVGElement>;
