import Heading from "../component/about/Heading";
import Backgrounds from "../component/Background";
import Footer from "../component/Footer";
import Author from "../component/learn/Author";
import Ebook from "../component/learn/Ebook";
import Ek from "../component/learn/Ek";
import Journey from "../component/learn/Journey";
import Sip from "../component/Sip";
import Testnav from "../component/Testnav";

export default function Page(){
    return(
        <>
        <div className="flex flex-col items-center w-full mx-auto">
            <Heading/>
            <div className="w-full">
                    <Testnav />
                </div>
            <Journey/>
            <Backgrounds/>
            <Ek/>
            <Sip/>
            <Ebook/>
            <Author/>
            <Footer/>
        </div>
        </>
    )
}