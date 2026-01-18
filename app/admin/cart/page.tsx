import Link from "next/link";
import Box from "../component/Box";
import Cartitems from "../component/cartitems";
import { prisma } from "@/prisma/clients";



export default async function Page() {
const data = await prisma.cart.findMany();
   
    return (
        <>
            <div>
                <div className="p-4 border-b flex justify-between items-center">
                    <h1 className="text-2xl">Your Cart</h1>
                    <h1 className="font-medium">{data.length} items</h1>
                </div>
                <div className="md:flex space-x-3  space-y-3">
                    <div className="w-full space-y-3">
                        {data.map((dat) => (
                            <Cartitems key={dat.id} teaname={` ${dat.name} `} teaprice={dat.price} />
                        ))}
                        <Link href="/">
                        <h1 className="font-semibold cursor-pointer text-amber-400">Back to shop</h1>
                        </Link>
                    </div>
                    <Box pric={4}/>
                </div>
            </div>
        </>
    )
}