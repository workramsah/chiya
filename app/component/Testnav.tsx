"use client";

import { Dropdown } from "./Dropdown";
import { Drawer } from "./Drawer";
import { GoMultiSelect } from "react-icons/go";
import { useState } from "react";
import List from "./List";
import { BsHandbag } from "react-icons/bs";
import Link from "next/link";

export default function Testnav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative">
        {/* NAVBAR */}
        <div className="relative flex items-center justify-between bg-[rgba(221,221,221,1)] px-4 py-4 md:py-6 md:px-8 border-b w-full">
          
          {/* Mobile Menu Icon */}
          <div className="flex items-center space-x-4">
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <GoMultiSelect className="text-2xl" />
            </div>
          </div>

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

            <Link href="/contact">
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
            <Dropdown />
            <BsHandbag className="h-[21px] w-[21px]" />
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-full left-0 z-50 w-full md:hidden bg-[rgba(221,221,221,1)] px-4 py-3 space-y-2 font-medium`}
        >
          <Link href="/about" onClick={() => setOpen(false)}>
            <div className="hover:bg-amber-400 w-fit px-2 rounded-sm">
              About Us
            </div>
          </Link>

          <div className="hover:bg-amber-400 w-fit px-2 rounded-sm">
            <List />
          </div>

          <Link href="/learn" onClick={() => setOpen(false)}>
            <div className="hover:bg-amber-400 w-fit px-2 rounded-sm">
              Blog
            </div>
          </Link>

          <Link href="/book" onClick={() => setOpen(false)}>
            <div className="hover:bg-amber-400 w-fit px-2 rounded-sm">
              Franchise Opportunity
            </div>
          </Link>
        </div>

        {/* PAGE CONTENT */}
      </div>
       
    </>
  );
}
