"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import facebook from "../../../public/images/facebook-logo.png";
import instagram from "../../../public/images/instagram-logo.png";
import pinterest from "../../../public/images/pinterest-logo.png";
import customer from "../../../public/images/Umair.jpg";

import sam1 from "../../../public/images/sam1.jpeg";
import sam2 from "../../../public/images/sam2.jpg";
import sam3 from "../../../public/images/sam3.jpg";
import sam4 from "../../../public/images/sam4.jpg";

const SamsungFold = () => {
  
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const [activeTab, setActiveTab] = useState("description");

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <nav className="text-gray-500 mb-4">
        <Link href="/">Home</Link>{" "}
        <span className="text-black font-semibold">{"|"} Samsung Z Fold 5</span>
      </nav>

      <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Product Images */}
        <div className="flex">
          {/* Main Product Image */}
          <div className="bg-gray-100 p-4 flex items-center justify-center rounded-lg w-full">
            <Image
              src={sam1}
              alt="Samsung-Z-Fold-5-img"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          {/* Product Title */}
          <h2 className="text-3xl font-bold mb-2">Samsung Z Fold 5</h2>
          <p className="text-gray-700 text-xl mb-4">{"$"}1400</p>

          {/* Reviews */}
          <div className="flex items-center mb-6">
            <div className="text-yellow-400 mr-2">★★★★★</div>
            <span className="text-gray-500 text-sm">Customers Reviews</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 mb-4">
            The Samsung Galaxy Z Fold 5 is a cutting-edge foldable smartphone
            that redefines mobile versatility and performance. It boasts a sleek
            design with improved durability, featuring Samsungs strongest hinge
            mechanism to date, the Flex Hinge, allowing for a seamless and
            virtually crease-free fold. The device is crafted with lightweight
            Armor Aluminum and Gorilla Glass Victus 2, ensuring enhanced
            protection against drops and scratches.
          </p>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Color/s</h3>
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#6a9cdfd0] cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-gray-900 cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-[#fffab8] cursor-pointer"></div>
            </div>
          </div>

          {/* Quantity and Cart */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex border rounded">
              <button
                className="px-3 py-2 hover:bg-gray-300"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-3 py-2 hover:bg-gray-300"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <button
              onClick={toggleCart}
              className="bg-white border border-gray-950 text-gray-950 px-6 py-2 hover:bg-green-300 relative"
            >
              Add To Cart
            </button>
            {/* Shopping Cart Sidebar */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out z-50`}
            >
              {/* Cart Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={toggleCart}
                  className="text-gray-700 hover:text-black"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              <div className="p-4">
                <div className="flex items-center mb-4 ">
                  <Image
                    src={sam4}
                    alt="samsungFold-img"
                    width={80}
                    height={80}
                    className="rounded mr-4 bg-yellow-100"
                  />
                  <div>
                    <h3 className="text-gray-700 text-sm">Samsung Z Fold 5</h3>
                    <p className="text-gray-500 text-xs">1 x $1400</p>
                  </div>
                  <p className="ml-auto text-gray-700 font-semibold">$1400</p>
                </div>
              </div>

              {/* Cart Footer */}
              <div className="p-4 border-t">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-gray-600">Subtotal:</span>
                  <span className="text-gray-900 font-bold">$1400</span>
                </div>
                <div className="flex justify-between">
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                    <Link href="/cart2">View Cart</Link>
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    <Link href="/checkout2">Checkout</Link>
                  </button>
                </div>
              </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
              <div
                onClick={toggleCart}
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
              ></div>
            )}
          </div>

          {/* SKU and Meta Information */}
          <div className="text-gray-500 text-sm space-y-2">
            <p>
              <span className="font-bold text-gray-800">SKU:</span> SS003
            </p>

            <p>
              <span className="font-bold text-gray-800">Category:</span>{" "}
              Foldable Smartphones
            </p>

            <p>
              <span className="font-bold text-gray-800">Tags:</span>{" "}
              Samsung, Smartphones, Flagship, Foldables
            </p>

            <p className="flex">
              <span className="font-bold text-gray-800">Share:</span>{" "}
              <span className="ml-2 cursor-pointer hover:text-black">
                <Link href="https://facebook.com">
                  <Image src={facebook} alt="fb-img" height={24} width={24} />
                </Link>
              </span>
              <span className="ml-2 cursor-pointer hover:text-black">
                <Link href="https://instagram.com">
                  <Image
                    src={instagram}
                    alt="insta-img"
                    height={24}
                    width={24}
                  />
                </Link>
              </span>
              <span className="ml-2 cursor-pointer hover:text-black">
                <Link href="https://pinterest.com">
                  <Image
                    src={pinterest}
                    alt="pinterest-img"
                    height={24}
                    width={24}
                  />
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="p-8">
        <div className="flex space-x-8 border-b mb-6">
          <button
            className={`pb-2 text-lg ${
              activeTab === "description"
                ? "border-b-2 border-black text-black font-semibold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          <button
            className={`pb-2 text-lg ${
              activeTab === "additional"
                ? "border-b-2 border-black text-black font-semibold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("additional")}
          >
            Additional Information
          </button>

          <button
            className={`pb-2 text-lg ${
              activeTab === "reviews"
                ? "border-b-2 border-black text-black font-semibold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div>
            <p className="text-gray-600 mb-4">
              Samsung Z Fold 5 advanced camera system includes a 50MP main sensor, a 12MP
              ultra-wide lens, and a 10MP telephoto lens with 3x optical zoom.
              Combined with AI enhancements, the Z Fold 5 captures stunning
              photos and videos, even in challenging lighting conditions.
            </p>

            <p className="text-gray-600 mb-6">
              With a 4,400mAh battery and 25W fast charging, the Z Fold 5 offers
              all-day power and quick recharge times. It also supports wireless
              charging and reverse wireless charging for added convenience.
              Running on One UI 5.1 based on Android 13, the phone is packed
              with features designed to enhance the foldable experience.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg mt-10">
              <div className="flex justify-center mt-20">
                <Image
                  src={sam3}
                  alt="samsung-z-fold5-img"
                  className="rounded-lg h-[70%]"
                />
              </div>

              <div className="flex justify-center mt-20">
                <Image
                  src={sam2}
                  alt="samsung-z-fold5-img"
                  className="rounded-lg h-[70%] w-[60%]"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "additional" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Additional Information
            </h3>
            <p className="text-gray-600">
              The Samsung Galaxy Z Fold 5 is available in a variety of
              sophisticated colors, including Icy Blue, Phantom Black, and
              Cream. Its perfect for tech enthusiasts, multitaskers, and anyone
              looking to push the boundaries of mobile innovation.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>

            <div className="text-gray-600">
              <div className="flex items-start bg-white p-6 shadow-md rounded-md">
                <div className="w-16 h-16 mr-4">
                  <Image
                    src={customer}
                    alt="Umair"
                    width={64}
                    height={64}
                    className="rounded-full "
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold flex">
                    Umair &nbsp; <div className="text-yellow-400">★★★★★</div>
                  </h3>
                  <p className="text-gray-600 mt-2">
                    This product has completely exceeded my expectations. Highly
                    recommended!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SamsungFold;
