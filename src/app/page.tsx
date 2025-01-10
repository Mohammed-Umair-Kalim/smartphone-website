"use client";
import Image from "next/image";
import Link from "next/link";

import huawei from "../../public/images/huaweiTrifold.jpg";
import motorola from "../../public/images/motoRazr.jpg";
import samsung from "../../public/images/samsungFold5.jpg";

import logo from "../../public/images/logo.png";

import calendar from "../../public/images/calendar.png";
import clock from "../../public/images/clock.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/bg1.0.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center text-center">
          <div className="text-black">
            {/* Logo */}
            <div className="ml-12">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>
            </div>
            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">Home</h1>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Products
          </h2>
          <p className="text-gray-500">
            Find a bright idea which suits you, with our great selection
          </p>
        </div>

        {/* Cards */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
          {/* Product Card */}
          {[ 
            { src: huawei, title: "Huawei Mate XT Ultimate", time: "25 min", date: "14th Oct 2024", link: "/huawei-mate-xt-ultimate" },
            { src: samsung, title: "Samsung Z fold 5", time: "5 min", date: "11th Feb 2025", link: "/samsung-z-fold-5" },
            { src: motorola, title: "Moto Razr 40 Ultra", time: "15 min", date: "16th Oct 2025", link: "/motorolla-razr-40-ultra" },
          ].map((product, index) => (
            <div key={index} className="text-center bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="mb-4">
                <Image
                  src={product.src}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="rounded-t-lg w-full"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                {product.title}
              </h3>
              <Link
                href={product.link}
                className="text-black font-bold hover:underline mb-2 inline-block"
              >
                Read More
              </Link>
              <div className="text-gray-500 flex items-center justify-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Image src={clock} alt="clock" width={20} height={20} />
                  <span>{product.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Image src={calendar} alt="calendar" width={20} height={20} />
                  <span>{product.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
