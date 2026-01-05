import Heading from "../component/about/Heading";
import Nav from "../component/Nav";

export default function Page() {
    return (
        <>
            <div>
                <Heading />
                <Nav />
                <div className="">
                    <img src="book/book.png" className="w-[1920px] h-[857px]"></img>
                    <div>
                        <div>
                            <h1 className="font-bold ">About Us</h1>
                            <h1>Ek Cup Chiya-- One Cup One World</h1>

                        </div>
                        <h1> Born in Nepal and rooted in the Indian Northeast, Ek Cup Chiya is a private limited company with a simple, human promise: a cup of tea that carries culture, wellness, and dignity in every sip. More than a tea brand, we’re an invitation to pause, share, and belong. Through our Chiya Lounges, premium packaged teas, global e-commerce, and our books and magazines, we celebrate the everyday ritual that reconnects us to nature, to community, and to ourselves. “</h1>

                    </div>
                </div>
            </div>

        </>
    )
}