const ProgressBar = ({ h }: any) => {
  return (
    <div>
      <div
        style={{ height: h ? h : "8px" }}
        className="w-full bg-gray-200 rounded-full h-[8px]  dark:bg-gray-700"
      >
        <div
          style={{ height: h ? h : "8px", width: "50%" }}
          className="bg-[#4849E8]  rounded-full dark:bg-blue-500"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
