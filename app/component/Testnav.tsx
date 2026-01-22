import { prisma } from "@/prisma/clients";
import { Drawer } from "./Drawer";
import { GoMultiSelect } from "react-icons/go";
import List from "./List";
import Link from "next/link";
import Accountlist from "./Accountlist";
import Bag from "./Bag";
import MobileMenu from "./MobileMenu";

export default async function Testnav() {
 
  const orders = await prisma.order.findMany();
  const cartCount = orders.reduce((sum, order) => sum + order.items, 0);
  
  return (
    <>
      <div className="relative">
        {/* NAVBAR */}
        <div className="relative flex items-center justify-between bg-[rgba(221,221,221,1)] px-4 py-4 md:py-6 md:px-8 border-b w-full">
          
          {/* Mobile Menu Icon */}
          <MobileMenu />

          {/* Desktop Logo */}
          <div className="hidden md:block absolute left-3">
            <img src="/ekcuplogo.png" width={50} alt="logo" />
          </div>

          {/* Mobile Center Logo */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 pointer-events-none">
            <img src="/ekcuplogo.png" width={50} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base">
            <Link href="/about">
              <span className="font-medium hover:bg-amber-400 px-2 rounded-sm">About Us</span>
            </Link>

            <span className="font-medium hover:bg-amber-400 px-2 rounded-sm">
              <List />
            </span>

            <Link href="/learn">
              <span className="font-medium hover:bg-amber-400 px-2 rounded-sm">Blog</span>
            </Link>

            <Link href="/">
              <span className="font-medium hover:bg-amber-400 px-2 rounded-sm">Contact</span>
            </Link>

            <Link href="/book">
              <span className="font-medium bg-amber-400 text-[16px] px-4 py-2 rounded-full hover:scale-105 transition">
                Franchise Opportunity
              </span>
            </Link>
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex space-x-3 items-center">
            <Drawer />
            <Accountlist/>
            <Bag cartCount={cartCount}/>
          </div>
        </div>

        {/* MOBILE MENU */}
      </div>
       
    </>
  );
}
