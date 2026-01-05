import Certifications from "../component/about/Certifications";
import Chiya from "../component/about/Chiya";
import Ethical from "../component/about/Ethical";
import Farmer from "../component/about/Farmer";
import Franchise from "../component/about/Franchise";
import Heading from "../component/about/Heading";
import Meet from "../component/about/Meet";
import Purpose from "../component/about/Purpose";
import What from "../component/about/What";
import Where from "../component/about/Where";
import Footer from "../component/Footer";
import Frame27 from "../component/Frame27";
import Nav from "../component/Nav";
import Sip from "../component/Sip";

export default function Page(){
    return(
        <>
        <div className="flex flex-col items-center">
            <Heading/>
            <Nav></Nav>
            <img src="about/main.png" className="w-full h-[857px]"></img>
            <Purpose/>
            <Chiya/>
            <Where/>
            <Farmer/>
            <Sip/>
            <Ethical/>
            <Meet/>
            <Certifications/>
            <Frame27/>
            <Franchise/>
            <Footer/>
        </div>
        </>
    )
}