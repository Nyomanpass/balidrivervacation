import Navbar from "../components/Navbar"
import Header from "../components/Header"
import CallToAction from "../components/CallToAction"
import FaqSection from "../components/FaqSection"
import BestTimeToExplore from "../components/BestTimeToExplore"
import Footer from "../components/Footer"


export default function Home(){
    return(
       <>
         <Navbar/>
         <Header/>
         <CallToAction/>
         <FaqSection/>
         <BestTimeToExplore/>
         <Footer/>
       </>
    )
}

