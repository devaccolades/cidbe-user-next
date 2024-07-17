import Cover from "../about-us/Cover";
import AboutLanding from "../../app/about-us/AboutLanding";
import AboutSecondSection from "../about-us/AboutSecondSection";
import AboutThirdSection from "../about-us/AboutThirdSection";
import AboutFourthSection from '../about-us/AboutFourthSection'
import Footer from "../../layout/Footer";
import Timeline from '../../../src/app/about-us/Timeline'
import './About.css'
function page() {
  return (
    <>
      <Cover />
      <AboutLanding />
      <AboutSecondSection/>
      <AboutThirdSection/>
      <div>
      <Timeline/>
      <AboutFourthSection/>
      </div>
    
      <Footer/>
    </>
  );
}

export default page;
