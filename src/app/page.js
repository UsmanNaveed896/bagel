import Image from "next/image";
import Section1 from "./components/home-page-sections/section1";
import Section2 from "./components/home-page-sections/section2";
import Section3 from "./components/home-page-sections/section3";
import Section4 from "./components/home-page-sections/section4";
import Section5 from "./components/home-page-sections/section5";
import Section6 from "./components/home-page-sections/section6";
import Section7 from "./components/home-page-sections/section7";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
      <Section7/>
    </>
  );
}
