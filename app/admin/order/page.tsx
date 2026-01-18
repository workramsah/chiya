import { prisma } from "@/prisma/clients";
import Anav from "../component/Anav";
import Finalsidebar from "../component/Finalsidebar";
import Order from "../component/Order";


export default async function Page() {
 const data = await prisma.items.findMany();
    return (
        <>

            <div>
                <div className="flex ">
                    <Anav />
                </div>

                <div className="flex space-x-4">
                    <Finalsidebar/>
                    <div>
                    <div className="text-[28px] font-medium py-4 border-b w-full">Orders</div>
                    {
                        data.map((dat)=>(
                            
                            <Order key={dat.id} name={` ${dat.name} `} price={dat.price}/>
                        ))
                    }
                    
                    </div>
                </div>


            </div>
        </>
    )
}