import { useEffect, useState } from "react";
const useWidth = () => {
  const [width, setWidth] = useState<any>(0);

  useEffect(() => {
    let newWidth = window.innerWidth;
    if (newWidth > 1023) {
      let widthLg = newWidth - 270;
      setWidth(widthLg);
    } else {
      let widthSm = newWidth - 65;
      setWidth(widthSm);
    }
  }, []);

  useEffect(() => {
    let newWidth = window.innerWidth;
    const updateWindowDimensions = () => {
      if (newWidth > 1023) {
        let widthLg = newWidth - 270;
        setWidth(widthLg);
      } else {
        let widthSm = newWidth - 65;
        setWidth(widthSm);
      }
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, [width]);
  return { width, setWidth };
};
export default useWidth;
