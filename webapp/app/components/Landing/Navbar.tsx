"use client"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
});

export default function NavBar(){
  return (
    <nav className="flex justify-center font-medium text-[2.5rem]/[2.75rem] tracking-[-0.8px] text-text-main lg:text-3xl lg:tracking-[-1px]">
      <ul className={`flex justify-between gap-4 font-inter ${inter.className}`}>
        <li>Products</li>
        <li>Resources</li>
        <li>Solutions</li>
        <li>Pricing</li>
      </ul>
    </nav>
  )
}