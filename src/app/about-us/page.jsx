import AboutLanding from "../../app/about-us/AboutLanding";
import AboutSecondSection from "../about-us/AboutSecondSection";
import AboutThirdSection from "../about-us/AboutThirdSection";
import AboutFourthSection from '../about-us/AboutFourthSection'
import Footer from "../../layout/Footer";
import Timeline from '../../../src/app/about-us/Timeline'
import './About.css'
import Header from "../../layout/Header";
function page() {
  return (
    <>
      <Header bgPrimary={true} />
      <AboutLanding />
      <AboutSecondSection />
      <AboutThirdSection />
      <div className="bg-cover bg-no-repeat bg-[url(/images/home/customer-reviewsbg.svg)]">
        <Timeline />
        <AboutFourthSection />
      </div>
      <Footer />
    </>
  );
}

export default page;
