"use client"

import List from "@/app/component/List";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";


export default function Addproducts(){
    const [prodname,setProdname]=useState("");
    const [prodprice,setProdprice]=useState(0);
    const [prodquantity,setquantity]=useState(0);
    const [prodtotal,setProdtotal]=useState(0);
    

    async function handle(){
        await axios.post("/api/items",{
            name:prodname,
            price:prodprice,   
        })
    }

    return(
        <>
        <div className="flex-col space-y-4 ">
                        <div>
                            <h1 className="text-base font-medium">Product Image</h1>
                            <div className="flex items-center">
                               <IoMdCloudUpload />
                            <input type="file"></input>
                            </div>
                        </div>
        
                        <div>
                            <h1 className="text-base font-medium">Product Name</h1>
                            <input value={prodname} onChange={(e)=>setProdname(e.target.value)} placeholder="Enter product name" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"></input>
                        </div>
        
                        <div>
                            <h1 className="text-base font-medium">Product Quantity</h1>
                            <input value={prodquantity} onChange={(e)=>setquantity(Number(e.target.value))} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"></input>
                        </div>
        
                        <div className=" md:flex-col-reverse space-x-5 flex-col">
                            <div>
                                <h1 className="text-base font-medium">Category</h1>
                                <div className=" w-52 h-11 outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 text-center flex items-center justify-center"><List /></div>
                            </div>
                            <div>
                                <h1 className="text-base font-medium">Product Price</h1>
                                <input value={prodprice} placeholder="Enter a price" onChange={(e)=>setProdprice(Number(e.target.value))} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"></input>
                            </div>
                            <div>
                                <h1 className="text-base font-medium">Total Price</h1>
                                <input value={prodtotal} onChange={(e)=>setProdtotal(Number(e.target.value))} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"></input>
                            </div>
        
                        </div>
                        <Button variant={"destructive"} size={"lg"} onClick={handle}  >Add</Button>
        
                            <div>{prodname} snf {prodprice} and {prodtotal} and {prodquantity}</div>
        
                    </div>
        </>
    )
}