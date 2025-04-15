import Hero from "./hero/Hero";
import Bootcamps from "./bootcamps/Bootcamps";
import Hired from "./hired/Hired";
import Highlights from "./highlights/Highlights";
import Service from "./service/Service";
import Companies from "./copmanies/index";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Companies />
      <Bootcamps />
      <Highlights />
    </>
  );
}
