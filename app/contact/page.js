import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function page() {
  return (
    <>
    <Navbar />
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-full w-full items-center px-5 py-24">
        <div className="mx-auto text-center text-white container p-0 my-9 py-9 space-y-5 w-3/4 font-body">
          <div className="flex items-center justify-center">
            <h1 className="text-6xl">Contact Us</h1>
          </div>
          <h1 className="text-3xl py-5">
            Feel free to reach out to us! 🚀
          </h1>
          <div>
            <h1 className="text-2xl">Email: <Link href="mailto:officialsayantannandi@gmail">officialsayantannandi@gmail.com</Link></h1>
            <h1 className="text-2xl">Phone: +91 8404920213</h1>
          </div>
          <Link href="/">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 my-7">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                <h1 className="text-2xl">Return to home</h1>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
