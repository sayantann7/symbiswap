import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-16">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-t border-gray-500 dark:border-gray-700">
      <span className="block text-sm text-white text-center w-full">© 2025 <Link href="/" className="hover:underline">SymbiSwap™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;