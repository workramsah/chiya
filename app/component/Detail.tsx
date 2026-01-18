"use client"
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

interface Props{
    name:any;
    price:any;
    
}

export default function Detail(props:Props) {
    const [imag,setImag]= useState("/cup.png");
   
    return (
        <>
            <div className="md:flex justify-evenly space-x-14 mx-5 ">
                <div className="space-y-6 ">
                    <img src={imag} className="border  mx-4 my-4"></img>
                    <div className="flex space-x-4 ">
                        <img src="/home.jpg" onClick={()=>setImag("/home.jpg")} className="w-40 h-40 border "></img>
                        <img src="/leaf.png" onClick={()=>setImag("/leaf.png")} className="w-40 h-40 border"></img>
                        <img src="/book.png" onClick={()=>setImag("/book.png")} className="w-40 h-40 border"></img>
                        
                    </div>

                </div>
                <div className="space-y-6 pt-4">
                <div className="border-b space-y-6">
                    <h1 className="font-medium text-3xl">{props.name}</h1>
                    <h1 className="flex text-orange-500"><FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </h1>
                    <h1 >This is just not only a brow tea but there are alot of ingredient so if you want to know about the tea and is still you don't know then you should be now </h1>
                    <div>
                        <span className="font-bold text-3xl">${props.price}</span><s>$155</s>

                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex space-x-40 ">
                        <h1 className="font-semibold">Brand</h1><h1>Generic</h1>
                    </div>
                    <div className="flex space-x-40">
                        <h1 className="font-semibold">Color</h1><h1>Multi</h1>
                    </div>
                    <div className="flex space-x-40 ">
                        <h1 className="font-semibold">Category</h1><h1>Earphone</h1>
                    </div>
                    

                </div>

                <div className="flex space-x-6 justify-center">
                    <h1 className="w-50 h-14 text-center flex justify-center items-center bg-gray-300">Add to Cart</h1>
                    <Link href="/admin/cart">
                    <h1 className="w-50 h-14 text-center flex justify-center items-center bg-amber-500">Buy Now</h1>
                    </Link>
                </div>
                </div>
            </div>
        </>
    )
}