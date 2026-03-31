import UploadSection from "@/app/components/Home/UploadSection";
import { BookAudio, FileText, Globe, UploadCloud, Youtube, Home, FolderHeart, Search, Settings } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen pb-28 sm:pb-24 font-body bg-[#f7f5ff]">

      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-16 flex-grow">

        {/* Hero Header Section */}
        <section className="mb-8 sm:mb-10 text-center">
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-6xl text-[#242c51] leading-[1.1] mb-4 sm:mb-6 tracking-tighter">
            ResourceSaver &ndash; Your Digital Resource Manager
          </h2>
          <p className="text-[#515981] text-base sm:text-lg max-w-2xl mx-auto font-mono">
            Curate, organize, and archive your digital discovery with precision. A unified workspace for the modern knowledge seeker.
          </p>
        </section>

        {/* Platform Selection Section */}
        <section className="mb-10 sm:mb-12 flex justify-center">
          <div className="flex flex-wrap justify-start sm:justify-center bg-[#e4e7ff] rounded-xl p-1 gap-1 w-full sm:w-auto">            <button className="flex-shrink-0 flex items-center gap-2 bg-white text-[#242c51] px-4 sm:px-5 py-3 rounded-lg shadow-sm active:scale-95 transition-all">
            <Youtube size={18} />
            <span className="font-mono font-bold text-[10px] sm:text-[11px] tracking-wider uppercase">YOUTUBE</span>
          </button>

            <button className="flex-shrink-0 flex items-center gap-2 text-[#515981] px-4 sm:px-5 py-3 rounded-lg hover:bg-white/50 active:scale-95 transition-all">
              <Globe size={18} />
              <span className="font-mono font-bold text-[10px] sm:text-[11px] tracking-wider uppercase">WEBPAGE</span>
            </button>

            <button className="flex-shrink-0 flex items-center gap-2 text-[#515981] px-4 sm:px-5 py-3 rounded-lg hover:bg-white/50 active:scale-95 transition-all">
              <FileText size={18} />
              <span className="font-mono font-bold text-[10px] sm:text-[11px] tracking-wider uppercase">DOCUMENTS</span>
            </button>

            <button className="flex-shrink-0 flex items-center gap-2 text-[#515981] px-4 sm:px-5 py-3 rounded-lg hover:bg-white/50 active:scale-95 transition-all">
              <BookAudio size={18} />
              <span className="font-mono font-bold text-[10px] sm:text-[11px] tracking-wider uppercase">AUDIO</span>
            </button>


          </div>
        </section>

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