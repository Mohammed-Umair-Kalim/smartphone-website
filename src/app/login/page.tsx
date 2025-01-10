"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

const LogIn = () => {
  return (
    <div className="bg-[#FBEBB5] min-h-screen flex flex-col">
      <div className="bg-white">
        
      </div>

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
            <div className="ml-10">
              <span className="text-gold text-3xl font-bold">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>{" "}
              {/* Replace with the logo */}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-2">Login</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                {" "}
                <Link href="/">Home</Link>{" "}
              </span>{" "}
              &nbsp; &#62; &nbsp;
              <span>
                <Link href="/shop">Sign-in</Link>
              </span>
            </nav>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Log In Section */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Log In</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="login-username"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Username or email address
                </label>
                <input
                  type="text"
                  id="login-username"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="login-password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center mb-6">
                <input type="checkbox" id="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-gray-700">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white rounded-lg py-2 hover:bg-gray-800 transition"
              >
                Log In
              </button>
              <div className="text-center mt-4">
                <Link
                  href="#"
                  className="text-gray-500 text-sm hover:underline"
                >
                  Lost Your Password?
                </Link>
              </div>
            </form>
          </div>

          {/* Register Section */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Register</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="register-email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="register-email"
                  className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="font-bold">privacy policy</span>.
              </p>
              <button
                type="submit"
                className="w-full border-2 border-black text-black rounded-lg py-2 hover:bg-black hover:text-white transition"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LogIn;
