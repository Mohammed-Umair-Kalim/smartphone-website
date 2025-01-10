"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import p33 from "../../../public/images/p33.jpg";
import p34 from "../../../public/images/p34.jpg";
import p35 from "../../../public/images/p35.jpg";

import facebook from "../../../public/images/facebook-logo.png";
import instagram from "../../../public/images/instagram-logo.png";
import pinterest from "../../../public/images/pinterest-logo.png";

import customer from "../../../public/images/Umair.jpg";
import mateXT from "../../../public/images/huawei-trifold.jpg";

const HuaweiTriFold = () => {

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
        <span className="text-black font-semibold">
          {"|"} Huawei Mate XT Ultimate
        </span>
      </nav>

      <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Product Images */}
        <div className="flex">
          {/* Main Product Image */}
          <div className="bg-gray-100 p-4 flex items-center justify-center rounded-lg w-full">
            <Image
              src={p33}
              alt="Huawei-mate-xt-ultimate-img"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          {/* Product Title */}
          <h2 className="text-3xl font-bold mb-2">Huawei Mate XT Ultimate</h2>
          <p className="text-gray-700 text-xl mb-4">{"$"}2800</p>

          {/* Reviews */}
          <div className="flex items-center mb-6">
            <div className="text-yellow-400 mr-2">★★★★★</div>
            <span className="text-gray-500 text-sm">Customers Reviews</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 mb-4">
            Huaweis foldable smartphones, like the Mate X series, showcase
            exceptional engineering and design. Combining cutting-edge flexible
            OLED displays with sleek aesthetics, these devices offer seamless
            multitasking, immersive visuals, and powerful performance, making
            them a standout choice for tech enthusiasts.
          </p>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Color/s</h3>
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#ff4a4ad0] cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-gray-600 cursor-pointer"></div>
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
                    src={mateXT}
                    alt="mate-xt-img"
                    width={80}
                    height={80}
                    className="rounded mr-4 bg-yellow-100"
                  />
                  <div>
                    <h3 className="text-gray-700 text-sm">Huawei Mate XT Ultimate</h3>
                    <p className="text-gray-500 text-xs">1 x $2800</p>
                  </div>
                  <p className="ml-auto text-gray-700 font-semibold">
                    $2800
                  </p>
                </div>
              </div>

              {/* Cart Footer */}
              <div className="p-4 border-t">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-gray-600">Subtotal:</span>
                  <span className="text-gray-900 font-bold">
                   $2800
                  </span>
                </div>
                <div className="flex justify-between">
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                    <Link href="/cart1">View Cart</Link>
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    <Link href="/checkout1">Checkout</Link>
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
              <span className="font-bold text-gray-800">SKU:</span> SS001
            </p>

            <p>
              <span className="font-bold text-gray-800">Category:</span>{" "}
              Foldable Smartphones
            </p>

            <p>
              <span className="font-bold text-gray-800">Tags:</span>{" "}
              Huawei, Smartphones, Flagship, Foldables
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
              Huawei shipped the first units of its first tri-fold Mate XT
              Ultimate earlier today in China and if you were left wondering
              whether the device would ever make its way outside of its home
              market then we have some good news! We can now confirm the Mate XT
              Ultimate will launch globally in Q1 2025. With a starting price of
              CNY 19,999 ($2,800/€2,550) in China, Mate XT is already one of the
              most expensive bits of tech you can purchase, and when we factor
              in the price fluctuations between China and the rest of the world,
              that cost could balloon to well over $3,000/€3,000 for
              international buyers.
            </p>

            <p className="text-gray-600 mb-6">
              Thats the type of cost associated with first-gen tech and we have
              to give props to Huawei for what they achieved in terms of
              hardware here. We recently got the chance to handle a Mate XT
              Ultimate and were more than impressed with its build and all of
              the potential that tri-folds bring to the table.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">

              <div className="flex justify-center">
                <Image src={p34} alt="huawei-trifold1-img" className="rounded-lg" />
              </div>

              <div className="flex justify-center">
                <Image src={p35} alt="huawei-trifold2-img" className="rounded-lg" />
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
              The chipset features an 8-core CPU consisting of 1x 2.3 GHz
              Taishan Big core, 3x 2.18 GHz Taishan Mid cores, and 4x 1.55 GHz
              Cortex-A510 cores, paired with a Maleoon 910 MP4 GPU. In terms of
              performance, the Kirin 9010 is comparable to MediaTeks Dimensity
              8200 - impressive, considering the restrictions Chinese companies
              have faced.
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
              <h3 className="text-lg font-semibold flex">Umair &nbsp; <div className="text-yellow-400">★★★★★</div></h3>
              <p className="text-gray-600 mt-2">
                This product has completely exceeded my expectations. Highly recommended!
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

export default HuaweiTriFold;
