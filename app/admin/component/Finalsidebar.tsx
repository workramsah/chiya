"use client"

import { FaFileCircleCheck } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";

import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";
export default function Finalsidebar() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className="flex">
                <div className={`bg-blue-800 h-screen pt-7 p-5  duration-300 ${open ? "w-72" : "w-20"} relative flex-col  `}>
                    <BsArrowLeftShort className={`text-3xl bg-white text-black absolute -right-3 top rounded-full border-2 cursor-pointer ${!open && "rotate-180"}  `} onClick={() => setOpen(!open)} />
                    <Link href="/admin/addproduct">
                        <div className="inline-flex space-x-4">
                            <MdAddShoppingCart className="bg-white text-3xl" />
                            <h1 className={`${open ? "text-2xl" : "hidden"} duration-300 text-white `}>Add Product</h1>
                        </div>
                    </Link>

                    <Link href="/admin/order">
                        <div className="inline-flex space-x-4 ">

                            <FaFileCircleCheck className="bg-white text-3xl" />
                            <h1 className={`${open ? "text-2xl" : "hidden"} duration-300 text-white `}>Orders</h1>
                        </div>
                    </Link>
                </div>
                <div className="p-7"><h1 className="text-2xl font-semibold"></h1>

                </div>
            </div>
        </>
    )
}