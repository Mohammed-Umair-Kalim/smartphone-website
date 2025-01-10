"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import email from "../../public/images/email.png";
import phone from "../../public/images/phone.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 text-sm py-10 border-t">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-16">
        {/* Address Section */}
        <div className="mt-5">
          <span className="flex items-center space-x-2">
            <Image src={email} alt="email-icon" height={28} width={28} />
            <p className="text-gray-400 ">umairkalim@gmail.com</p>
          </span>

          <span className="flex items-center space-x-2">
            <Image src={phone} alt="email-icon" height={28} width={28} />
            <p className="text-gray-400 ">+92-309-0235428</p>
          </span>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">Help</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-gray-600">
                Sign-in
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-gray-500 font-medium mb-4">Newsletter</h4>
          <div className="flex border-b border-gray-300 pb-1">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none w-full text-gray-500 text-sm"
            />
            <button className="text-black font-semibold hover:underline ml-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-8 pt-4 text-center text-gray-500">
        <p>{new Date().getFullYear()} UMAIR. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
