
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import dynamic from 'next/dynamic'
import Skelten from '../../components/skeletoneffect/Skelten'
import MapAndForm from './MapAndForm'
import AddressInfo from './AddressInfo'
const CustomerReviewsAndFaq = dynamic(() => import('../(home)/CustomerReviewsAndFaq'), { ssr: false,loading:() => <Skelten/>, });
function page() {
  return (
    <>
    <Header bgPrimary={true}/>
    <MapAndForm/>
    <AddressInfo/>
    <CustomerReviewsAndFaq/>
    <Footer/>
    </>
  )
}

export default page