import Certifications from "../component/about/Certifications";
import Chiya from "../component/about/Chiya";
import Ethical from "../component/about/Ethical";
import Farmer from "../component/about/Farmer";
import Franchise from "../component/about/Franchise";
import Heading from "../component/about/Heading";
import Meet from "../component/about/Meet";
import Purpose from "../component/about/Purpose";
import Where from "../component/about/Where";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
import Sip from "../component/Sip";
import Backgroundimg from "../component/book/Backgrountimg";
import Opportunity from "../component/about/Opportunity";
import About from "../component/about/About";
import Join from "../component/about/Join";


export default function Page(){
    return(
        <>
        <div className="flex flex-col items-center">
            <Heading/>
            <Nav></Nav>
            <Backgroundimg/>
            
            <Purpose/>
            <Chiya/>
            <Where/>
            <Farmer/>
            <About/>
            <Sip/>
            <Ethical/>
            <Meet/>
            <Certifications/>
            <Opportunity/>
            
            <Join/>
            <Franchise/>
            <Footer/>
        </div>
        </>
    )
}