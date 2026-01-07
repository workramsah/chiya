import { IoIosSearch } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import Products from "./Products";
import Link from "next/link";
import { Dropdown } from "./Dropdown";
import { Drawer } from "./Drawer";


export default function  Nav(){
    return(
        <>
        <div className="bg-[#DDDDDD] w-full h-[117.69px] flex justify-between  items-center ">
            <div className="flex space-x-5 mx-3">
            <Link href="/aboutus"><h1 className="text-[20px] font-bold hover:text-yellow-500  sm:visible">About us</h1></Link>
            
            <h1 className="text-8 hover:text-yellow-500 "><Products/></h1>
            </div>


            <div className="flex space-x-5 items-center mx-3">
            <Link href="/learn"><h1 className="text-[20px] font-bold hover:text-yellow-500">Blog</h1></Link>
            <Link href="/"><h1 className="text-[20px] hover:text-yellow-500 font-bold">Contact</h1></Link>
            <Link href="/book"><h1 className="font-bold bg-amber-400 text-[16px] p-[12px] rounded-full hover:scale-105 transition">franchise Opportunity</h1></Link>
            
            
           <div ><Drawer/></div>
           <div><Dropdown/></div>
           <BsHandbag className="h-[21px] w-[21px]"/>
            
            
            


            </div>
        </div>
        </>
    )
}