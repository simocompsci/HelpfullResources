"use client";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function NavBar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="mx-auto w-full max-w-7xl border-x border-gray-200 px-6">
        <div className="flex h-20 items-center justify-between font-inter font-medium">
          <div>Logo</div>

          <div className="flex gap-10">
            <a href="#">About Us</a>
            <a href="#">Features</a>
            <a href="#">Platforms</a>
            <a href="#">Contact Us</a>
          </div>

          <div>Sign In</div>
        </div>
      </div>
    </nav>
  );
}
