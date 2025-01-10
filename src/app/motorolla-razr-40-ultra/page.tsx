"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import facebook from "../../../public/images/facebook-logo.png";
import instagram from "../../../public/images/instagram-logo.png";
import pinterest from "../../../public/images/pinterest-logo.png";
import customer from "../../../public/images/Umair.jpg";

import moto1 from "../../../public/images/motoRazr1.jpg";
import moto2 from "../../../public/images/motoRazr6.jpg";
import moto3 from "../../../public/images/motoRazr3.jpg";
import moto4 from "../../../public/images/motoRazr7.png";

const MotorolaRazr = () => {

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
          {"|"} Motorola Razr 40 Ultra
        </span>
      </nav>

      <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Product Images */}
        <div className="flex">
          {/* Main Product Image */}
          <div className="bg-gray-100 p-4 flex items-center justify-center rounded-lg w-full">
            <Image
              src={moto1}
              alt="Motorola-Razr-40-Ultra-img"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div>
          {/* Product Title */}
          <h2 className="text-3xl font-bold mb-2">Motorola Razr 40 Ultra</h2>
          <p className="text-gray-700 text-xl mb-4">{"$"}700</p>

          {/* Reviews */}
          <div className="flex items-center mb-6">
            <div className="text-yellow-400 mr-2">★★★★★</div>
            <span className="text-gray-500 text-sm">Customers Reviews</span>
          </div>

          {/* Description */}
          <p className="text-gray-500 mb-4">
            The Motorola Razr 40 Ultra is a sleek and innovative foldable
            smartphone that blends nostalgic design with cutting-edge
            technology. Featuring a compact clamshell form factor, it boasts a
            large 6.9-inch AMOLED main display with a 165Hz refresh rate and
            HDR10+ support, delivering vibrant colors and smooth performance.
            The standout feature is its external 3.6-inch AMOLED cover display,
            which offers unparalleled functionality for quick notifications,
            widgets, and even full app usage without unfolding the device.
            Powered by the Snapdragon 8+ Gen 1 processor, it ensures robust
            performance for multitasking and gaming. With a dual-camera setup
            and a stunningly lightweight design, the Razr 40 Ultra is a stylish
            and futuristic device, perfect for those who value innovation and
            portability.
          </p>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Color/s</h3>
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#ffb065] cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-[#8195b3] cursor-pointer"></div>
              <div className="w-6 h-6 rounded-full bg-[#ff397b] cursor-pointer"></div>
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
                    src={moto3}
                    alt="moto-razr3-img"
                    width={80}
                    height={80}
                    className="rounded mr-4 bg-yellow-100"
                  />
                  <div>
                    <h3 className="text-gray-700 text-sm">
                      Motorola Razr 40 Ultra
                    </h3>
                    <p className="text-gray-500 text-xs">1 x $700</p>
                  </div>
                  <p className="ml-auto text-gray-700 font-semibold">$700</p>
                </div>
              </div>

              {/* Cart Footer */}
              <div className="p-4 border-t">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-gray-600">Subtotal:</span>
                  <span className="text-gray-900 font-bold">$700</span>
                </div>
                <div className="flex justify-between">
                  <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                    <Link href="/cart3">View Cart</Link>
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    <Link href="/checkout3">Checkout</Link>
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
              <span className="font-bold text-gray-800">SKU:</span> SS002
            </p>

            <p>
              <span className="font-bold text-gray-800">Category:</span>{" "}
              Foldable Smartphones
            </p>

            <p>
              <span className="font-bold text-gray-800">Tags:</span>{" "}
              Motorola, Smartphones, Flagship, Foldables
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
              The Motorola razr 40 Ultra comes with 6.9-inch P-OLED display with
              165Hz refresh rate and Qualcomm Snapdragon 8+ Gen 1 processor.
            </p>

            <p className="text-gray-600 mb-6">
              Specs also include 3800mAh battery with 30W charging speed and
              dual camera setup on the back.
            </p>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-gray-100 rounded-lg">
              <div className="flex justify-center">
                <Image
                  src={moto2}
                  alt="motorola-razr40-img"
                  className="rounded-lg"
                />
              </div>

              <div className="flex-1 ">
                <Image
                  src={moto4}
                  alt="motorola-razr40-2-img"
                  className="rounded-lg"
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
              The Motorola Razr 40 Ultra (Razr+ in North America) is a
              cutting-edge foldable smartphone that combines sleek design with
              advanced technology. It features a compact and lightweight build
              with Gorilla Glass Victus, an aluminum frame, and a
              water-repellent coating. The device boasts dual high-refresh-rate
              AMOLED displays, including a 6.9-inch main screen with a 165Hz
              refresh rate and a 3.6-inch external screen with a 144Hz refresh
              rate. Powered by the Qualcomm Snapdragon 8+ Gen 1 chipset, it
              offers up to 12GB of RAM and 512GB of storage for seamless
              performance. The camera setup includes a 12 MP wide lens with OIS,
              a 13 MP ultrawide sensor, and a 32 MP selfie camera, all capable
              of high-quality video recording. With a 3800mAh battery, 30W
              wired, and 5W wireless charging, along with features like Android
              13, Wi-Fi 6E, Bluetooth 5.3, and stereo speakers, the Razr 40
              Ultra delivers an exceptional user experience. It stands out as a stylish and versatile option in the
              foldable phone market.
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

export default MotorolaRazr;
