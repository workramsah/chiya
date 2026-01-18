"use client"

import { IoPlayCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";

interface Props{
    name:string,
    price:number
}

export default  function Cup(props:Props) {
    async function  handle(e: React.MouseEvent){
        e.preventDefault();
        e.stopPropagation();
        await axios.post("/api/cart",{
            name:props.name,
            price:props.price
        })
    }
 return (
        <div>
            
        <div className="h-[612px] w-[365px] flex flex-col items-center ">
            <Link href={`/detail?names=${props.name}&prices=${props.price}`}>
            <img src="/tea.png" className="h-[325.27px] w-[349px]"></img>
            </Link>
            <div>
                <h1 className="font-bold text-[20px] hover:text-green-300">{props.name}</h1>
                <h1 className="font-bold text-[20px] hover:text-green-300">Orgainc Black Tea</h1>
            </div>
            <div className="flex space-x-2 my-3">
                <h1 className="text-red-500 text-sm ">${props.price} </h1>
                <s className="text-gray-400 text-sm">$1000</s>
            </div>
            <div className="flex items-center space-x-2 text-sm">
                <div className="flex h-[18px] text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <h1>135 reviews</h1>
            </div>
            <div className="flex items-center justify-center space-x-2 rounded-full h-[33px] w-[131px]  border-[1px]">
                <h1 className="text-[12px] font-black text-gray-400">Quick View</h1>
                <h1 className="text-[18px]  text-gray-400"><IoPlayCircleOutline /></h1>
            </div>
            
            <div onClick={handle} className="bg-green-200 h-[52px] w-[300px] cursor-pointer flex items-center justify-center hover:bg-green-400">
                <h1 className="font-semibold text-[18px]">Add to Cart</h1>
            </div>
        </div>
        </div>
    )
}