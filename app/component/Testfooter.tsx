import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Testfooter() {
  return (
    <footer className="bg-sky-950 w-full text-white px-6 py-10">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {/* Products */}
        <div>
          <h1 className={`${inter.className} font-bold text-base mb-3`}>
            Products
          </h1>
          <ul className="space-y-2 text-sm">
            <li>Black Tea</li>
            <li>Green Tea</li>
            <li>White Tea</li>
            <li>Tea</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="font-bold text-base mb-3">Quick Links</h1>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>Our Blog</li>
            <li>Promises to the World</li>
            <li>Tea</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h1 className="font-bold text-base mb-3">Company</h1>
          <ul className="space-y-2 text-sm">
            <li>Returns</li>
            <li>Shipping</li>
            <li>Wholesale</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h1 className="font-bold text-base mb-3">Resources</h1>
          <ul className="space-y-2 text-sm">
            <li>How and Why to Use Black Tea</li>
            <li>How to Choose Green Tea</li>
            <li>For People Who Can’t</li>
            <li>Lessons From Tea</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h1 className="font-bold text-base mb-3">Newsletter</h1>
          <p className="text-sm leading-relaxed">
            Accept our invitation to receive 10% off your first order,
            plus hear about new products and early access.
          </p>

          {/* Email */}
          <div className="mt-4 flex flex-col bg-white sm:flex-row gap-2">
            <input
              placeholder="What's your email?"
              className="p-2 text-black w-full"
            />
            <button className="bg-black px-4 py-2 font-bold">
              Sign Up
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <AiOutlineYoutube />
            <FaTiktok />
          </div>
        </div>

      </div>
    </footer>
  );
}
