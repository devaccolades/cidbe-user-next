import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import dynamic from "next/dynamic";
import Skelten from "../../components/skeletoneffect/Skelten";
import MapAndForm from "./MapAndForm";
import AddressInfo from "./AddressInfo";
import "./Contact.css";
import { getSeoApi } from "../../services/services";

const CustomerReviewsAndFaq = dynamic(
  () => import("../(home)/CustomerReviewsAndFaq"),
  { ssr: false, loading: () => <Skelten /> }
);

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
  const path = "/contact-us";
  const responseData = await fetchSeoData(path);
  const { meta_title, meta_description } = responseData;
  return {
    title: meta_title,
    description: meta_description,
    alternates: {
      canonical: `https://cidbi.com${path}`,
    },
  };
}

function page() {
  return (
    <>
      <Header bgPrimary={true} />
      <MapAndForm />
      <AddressInfo />
      <CustomerReviewsAndFaq />
      <Footer />
    </>
  );
}

export default page;
