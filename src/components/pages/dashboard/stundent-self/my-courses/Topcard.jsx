const TopCard = ({ icon, bg, name, title }) => {
  return (
    <div className="cursor-pointer transition hover:scale-[0.9]">
      <div
        className={`w-full rounded-md  p-5 pt-[1.5rem] pb-[1.5rem] text-white`}
        style={{ background: bg }}
      >
        <div className="flex justify-start">
          <img src={icon?.src} alt="card" className="h-[61px] w-[61px]" />
        </div>

        <h1 className="py-5.5 text-[33px] font-medium">{title}</h1>
        <span className="text-[13px] font-normal tracking-wider	text-[#FFFFFF]">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TopCard;
