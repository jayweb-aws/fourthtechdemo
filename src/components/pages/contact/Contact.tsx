import React from "react";
import ContactHero from "./contactHero/ContactHero";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("./contactForm/ContactForm"));

const Contact = () => {
  return (
    <>
      {/* <ContactHero></ContactHero> */}
      <ContactForm></ContactForm>
    </>
  );
};

export default Contact;
