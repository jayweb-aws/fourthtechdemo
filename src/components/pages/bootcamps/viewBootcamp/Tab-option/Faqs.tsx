import React from "react";
import { Accordion } from "flowbite-react";

const Faqs = ({ faqs }: { faqs: any[] }) => {
  return (
    <div className="font-nunito">
      <h5 className="text-xl font-bold mb-5">Frequently Asked Questions</h5>
      {faqs.map((item: any) => (
        <Accordion key={item.id} alwaysOpen={true} className="bg-white mb-5">
          <Accordion.Panel className="!bg-white">
            <Accordion.Title className="!bg-white focus:!ring-0 focus:!shadow-none hover:!bg-white">
              {item.question}
            </Accordion.Title>
            <Accordion.Content>{item.answer}</Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ))}
    </div>
  );
};

export default Faqs;
