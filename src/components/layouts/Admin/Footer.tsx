const FooterDashboard = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex justify-between p-4 bg-white">
      <ul className="flex gap-x-[10px]">
        <li className="text-[#232D42] cursor-pointer text-[13px] 2xl:text-[14px] tracking-[2%]">
          Privacy Policy
        </li>
        <li className="text-[#232D42] cursor-pointer text-[13px] tracking-[2%]">
          Terms of Use
        </li>
      </ul>
      <p className="text-[#232D42] text-[14px] 2xl:text-[16px]">
        {" "}
        {year} Fourth IT Academy
      </p>
    </footer>
  );
};

export default FooterDashboard;
