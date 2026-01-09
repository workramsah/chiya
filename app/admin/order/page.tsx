import Anav from "../component/Anav";
import Order from "../component/Order";
import Side from "../component/Side";

export default function Page() {
    return (
        <>

            <div>
                <div className="flex ">
                    <Anav />
                </div>

                <div className="flex space-x-4">
                    <Side />
                    <div>
                    <div className="text-[28px] font-medium py-4 border-b w-full">Orders</div>
                    <Order name="Ram narayan sah"/>
                    <Order name="Ram narayan sah"/>
                    <Order name="Ram narayan sah"/>
                    </div>
                </div>


            </div>
        </>
    )
}