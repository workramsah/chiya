import List from "@/app/component/List";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import { IoMdCloudUpload } from "react-icons/io";


export default function Addproducts(){
    return(
        <>
        <div className="flex-col space-y-4">
                        <div>
                            <h1 className="text-base font-medium">Product Image</h1>
                            <div className="flex items-center">
                               <IoMdCloudUpload />
                            <input type="file"></input>
                            </div>
                        </div>
        
                        <div>
                            <h1 className="text-base font-medium">Product Name</h1>
                            <input className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"></input>
                        </div>
        
                        <div>
                            <h1 className="text-base font-medium">Product Description</h1>
                            <input className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"></input>
                        </div>
        
                        <div className=" md:flex-col-reverse space-x-5 flex-col">
                            <div>
                                <h1 className="text-base font-medium">Category</h1>
                                <div className=" w-52 h-11 outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 text-center flex items-center justify-center"><List /></div>
                            </div>
                            <div>
                                <h1 className="text-base font-medium">Product Price</h1>
                                <input className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"></input>
                            </div>
                            <div>
                                <h1 className="text-base font-medium">Offer Price</h1>
                                <input className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"></input>
                            </div>
        
                        </div>
                        <Button variant={"destructive"} size={"lg"}>Add</Button>
        
        
        
                    </div>
        </>
    )
}