import { ClipLoader } from "react-spinners";

const Button = ({
  title,
  type,
  loading,
}: {
  title: any;
  type: any;
  loading: any;
}) => {
  return (
    <button
      type={type}
      className="glow-on-hover rounded bg-[#000000] px-5 py-2.5 text-[#FFFFFF]"
    >
      {loading ? (
        <ClipLoader className="!border-[4px]" color="#fff" size={30} />
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
