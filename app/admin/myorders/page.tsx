import { prisma } from "@/prisma/clients";
import Anav from "../component/Anav";
import Finalsidebar from "../component/Finalsidebar";
import Order from "../component/Order";

export default async function Page() {
    const data = await prisma.order.findMany();
    return (
        <> <div>
            <div className="flex ">
                <Anav />
            </div>

            <div className="flex space-x-4">
                <Finalsidebar />
                <div>
                    <div className="text-[28px] font-medium py-4 border-b w-full ">Orders</div>
                    <div className=" h-175 overflow-y-auto no-scrollbar">
                    {
                        data.map((dat)=>(
                            
                            <Order key={dat.id} name={` ${dat.address} `} price={dat.total} date={dat.createdAt}/>
                        ))
                    }

                    </div>
                    
                    </div>
            </div>


        </div>
        </>
    )
}