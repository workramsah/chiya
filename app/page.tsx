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


export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center" >
        <Ads/>
        <Nav></Nav>
        <img src="main.png" className="w-[1920px] h-[594px]"></img>
        <Backgrounds />
        <Header />
        <Bigcup/>
        <h1 className="font-bold text-[30px] text-center">Teas Categories</h1>
        <div className="flex space-x-6">
          <Heading3 /><Heading3 /><Heading3 /><Heading3 /><Heading3 />
        </div>
        <div className="">

        <Container/>
        </div>
        <Blends/>
      <Darjelling />
      <Frame27 />
      <Frame33 />
      <Sip/>
      <Imagetxt />
      <Shipping />
      <Ram/>
      <Faq/>
      <Footer/>



      </div>


    </>
  )
}