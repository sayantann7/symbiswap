import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SignIn, useSignIn } from "@clerk/nextjs";

function page() {
  
  return (
    <>
    <Navbar />
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex flex-col justify-center  mt-7 main-feed-content">
      <div className="pt-0">
      <SignIn />
      </div>
    </div>
    </>
  );
}

export default page;
