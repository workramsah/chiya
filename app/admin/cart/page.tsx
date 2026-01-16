"use client"
import { useState } from "react";
import Box from "../component/Box";
import Cartitems from "../component/cartitems";

interface User {
    tea: string;
    price: number;
    quantity: number;
    total: number;
}

export default function Page() {
    const [data, setData] = useState([{ tea: "ram", price: 3, quantity: 4, total: 4 },
    { tea: "ram", price: 3, quantity: 4, total: 4 },
    { tea: "ram", price: 3, quantity: 4, total: 4 }])
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
                            <Cartitems teaname={` ${dat.tea} `} teaprice={dat.price} teaquantity={dat.quantity} teatotal={dat.total} />
                        ))}

                        <h1 className="font-semibold cursor-pointer text-amber-400">Back to shop</h1>
                    </div>
                    <Box pric={4}/>
                </div>
            </div>
        </>
    )
}