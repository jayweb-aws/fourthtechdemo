const NumberOfQuestion = ({ num, datas }: any) => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 214, 14, 3, 23, 324, 234, 32,
    324, 324, 234,
  ];

  return (
    <>
      <div className="rounded-md bg-white p-4">
        <h2 className="font-poppins font-medium capitalize text-[#232D42]">
          Number of question
        </h2>
        <div className="mt-5 flex flex-wrap items-center gap-3 px-2 transition-all">
          {datas?.questions?.map((val: any, indx: any) => (
            <div
              key={indx}
              className={`flex h-[32px] w-[32px] items-center justify-center rounded-full transition-all ${
                indx < num ? "!bg-[#E4F8FF]" : ""
              }  ${
                indx == num ? "bg-[#00ADEF] !text-white" : "bg-[#F0F0F0]"
              }  text-[#8A92A6]`}
            >
              <span>{indx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NumberOfQuestion;
