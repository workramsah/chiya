import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";

export default function Nav(){
    return(
        <>
        <div className="bg-[#DDDDDD] w-full h-[117.69px] flex justify-between  items-center">
            <div className="flex space-x-5 mx-3">
            <h1 className="text-[20px]">About us</h1>
            <h1 className="text-[20px]">Tea Product</h1>
            </div>


            <div className="flex space-x-5 items-center mx-3">
            <h1 className="text-[20px]">Blog</h1>
            <h1 className="text-[20px]">Contact</h1>
            <h1 className="font-bold bg-amber-400 text-[16px] p-[12px] rounded-full">franchise Opportunity</h1>
           <IoIosSearch className="h-[21px] w-[21px]"/>
           <CgProfile className="h-[21px] w-[21px]"/>
           <BsHandbag className="h-[21px] w-[21px]"/>
            
            
            


            </div>
        </div>
        </>
    )
}