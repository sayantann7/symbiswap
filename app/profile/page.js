import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeedNavbar from "@/components/FeedNavbar";

async function page() {
  return (
    <>
      <FeedNavbar />
      <div className="main-feed-content absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] h-full w-full flex flex-col justify-top items-center pt-20 pb-11 px-11">
        <div className="flex items-center justify-center gap-5 mt-11">
        <div className="relative inline-flex items-center justify-center mt-0 w-40 h-40 overflow-hidden bg-gray-50 rounded-full dark:bg-gray-500 rounded-full ring-2 ring-purple-700 dark:ring-purple-600">
        <Image 
                  src="/avatar.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="flex items-center justify-center gap-1">
            <h1 className="font-bold text-3xl text-white dark:text-gray-50">
              Sayantan Nandi
            </h1>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
              />
            </svg>
          </div>
          <span className="text-gray-200 dark:text-gray-300 text-xl mt-2">
            4
          </span>
          <p className="text-gray-200 dark:text-gray-300 text-xl">Gigs</p>
        </div>
        
        </div>
        <h1 className="font-bold text-xl text-white dark:text-gray-50 mt-5">
          Overall Rating
        </h1>
        <div className="flex items-center mt-2">
          <svg
            className="w-4 h-4 text-purple-800 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-purple-800 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-purple-800 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-purple-800 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        
        <div className="space-y-8 max-w-7xl w-full mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4 sm:mb-0">
                Your Gigs
              </h2>
              <Link href="/postgig">
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white">
                  <span className="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center gap-2">
                    <span className="text-lg text-white">Post gig</span>
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                      <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start text-white">
              {["Notes", "Assignments", "PYQs", "Services","Paid"].map((category) => (
                <button
                  key={category}
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white"
                >
                  <span className="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <span className="text-lg">{category}</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="border-t border-gray-500 my-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gig Card Template */}
              <div className="bg-white bg-opacity-90 rounded-lg shadow-lg [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Posted by <strong className="text-black">Shashank Rai</strong>
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Assignments
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    C++ Data Structures Assignment Help
                  </h3>
                  <p className="text-gray-600">
                    Need help with your C++ DSA assignment? I'll solve and explain
                    linked lists, stacks, queues, and trees with comments in code.
                  </p>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ms-1 ${
                          i < 4 ? "text-purple-800" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                        fill="currentColor"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>

                  <Link href="/gig">
                    <button className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white">
                      <span className="w-full relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center justify-center gap-2">
                        <span className="text-lg text-white">Know More</span>
                        <svg
                          className="w-4 h-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-white bg-opacity-90 rounded-lg shadow-lg [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Posted by <strong className="text-black">Shashank Rai</strong>
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Assignments
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    C++ Data Structures Assignment Help
                  </h3>
                  <p className="text-gray-600">
                    Need help with your C++ DSA assignment? I'll solve and explain
                    linked lists, stacks, queues, and trees with comments in code.
                  </p>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ms-1 ${
                          i < 4 ? "text-purple-800" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                        fill="currentColor"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>

                  <Link href="/gig">
                    <button className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white">
                      <span className="w-full relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center justify-center gap-2">
                        <span className="text-lg text-white">Know More</span>
                        <svg
                          className="w-4 h-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="bg-white bg-opacity-90 rounded-lg shadow-lg [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Posted by <strong className="text-black">Shashank Rai</strong>
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Assignments
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    C++ Data Structures Assignment Help
                  </h3>
                  <p className="text-gray-600">
                    Need help with your C++ DSA assignment? I'll solve and explain
                    linked lists, stacks, queues, and trees with comments in code.
                  </p>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ms-1 ${
                          i < 4 ? "text-purple-800" : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 22 20"
                        fill="currentColor"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>

                  <Link href="/gig">
                    <button className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white">
                      <span className="w-full relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center justify-center gap-2">
                        <span className="text-lg text-white">Know More</span>
                        <svg
                          className="w-4 h-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Repeat the gig card template for other gigs */}
            </div>
          </div>
        </div>
    </>
  );
}

export default page;
