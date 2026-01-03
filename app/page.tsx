import Backgrounds from "./component/Background"
import Container from "./component/Container"
import Cup from "./component/Cup"
import Darjelling from "./component/Darjelling"
import Frame27 from "./component/Frame27"
import Frame33 from "./component/Frame33"
import Header from "./component/Header"
import Heading3 from "./component/Heading3"
import Imagetxt from "./component/Imagetxt"
import Nav from "./component/Nav"
import Shipping from "./component/Shipping"


export default function Page() {
  return (
    <>
      <div className="" >

        <Nav></Nav>
        <img src="main.png"></img>
        <Backgrounds />
        <Header />
        <div className="flex space-x-[24px]">
          <Cup />
          <Cup />
          <Cup />
          <Cup />
          <Cup />
          <Cup />

        </div>
        <h1 className="font-bold text-[30px] text-center">Teas Categories people</h1>
        <div className="flex space-x-6">
          <Heading3 /><Heading3 /><Heading3 /><Heading3 />
        </div>
        <Container />
      </div>
      <Darjelling />
      <Frame27 />
      <Frame33 />
      <Imagetxt />
      <Shipping />


    </>
  )
}