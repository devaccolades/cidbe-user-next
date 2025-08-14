import AboutLanding from "../../app/about-us/AboutLanding";
import AboutSecondSection from "../about-us/AboutSecondSection";
import AboutThirdSection from "../about-us/AboutThirdSection";
import AboutFourthSection from "../about-us/AboutFourthSection";
import Footer from "../../layout/Footer";
import Timeline from "../../../src/app/about-us/Timeline";
import Header from "../../layout/Header";

import { getSeoApi } from "../../services/services";

import "./About.css";

async function fetchSeoData(path) {
  let data = {};
  try {
    const res = await getSeoApi(path);
    data = res.data.data[0];
  } catch (error) {
    console.log(error);
  }
  return data;
}

export async function generateMetadata() {
  const path = "/about-us";
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
    alternates: {
      canonical: `https://cidbi.com${path}`,
    },
    robots: {
       index: true,
       follow: true 
    },
  };
}

function page() {
  return (
    <>
      <Header bgPrimary={true} />
      <AboutLanding />
      <AboutSecondSection />
      <AboutThirdSection />
      <div className="bg-cover bg-no-repeat about-bg">
        <Timeline />
        <AboutFourthSection />
      </div>
      <Footer />
    </>
  );
}

export default page;
