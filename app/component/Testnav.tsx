"use client"

import { Dropdown } from "./Dropdown";
import { Drawer } from "./Drawer";
import { GoMultiSelect } from "react-icons/go";
import { useState } from "react"
import List from "./List";
import { BsHandbag } from "react-icons/bs";
import Link from "next/link";

export default function Testnav() {
    const [open, setOpen] = useState(true)
    return (
        <>
            <div>
                <div className="relative flex items-center justify-between bg-[rgba(221,221,221,1)] px-4 py-4 md:py-6 md:px-8 border-b-3 w-full">
                    <div className="flex items-center space-x-4">
                        <div className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu"><GoMultiSelect className="text-2xl cursor-pointer" /></div>
                    </div>
                    <h1 className="hidden md:block absolute left-3"><img src="/ekcuplogo.png" width={50}></img></h1>

                    {/* Centered logo */}
                    <h1 className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-lg font-bold pointer-events-none"><img src="/ekcuplogo.png" width={50}></img></h1>

                    {/* Desktop nav (visible md+) */}
                    <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base">
                        <Link href="/about"><h1 className="font-medium hover:bg-amber-400 px-2 rounded-sm">About Us</h1> </Link>
                        <h1 className="font-medium hover:bg-amber-400 px-2 rounded-sm"><List/></h1>
                        <Link href="/learn"><h1 className="font-medium hover:bg-amber-400 px-2 rounded-sm">Blog</h1> </Link>
                        <Link href="/"><h1 className="font-medium hover:bg-amber-400 px-2 rounded-sm">Contact</h1> </Link>
                        <Link href="/book"><h1 className="font-medium bg-amber-400 text-[16px] p-[12px] rounded-full hover:scale-105 transition ">Franchise Oppertunity</h1></Link>
                       
                        
                        
                        
                    </nav>

                    <div className="hidden md:flex  md:space-x-2 items-center">
                        <Drawer/>
                        <Dropdown/>
                        <BsHandbag className="h-[21px] w-[21px]"/>
                    </div>

                </div>

                {/* Mobile menu (visible when toggled) */}
                <div className={`${open ? "hidden" : "block"} md:hidden  space-y-2 font-medium px-3 bg-[rgba(221,221,221,1)]`}>
                    <h1 className="hover:bg-amber-400 w-fit px-2 rounded-sm">About Us</h1>
                    <h1 className="hover:bg-amber-400 w-fit px-2 rounded-sm"><List/></h1>
                    <h1 className="hover:bg-amber-400 w-fit px-2 rounded-sm">Blog</h1>
                    <h1 className="hover:bg-amber-400 w-fit px-2 rounded-sm">Frinches Opportunity</h1>
                </div>

                
            </div>
        </>
    )
}