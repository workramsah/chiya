import Heading from "../component/about/Heading";
import Backgrounds from "../component/Background";
import Footer from "../component/Footer";
import Author from "../component/learn/Author";
import Ebook from "../component/learn/Ebook";
import Ek from "../component/learn/Ek";
import Journey from "../component/learn/Journey";
import Nav from "../component/Nav";
import Sip from "../component/Sip";

export default function Page(){
    return(
        <>
        <div className="flex flex-col items-center w-full mx-auto">
            <Heading/>
            <Nav/>
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