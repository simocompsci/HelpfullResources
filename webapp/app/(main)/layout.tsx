"use client";

import { Home, FolderHeart, Search, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen pb-28 sm:pb-24 font-body bg-[#f7f5ff]">
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-16 flex-grow">
        {/* Navigation / Header */}
        <nav className="flex justify-between mb-10 items-center">
            <h1 className="text-4xl font-serif font-semibold">Logo</h1>
            <button className="bg-black text-white py-3 px-6 font-mono font-semibold text-sm sm:text-base rounded-xl active:scale-95 transition-all">Logout</button>
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
