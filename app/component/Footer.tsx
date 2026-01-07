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
            <h1 className={`${inter.className} text-white font-bold text-[16px]`}>Products</h1>
                <h1 className="text-white text-[16px]">Black Tea</h1>
                <h1 className="text-white text-[16px]">Green Tea</h1>
                <h1 className="text-white text-[16px]">White Tea</h1>
                <h1 className="text-white text-[16px]">Tea</h1>
            </div>

            <div>
                <h1 className="text-white font-bold text-[16px]">Quick Links</h1>
                <h1 className="text-white text-[16px] ">FAQS</h1>
                <h1 className="text-white text-[16px]">Our Blog</h1>
                <h1 className="text-white text-[16px]">Promises to the World</h1>
                <h1 className="text-white text-[16px]">Tea</h1>
            </div>

            <div>
                <h1 className="text-white font-bold text-[16px]">Company</h1>
                <h1 className="text-white text-[16px]">Returns</h1>
                <h1 className="text-white text-[16px]">Shipping</h1>
                <h1 className="text-white text-[16px]">Wholesale</h1>
                <h1 className="text-white text-[16px]">Affiliates</h1>
            </div>

            <div>
                <h1 className="text-white font-bold text-[16px]">Resources</h1>
                <h1 className="text-white text-[16px]">How and Why to Use a Black tea</h1>
                <h1 className="text-white text-[16px]">How to Choose a Green tea</h1>
                <h1 className="text-white text-[16px]">For People Who Can't</h1>
                <h1 className="text-white text-[16px]">Lessons From Tea</h1>
            </div>

            <div>
                <h1 className="text-white font-bold text-[16px]">Newsletter</h1>
                <h1 className="text-white text-[16px] ">Accept our invitation to receive 10% your</h1>
                <h1 className="text-white text-[16px]">frist order, plus hear about new products.</h1>
                <h1 className="text-white text-[16px]">courses and get special early access to anything we release.</h1>
                <div className="my-4">
                    <input placeholder="What's your email?" className="bg-white p-2"></input>
                    <button className="bg-black text-white p-2 font-bold">Sign Up</button>
                </div>
                <div className="flex my-4 space-x-16 items-center">
                   <div className="text-white text-[18px]"><FaFacebookF /></div>
                   <div className="text-white text-[21px]"><FaInstagram /></div>
                   <div className="text-white text-[25px]"><AiOutlineYoutube /></div>
                   <div className="text-white text-[18px]"><FaTiktok /></div>
                    
                    
                </div>
            </div>

        </div>
        </>
    )
}