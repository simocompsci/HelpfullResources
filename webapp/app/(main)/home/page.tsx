import HeroHome from "@/app/components/Home/HomeHero";
import UploadSection from "@/app/components/Home/UploadSection";
import { Home, FolderHeart, Search, Settings } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen pb-28 sm:pb-24 font-body bg-[#f7f5ff]">

      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-16 flex-grow">
        <HeroHome/>
        <UploadSection/>
      </main>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-auto bg-white border border-gray-300 rounded-3xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between md:gap-8 gap-4 z-50">

        <button className="flex flex-col items-center gap-1 text-[#242c51] active:scale-95 transition-all bg-[#f0efff] px-5 md:px-6 py-2 rounded-xl">
          <Home size={20} className="fill-[#242c51]" />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-[#515981] hover:text-[#0a79ff] active:scale-95 transition-all">
          <FolderHeart size={20} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Collections</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-[#515981] hover:text-[#0a79ff] active:scale-95 transition-all">
          <Search size={20} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Search</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-[#515981] hover:text-[#0a79ff] active:scale-95 transition-all">
          <Settings size={20} />
          <span className="font-mono font-bold text-[9px] sm:text-[10px] tracking-widest uppercase">Settings</span>
        </button>

      </div>
    </div>
  );
}