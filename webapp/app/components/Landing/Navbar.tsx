"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 bg-[#fefdfb] ">
      {" "}
      <div className="mx-auto w-full max-w-6xl px-6 md:px-0">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between font-medium">
          {/* Logo */}
          <div className="cursor-pointer text-2xl font-recoleta font-medium">
            Bookmarks.io
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-base md:flex">
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
            <button className="rounded-sm bg-black px-4 py-2 text-white transition-colors hover:bg-gray-900">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative flex h-9 w-9 items-center justify-center rounded-[4px] border border-gray-300 md:hidden"
          >
            <Menu
              size={22}
              className={`absolute transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <X
              size={22}
              className={`absolute transition-all duration-300 ease-in-out ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-[#fefdfb] md:hidden
          transition-all duration-300 ease-out
          ${
            open
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-4 opacity-0 invisible"
          }`}
      >
        <div className="flex h-full flex-col px-3 pt-4 pb-[env(safe-area-inset-bottom)]">
          <div className="flex flex-col">
            <a
              href="#"
              className="mx-2 border-b border-gray-200 px-3 py-3 transition-colors hover:bg-gray-100"
            >
              About Us
            </a>

            <a
              href="#"
              className="mx-2 border-b border-gray-200 px-3 py-3 transition-colors hover:bg-gray-100"
            >
              Features
            </a>

            <a
              href="#"
              className="mx-2 border-b border-gray-200 px-3 py-3 transition-colors hover:bg-gray-100"
            >
              Platforms
            </a>

            <a
              href="#"
              className="mx-2 px-3 py-3 transition-colors hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>

          <button className="mt-auto w-full rounded-sm bg-black px-4 py-2 text-white transition-colors hover:bg-gray-900">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
