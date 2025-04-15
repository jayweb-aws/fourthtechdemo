const DateTimeSection = () => {
  const data = [
    {
      title: "Next start date:",
      sub: "January 5th to March 5th",
    },
    {
      bar: "|",
    },
    {
      title: "Next start date:",
      sub: "April 5th to June 5th",
    },
    {
      bar: "|",
    },
    {
      title: "Next start date:",
      sub: "August 5th to October 5th",
    },
  ];
  return (
    <div className="bg-gray-500 py-7 px-4 mt-14 lg:mt-0 md:mt-0 font-nunito">
      <div className="container">
        <div className="  grid xsm:grid-cols-1 md:gap-0 gap-3 lg:gap-0 md:grid-cols-5 xl:grid-cols-5 sm:grid-cols-5 lg:grid-cols-5  justify-items-center content-center ">
          {data.map((item, idex) => (
            <div key={idex}>
              <div>
                <h1 className=" text-white text-xl">{item.title}</h1>
                <p className="font-bold text-white text-xl">{item.sub}</p>
                {item.bar ? (
                  <div className="hidden sm:block text-white text-5xl font-thin">
                    {item.bar}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateTimeSection;
