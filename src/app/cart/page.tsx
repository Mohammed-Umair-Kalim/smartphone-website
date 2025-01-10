"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import product1 from "../../../public/images/huaweiTrifold.jpg";
import product3 from "../../../public/images/motoRazr.jpg";
import product2 from "../../../public/images/samsungFold5.jpg";

import logo from "../../../public/images/logo.png";

import trash from "../../../public/images/trash.png";

const Cart: React.FC = () => {
  // Step 1: Add state to track the cart items
  const [quantity, setQuantity] = useState<number>(1);

  // Step 2: Create onChange handler to update the quantity
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // Update the quantity only if the value is a positive integer
    const newQuantity = Math.max(1, parseInt(event.target.value, 10));
    setQuantity(newQuantity);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/bg1.0.jpg')", // Update with correct path
        }}
      >
        {/* Overlay for slight blur effect */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center text-center">
          <div className="text-black">
            {/* Logo or Icon */}
            <div className="ml-[38%]">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">Cart</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                <Link href="/">Home </Link>
                {">"} Cart
              </span>{" "}
            </nav>
          </div>
        </div>
      </section>

      <div>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="lg:col-span-2">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-yellow-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Product</th>
                  <th className="text-left py-3 px-4 font-semibold">Price</th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Quantity
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Cart Item */}
                <tr className="border-t">
                  <td className="flex items-center py-4 px-4">
                    <Link href="/huawei-mate-xt-ultimate">
                      <Image
                        src={product1}
                        alt="product-img"
                        className="w-20 h-20  rounded-md bg-yellow-100 mr-4"
                      />
                    </Link>

                    <span className="text-gray-500 hidden sm:block">
                      <Link href="/huawei-mate-xt-ultimate">
                        Huawei Mate XT Ultimate
                      </Link>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-500">$2800</td>
                  <td className="py-4 px-4">
                    {/* Step 3: Bind value to state and use the onChange handler */}
                    <input
                      type="number"
                      value={quantity} // Bind to state
                      onChange={handleQuantityChange} // Update state on change
                      min="1"
                      className="w-12 border border-gray-300 rounded text-center"
                    />
                  </td>
                  <td className="py-4 px-4 font-medium">
                    $ {quantity * 2800}.00
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-yellow-400 hover:text-yellow-500">
                      <Image
                        src={trash}
                        alt="trash-img"
                        width={28}
                        height={28}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-yellow-50 p-6 rounded">
            <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-3 text-gray-500">
              <span>Subtotal</span>
              <span>$ {quantity * 2800}.00</span> {/* Dynamically calculated */}
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-yellow-600">
                $ {quantity * 2800}.00
              </span>{" "}
              {/* Dynamically calculated */}
            </div>

            {/* Checkout Button */}
            <button className="w-full mt-6 bg-white text-black border border-black rounded py-3 font-medium hover:bg-black hover:text-white transition">
              <Link href="/checkout">Check Out</Link>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="lg:col-span-2">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-yellow-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Product</th>
                  <th className="text-left py-3 px-4 font-semibold">Price</th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Quantity
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Cart Item */}
                <tr className="border-t">
                  <td className="flex items-center py-4 px-4">
                    <Link href="/samsung-z-fold-5">
                      <Image
                        src={product2}
                        alt="product-img"
                        className="w-20 h-20 rounded-md bg-yellow-100 mr-4"
                      />
                    </Link>

                    <span className="text-gray-500 hidden sm:block">
                      <Link href="/samsung-z-fold-5">Samsung Z Fold 5</Link>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-500">$1400</td>
                  <td className="py-4 px-4">
                    {/* Step 3: Bind value to state and use the onChange handler */}
                    <input
                      type="number"
                      value={quantity} // Bind to state
                      onChange={handleQuantityChange} // Update state on change
                      min="1"
                      className="w-12 border border-gray-300 rounded text-center"
                    />
                  </td>
                  <td className="py-4 px-4 font-medium">
                    $ {quantity * 1400}.00
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-yellow-400 hover:text-yellow-500">
                      <Image
                        src={trash}
                        alt="trash-img"
                        width={28}
                        height={28}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-yellow-50 p-6 rounded">
            <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-3 text-gray-500">
              <span>Subtotal</span>
              <span>$ {quantity * 1400}.00</span> {/* Dynamically calculated */}
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-yellow-600">
                $ {quantity * 1400}.00
              </span>{" "}
              {/* Dynamically calculated */}
            </div>

            {/* Checkout Button */}
            <button className="w-full mt-6 bg-white text-black border border-black rounded py-3 font-medium hover:bg-black hover:text-white transition">
              <Link href="/checkout">Check Out</Link>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="lg:col-span-2">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-yellow-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Product</th>
                  <th className="text-left py-3 px-4 font-semibold">Price</th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Quantity
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Cart Item */}
                <tr className="border-t">
                  <td className="flex items-center py-4 px-4">
                    <Link href="/motorolla-razr-40-ultra">
                      <Image
                        src={product3}
                        alt="product-img"
                        className="w-20 h-20 rounded-md bg-yellow-100 mr-4"
                      />
                    </Link>

                    <span className="text-gray-500 hidden sm:block">
                      <Link href="/motorolla-razr-40-ultra ">
                        Motorola Razr 40 Ultra
                      </Link>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-500">$700</td>
                  <td className="py-4 px-4">
                    {/* Step 3: Bind value to state and use the onChange handler */}
                    <input
                      type="number"
                      value={quantity} // Bind to state
                      onChange={handleQuantityChange} // Update state on change
                      min="1"
                      className="w-12 border border-gray-300 rounded text-center"
                    />
                  </td>
                  <td className="py-4 px-4 font-medium">
                    $ {quantity * 700}.00
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-yellow-400 hover:text-yellow-500">
                      <Image
                        src={trash}
                        alt="trash-img"
                        width={28}
                        height={28}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-yellow-50 p-6 rounded">
            <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
            <div className="flex justify-between mb-3 text-gray-500">
              <span>Subtotal</span>
              <span>$ {quantity * 700}.00</span> {/* Dynamically calculated */}
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-yellow-600">
                $ {quantity * 700}.00
              </span>{" "}
              {/* Dynamically calculated */}
            </div>

            {/* Checkout Button */}
            <button className="w-full mt-6 bg-white text-black border border-black rounded py-3 font-medium hover:bg-black hover:text-white transition">
              <Link href="/checkout">Check Out</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
