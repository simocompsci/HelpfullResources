import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { Mona_Sans } from "next/font/google";

const MonaSans = Mona_Sans({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-10 md:px-20 py-10 text-black">
      {/* Top row: email and phone */}
      <div
        className={`${MonaSans.className} flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8 text-3xl sm:text-4xl md:text-6xl font-bold text-center`}
      >
        <a
          href="mailto:contact@gmail.com"
          className="underline underline-offset-4"
        >
          contact@gmail.com
        </a>

        <a
          href="tel:+21266325487"
        >
          (+212)66325487
        </a>
      </div>

      {/* Bottom row: copyright */}
      <div
        className={`${MonaSans.className} flex flex-row  items-center justify-center md:justify-start md:ml-19 mt-8 gap-2 text-lg sm:text-2xl md:text-3xl font-semibold text-primary text-center`}
      >
        <FaRegCopyright className="text-xl" />
        <p>2025/2026 all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
