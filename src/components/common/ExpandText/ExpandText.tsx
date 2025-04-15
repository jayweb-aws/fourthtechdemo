import { useState } from "react";

const ExpendText = ({ color, children, maxChars = 100 }: any) => {
  let [expanded, setexpanded] = useState(true);

  if (children?.length <= maxChars) return <p>{children}</p>;
  let text = expanded ? children?.substring(0, maxChars) : children;
  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></p>
      <button
        style={{ color: `${color}` }}
        className={` !text-[${color}] underline`}
        onClick={() => setexpanded(!expanded)}
      >
        {expanded ? "Read More" : "Read Less"}
      </button>
    </div>
  );
};

export default ExpendText;
