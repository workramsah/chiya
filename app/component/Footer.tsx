import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Inter } from "next/font/google"

const inter = Inter({subsets:["latin"]})
export default function Footer(){

    

    return(
        <>
        <div className="bg-sky-950 flex justify-around w-full h-[435px]] pt-2">
            <div>
            <h1 className={`${inter.className} text-white font-bold`}>Products</h1>
                <h1 className="text-white text-sm">Black Tea</h1>
                <h1 className="text-white text-sm">Green Tea</h1>
                <h1 className="text-white text-sm">White Tea</h1>
                <h1 className="text-white text-sm">Tea</h1>
            </div>

            <div>
                <h1 className="text-white font-bold ">Quick Links</h1>
                <h1 className="text-white text-sm ">FAQS</h1>
                <h1 className="text-white text-sm">Our Blog</h1>
                <h1 className="text-white text-sm">Promises to the World</h1>
                <h1 className="text-white text-sm">Tea</h1>
            </div>

            <div>
                <h1 className="text-white font-bold">Company</h1>
                <h1 className="text-white text-sm">Returns</h1>
                <h1 className="text-white text-sm">Shipping</h1>
                <h1 className="text-white text-sm">Wholesale</h1>
                <h1 className="text-white text-sm">Affiliates</h1>
            </div>

            <div>
                <h1 className="text-white font-bold">Resources</h1>
                <h1 className="text-white text-sm">How and Why to Use a Black tea</h1>
                <h1 className="text-white text-sm">How to Choose a Green tea</h1>
                <h1 className="text-white text-sm">For People Who Can't</h1>
                <h1 className="text-white text-sm">Lessons From Tea</h1>
            </div>

            <div>
                <h1 className="text-white font-bold">Newsletter</h1>
                <h1 className="text-white text-sm">Accept our invitation to receive 10% your</h1>
                <h1 className="text-white text-sm">frist order, plus hear about new products.</h1>
                <h1 className="text-white text-sm">courses and get special early access to anything we release.</h1>
                <div className="my-4">
                    <input placeholder="What's your email?" className="bg-white p-2"></input>
                    <button className="bg-black text-white p-2 font-bold">Sign Up</button>
                </div>
                <div className="flex my-4 space-x-16">
                   <div className="bg-white"><FaFacebookF /></div>
                   <div className="bg-white"><FaInstagram /></div>
                   <div className="bg-white"><AiOutlineYoutube /></div>
                   <div className="bg-white"><FaTiktok /></div>
                    
                    
                </div>
            </div>

        </div>
        </>
    )
}