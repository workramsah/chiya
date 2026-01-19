import Anav from "../component/Anav";
import Aorders from "../component/Aorders";
import Finalsidebar from "../component/Finalsidebar";


export default function Page() {
    return (
        <> <div>
            <div className="flex ">
                <Anav />
            </div>

            <div className="flex space-x-4">
                <Finalsidebar />
               <Aorders/>
            </div>


        </div>
        </>
    )
}