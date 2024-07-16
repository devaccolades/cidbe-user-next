import Cover from "../about-us/Cover";
import AboutLanding from "../../app/about-us/AboutLanding";
import AboutSecondSection from "../about-us/AboutSecondSection"
import './About.css'
function page() {
  return (
    <>
      <Cover />
      <AboutLanding />
      <AboutSecondSection/>
    </>
  );
}

export default page;
