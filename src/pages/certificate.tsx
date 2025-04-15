import { BiLogoFacebook } from "react-icons/bi";

const certificate = () => {
  return (
    <div className="">
      <div className="grid grid-cols-12 h-[100vh]">
        <div className="col-span-4 bg-[#0F75BD] px-10">
          <div className="h-full flex flex-col">
            <div className="bg-white h-[80vh] px-2 pb-2  w-[20%] rounded-b-[51px]">
              <div className="border-[2px] h-full rounded-b-[51px] border-[#FFD11F] border-t-0 border-dashed">
                <h4 className="uppercase text-[#0F75BD] font-bold flex justify-center items-center">
                  ilearnaskill
                </h4>
              </div>
            </div>
            <div className="pb-5 mt-auto">
              <div className="flex gap-2.5">
                <div className="bg-white rounded-full h-7 w-7 flex justify-center items-center">
                  <BiLogoFacebook className="text-[20px] text-[#0E74BB]" />
                </div>
                <span className="text-white">Ilearnaskill</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 bg-[#FFFFFF]">
          <div className="text-center flex justify-center items-center flex-col h-full">
            <div>
              <h1 className="text-[80px] font-medium font-[cursive] italic text-[#0E74BB]">
                Certificate
              </h1>
              <h3 className="text-[45px] font-semibold  text-[#0E74BB]">
                of completion
              </h3>
            </div>
            <p className="font-bold text-[20px] mt-5">
              this document certify's that
            </p>
            <h1 className="text-[75px] font-medium border-b-[5px] border-[#FFD11C] text-[#0E74BB]">
              Mr. Bazaanah Pascal
            </h1>
            <div>
              <p className="font-semibold mt-2 text-[19px]">
                Has successfully completed the course requriements for
              </p>
              <h3 className="font-semibold !text-[#0E74BB] text-[23px]">
                Ethical Hacking
              </h3>
              <span className="font-semibold text-[21px]">At</span>
              <h3 className="font-semibold !text-[#0E74BB] text-[23px]">
                ilearnaskill.com
              </h3>
            </div>
            <div className="flex justify-between gap-8 my-12">
              <div className="flex gap-1 text-[22px]">
                <h4 className="font-semibold text-[#0E74BB] ">
                  Valid Through:
                </h4>
                <h4 className="font-semibold">20" MARCH 2023</h4>
              </div>
              <div className="font-semibold flex gap-1 text-[22px]">
                <h4 className="text-[#0E74BB]">Valid Through:</h4>
                <h4>20" MARCH 2023</h4>
              </div>
            </div>
            <div className="flex gap-8 items-center py-5">
              <div>
                <h4 className="font-semibold text-[#0E74BB]">
                  Validate this certificate's authenticity at
                </h4>
                <h4 className="font-semibold text-[#FFD11C]">
                  www.ilearnaskill.com/certificates/auth{" "}
                </h4>
                <h4 className="font-semibold">
                  Certificate Verification No: <span>14787347838</span>{" "}
                </h4>
              </div>
              <div>
                <h4 className="font-semibold text-[#0E74BB] border-[#0E74BB] border-dashed border-t-[3px]"></h4>
                <h4 className="font-semibold text-[#FFD11C] py-2">Mr. Name</h4>
                <h4 className="font-semibold">Course Supervisor And Ceo</h4>
              </div>
              <div>
                <h4 className="font-semibold text-[#0E74BB] border-[#0E74BB] border-dashed border-t-[3px]"></h4>
                <h4 className="font-semibold text-[#FFD11C] pt-2">Mr. Name</h4>
                <h4 className="font-semibold">Course Supervisor And Ceo</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default certificate;
