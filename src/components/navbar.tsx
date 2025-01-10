"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart from "../../public/images/shopping-cart.png";
import user from "../../public/images/user.png";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <nav className=" px-6 md:px-16 py-4 bg-gradient-to-r from-white via-[#ffd665] to-white">

<ul className="font-semibold text-black md:flex justify-between items-center hidden ">
    {/* Left Section */}
    <div className="flex space-x-12">
      <li className="hover:text-gray-800 cursor-pointer">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:text-gray-800 cursor-pointer">
        <Link href="/about">About</Link>
      </li>
      <li className="hover:text-gray-800 cursor-pointer">
        <Link href="/contact">Contact</Link>
      </li>
    </div>

    {/* Right Section */}
    <div className="flex space-x-8">
      <li>
        <button>
          <Link href="/login">
            <Image src={user} alt="User" width={28} height={28} />
          </Link>
        </button>
      </li>
      <li>
        <button>
          <Link href="/cart">
            <Image src={cart} alt="Cart" width={28} height={28} />
          </Link>
        </button>
      </li>
    </div>
  </ul>

      <Sheet>
        <SheetTrigger className="md:hidden ml-[95%]">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="hover:text-gray-800 cursor-pointer flex space-x-8">
              <Link href="/">Home</Link>

              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>
            </li>

            <div className="flex items-center space-x-10 mt-5">
              <button>
                <Link href="/login">
                  <Image src={user} alt="User" width={28} height={28} />
                </Link>
              </button>

              <button>
                <Link href="/cart">
                  <Image src={cart} alt="User" width={28} height={28} />
                </Link>
              </button>
            </div>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
