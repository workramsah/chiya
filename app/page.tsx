import Ads from "./component/Ads"
import Backgrounds from "./component/Background"
import Bigcup from "./component/Bigcup"
import Blends from "./component/Blends"
import Container from "./component/Container"
import Darjelling from "./component/Darjelling"
import Faq from "./component/Faq"
import Footer from "./component/Footer"
import Frame27 from "./component/Frame27"
import Frame33 from "./component/Frame33"
import Header from "./component/Header"
import Heading3 from "./component/Heading3"
import Imagetxt from "./component/Imagetxt"
import Nav from "./component/Nav"
import Ram from "./component/Ram"
import Shipping from "./component/Shipping"
import Sip from "./component/Sip"
import Tea from "./component/Tea"


export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center w-full mx-auto" >
        <Ads />
        <Nav></Nav>

        <Tea />
        <Backgrounds />
        <Header />
        <Bigcup />
        <h1 className="font-bold text-[30px] text-center ">Teas Categories</h1>
        <div className="flex space-x-6">
          <Heading3 bg="bg-[linear-gradient(rgba(0,0,0,1),rgba(255,255,255,1))] w-[279.23px] h-[421.68px] rounded-4xl flex flex-col  items-center justify-evenly hover:scale-105 transition" name="Black"/>
          <Heading3 bg="bg-[linear-gradient(rgba(37,125,39,1),rgba(255,255,255,1))] w-[279.23px] h-[421.68px] rounded-4xl flex flex-col  items-center justify-evenly hover:scale-105 transition" name="Green"/>
          <Heading3 bg="bg-[linear-gradient(rgba(19,134,129,1),rgba(255,255,255,1))] w-[279.23px] h-[421.68px] rounded-4xl flex flex-col  items-center justify-evenly hover:scale-105 transition" name="Goldern"/>
          <Heading3 bg="bg-[linear-gradient(rgba(0,0,0,1),rgba(255,255,255,1))] w-[279.23px] h-[421.68px] rounded-4xl flex flex-col  items-center justify-evenly hover:scale-105 transition" name="Red"/>
          <Heading3 bg="bg-[linear-gradient(rgba(145,59,89,1),rgba(255,255,255,1))] w-[279.23px] h-[421.68px] rounded-4xl flex flex-col  items-center justify-evenly hover:scale-105 transition" name="Silver"/>
        </div>
        <div className="">

          <Container />
        </div>
        <Blends />
        <Darjelling />
        <Frame27 />
        <Frame33 />
        <Sip />
        <Imagetxt />
        <Shipping />
        <Ram />
        <Faq />
        <Footer />



      </div>


    </>
  )
}