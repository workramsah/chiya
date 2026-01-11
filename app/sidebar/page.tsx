"use client"

import { useState } from "react";
import { BsBox2Fill } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
export default function Page() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <div className="flex">
                <div className={`bg-blue-800 h-screen pt-7 p-5  duration-300 ${open ? "w-72" : "w-20"} relative flex-col space-y-8`}>
                    <BsArrowLeftShort className={`text-3xl bg-white text-black absolute -right-3 top rounded-full border-2 cursor-pointer ${!open && "rotate-180"}  `} onClick={() => setOpen(!open)} />
                    <div className="inline-flex space-x-4">
                        <BsBox2Fill className="bg-white text-3xl" />
                        <h1 className={`${open ? "text-2xl" : "hidden"} duration-300 text-white `}>Tailwind</h1>
                    </div>

                    <div className="inline-flex space-x-4">
                        <BsBox2Fill className="bg-white text-3xl" />
                        <h1 className={`${open ? "text-2xl" : "hidden"} duration-300 text-white `}>Tailwind</h1>
                    </div>
                </div>
                <div className="p-7"><h1 className="text-2xl font-semibold">Home Page</h1>

                </div>
            </div>
        </>
    )
}