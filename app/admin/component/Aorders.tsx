import { prisma } from "@/prisma/clients"

export default async function Aorders() {
    const Order = await prisma.order.findMany();
    return (
        <>
            <div className="flex-col space-y-6 h-screen overflow-y-auto">
                <h1 className="font-bold text-3xl border-b-black ">Orders</h1>
                {Order.map((orde) => (

                    
                        <div className=" space-y-3 border-2 rounded-2xl text-center w-40" key={orde.id} >
                            <h1 className="font-semibold">Address : {orde.address} </h1>
                            <h2 className="font-semibold">Total price : {orde.total}</h2>
                        </div>
                

                ))}


            </div>
        </>
    )
}