import { Home, FolderHeart, Search, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center  px-6 md:px-16 py-6 rounded-full backdrop-blur-xl bg-gray-200 border border-gray-300">
      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-auto bg-white border border-gray-300 rounded-3xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between md:gap-6 gap-2 z-50 shadow-sm text-center">

        <Link href="/home" className={`flex flex-col items-center gap-1 active:scale-95 transition-all px-4 sm:px-5 md:px-6 py-2 rounded-xl border border-transparent ${pathname === '/home' ? 'bg-[#f0efff] text-[#242c51]' : 'text-[#515981] hover:text-[#0a79ff]'}`}>
          <Home size={20} className={pathname === '/home' ? "fill-[#242c51]" : ""} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Home</span>
        </Link>

        <Link href="/collections" className={`flex flex-col items-center gap-1 active:scale-95 transition-all px-4 sm:px-5 md:px-6 py-2 rounded-xl border border-transparent ${pathname === '/collections' ? 'bg-[#f0efff] text-[#242c51]' : 'text-[#515981] hover:text-[#0a79ff]'}`}>
          <FolderHeart size={20} className={pathname === '/collections' ? "fill-[#242c51]" : ""} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Collections</span>
        </Link>

        <button className="flex flex-col items-center gap-1 active:scale-95 transition-all px-4 sm:px-5 md:px-6 py-2 border border-transparent rounded-xl text-[#515981] hover:text-[#0a79ff]">
          <Search size={20} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Search</span>
        </button>

        <button className="flex flex-col items-center gap-1 active:scale-95 transition-all px-4 sm:px-5 md:px-6 py-2 border border-transparent rounded-xl text-[#515981] hover:text-[#0a79ff]">
          <Settings size={20} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Settings</span>
        </button>

      </div>
    </nav>
  );
}
