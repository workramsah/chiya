import Heading from "../component/about/Heading";
import Backgroundimg from "../component/book/Backgrountimg";
import Testnav from "../component/Testnav";

export default function Page() {
    return (
        <>
            <div>
                <Heading />
                <div className="w-full">

                    <Testnav></Testnav>
                </div>
                <Backgroundimg />
            </div>

        </>
    )
}