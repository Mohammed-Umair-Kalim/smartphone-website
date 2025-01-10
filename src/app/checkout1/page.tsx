"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

import Link from "next/link";

// Define types for state variables
type PaymentMethod = "direct_bank_transfer" | "cash_on_delivery" | "";

const CheckOut: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [country, setCountry] = useState<string>("Sri Lanka");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [town, setTown] = useState<string>("");
  const [province, setProvince] = useState<string>("Western Province");
  const [zipCode, setZipCode] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setter(e.target.value);

  return (
    <div className="min-h-screen flex flex-col">

      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/bg1.0.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>

        <div className="relative z-10 flex-grow flex items-center justify-center text-center">
          <div className="text-black">
            <div className="ml-16">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>{" "}
            </div>

            <h1 className="text-4xl font-bold mb-2">Checkout</h1>

            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                <Link href="/">Home </Link>{">"} Checkout
              </span>{" "}
             
            </nav>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={handleChange(setFirstName)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={handleChange(setLastName)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                Company Name (Optional)
              </label>
              <input
                type="text"
                value={companyName}
                onChange={handleChange(setCompanyName)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                Country / Region
              </label>
              <select
                value={country}
                onChange={handleChange(setCountry)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option>Sri Lanka</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                Street address
              </label>
              <input
                type="text"
                value={streetAddress}
                onChange={handleChange(setStreetAddress)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Town / City
              </label>
              <input
                type="text"
                value={town}
                onChange={handleChange(setTown)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Province</label>
              <select
                value={province}
                onChange={handleChange(setProvince)}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option>Western Province</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">ZIP code</label>
              <input
                type="text"
                value={zipCode}
                onChange={handleChange(setZipCode)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={handleChange(setPhone)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={handleChange(setEmail)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium">
                Additional information
              </label>
              <textarea
                value={additionalInfo}
                onChange={handleChange(setAdditionalInfo)}
                className="w-full border border-gray-300 p-2 rounded h-24"
              ></textarea>
            </div>
          </form>
        </div>

        <div>
          <div className="border border-gray-200 rounded p-6">
            <h3 className="text-xl font-semibold mb-4">Product</h3>
            <div className="flex justify-between mb-3">
              <span>Huawei Mate XT Ultimate x 1</span>
              <span className="font-medium">$ 2800.00</span>
            </div>
            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>$ 2800.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span className="text-yellow-600">$ 2800.00</span>
            </div>

            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="direct_bank_transfer"
                  checked={paymentMethod === "direct_bank_transfer"}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                />
                <span>Direct Bank Transfer</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="cash_on_delivery"
                  checked={paymentMethod === "cash_on_delivery"}
                  onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                />
                <span>Cash On Delivery</span>
              </label>
            </div>

            <button className="w-full bg-yellow-600 text-white py-3 rounded mt-6">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
