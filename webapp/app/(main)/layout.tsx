"use client";

import { Home, FolderHeart, Search, Settings, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen pb-28 sm:pb-24 font-body bg-[#f7f5ff]">
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-16 flex-grow">
        {/* Navigation / Header */}
        <nav className="flex justify-between mb-10 items-center relative z-40">
            <Image src="/logo.png" alt="Logo" width={52} height={52} className="w-12 h-12 object-contain" priority />
            
            <div className="relative group">
              <Link href="/settings" className="block bg-gray-200 p-3 rounded-full text-[#242c51] active:scale-95 transition-all outline-none border border-transparent hover:border-[#bfc2d3]">
                <User size={24} />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="p-1.5 flex flex-col gap-0.5">
                  <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#515981] hover:text-[#242c51] hover:bg-[#f0efff] rounded-xl transition-all font-medium">
                    <User size={18} />
                    Profile
                  </Link>
                  <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#515981] hover:text-[#242c51] hover:bg-[#f0efff] rounded-xl transition-all font-medium">
                    <Settings size={18} />
                    Settings
                  </Link>
                  <div className="h-px bg-gray-100 my-1 mx-2" />
                  <button className="flex items-center gap-3 px-3 py-2.5 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium w-full text-left outline-none">
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            </div>
        </nav>

        {children}
      </main>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-auto bg-white border border-gray-300 rounded-full p-2 flex items-center justify-between gap-1 sm:gap-2 z-50 text-center">

        <Link href="/home" className={`flex-1 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all sm:w-24 md:w-28 py-2 rounded-full ${pathname === '/home' ? 'bg-[#f0efff] text-[#242c51]' : 'text-[#515981] hover:text-[#0a79ff]'}`}>
          <Home size={20} className={pathname === '/home' ? "fill-[#242c51]" : ""} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Home</span>
        </Link>

        <Link href="/collections" className={`flex-1 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all sm:w-24 md:w-28 py-2 rounded-full ${pathname === '/collections' ? 'bg-[#f0efff] text-[#242c51]' : 'text-[#515981] hover:text-[#0a79ff]'}`}>
          <FolderHeart size={20} className={pathname === '/collections' ? "fill-[#242c51]" : ""} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Collections</span>
        </Link>

        <Link href="/ai" className={`flex-1 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all sm:w-24 md:w-28 py-2 rounded-full ${pathname === '/ai' ? 'bg-[#f0efff] text-[#242c51]' : 'text-[#515981] hover:text-[#0a79ff]'}`}>
          <Search size={20} className={pathname === '/ai' ? "stroke-[#242c51]" : ""} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Search</span>
        </Link>

        <Link href="/settings" className={`flex-1 flex flex-col items-center justify-center gap-1 active:scale-95 transition-all sm:w-24 md:w-28 py-2 rounded-full ${pathname === '/settings' ? 'bg-[#f0efff] text-[#242c51]' : 'text-[#515981] hover:text-[#0a79ff]'}`}>
          <Settings size={20} className={pathname === '/settings' ? "stroke-[#242c51]" : ""} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Settings</span>
        </Link>

      </div>
    </div>
  );
}
