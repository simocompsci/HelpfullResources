"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
});

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-gray-200">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between font-medium">
          {/* Logo */}
          <div className="cursor-pointer text-lg">Logo</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-base">
            <a href="#" className="rounded-sm px-2 py-1 hover:bg-gray-100">
              About Us
            </a>
            <a href="#" className="rounded-sm px-2 py-1 hover:bg-gray-100">
              Features
            </a>
            <a href="#" className="rounded-sm px-2 py-1 hover:bg-gray-100">
              Platforms
            </a>
            <a href="#" className="rounded-sm px-2 py-1 hover:bg-gray-100">
              Contact Us
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="rounded-sm bg-black px-4 py-2 text-white hover:bg-gray-900">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-white md:hidden border border-t-gray-200">
            <div className="flex h-full flex-col items-start px-3 pb-[env(safe-area-inset-bottom)] pt-4">
              <div className="flex flex-col gap-2">
                <a href="#" className="rounded-sm px-3 py-2 hover:bg-gray-100">
                  About Us
                </a>
                <a href="#" className="rounded-sm px-3 py-2 hover:bg-gray-100">
                  Features
                </a>
                <a href="#" className="rounded-sm px-3 py-2 hover:bg-gray-100">
                  Platforms
                </a>
                <a href="#" className="rounded-sm px-3 py-2 hover:bg-gray-100">
                  Contact Us
                </a>
              </div>

              <button className="mt-auto w-full rounded-sm bg-black px-4 py-2 text-white hover:bg-gray-900">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
