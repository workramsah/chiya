"use client";

import { useState } from "react";
import { GoMultiSelect } from "react-icons/go";
import Link from "next/link";
import List from "./List";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
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

      {/* MOBILE MENU */}
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute top-full left-0 z-50 w-full md:hidden bg-[rgba(221,221,221,1)] px-4 py-3 space-y-2 font-medium`}
      >
        <Link href="/aboutus" onClick={() => setOpen(false)}>
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
    </>
  );
}