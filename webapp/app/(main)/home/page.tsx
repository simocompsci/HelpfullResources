import { BookAudio, FileText, Globe, UploadCloud, Youtube, Home, FolderHeart, Search, Settings } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen pb-24 font-body bg-[#f7f5ff]">
      <main className="max-w-4xl mx-auto px-6 mt-12 mb-16 flex-grow">
        {/* Hero Header Section */}
        <section className="mb-10 text-center">
          <h2 className="font-serif font-extrabold text-4xl md:text-6xl text-[#242c51] leading-[1.1] mb-6 tracking-tighter">
            ResourceSaver &ndash; Your Digital Resource Manager
          </h2>
          <p className="text-[#515981] text-lg md:text-lg max-w-2xl mx-auto font-mono">
            Curate, organize, and archive your digital discovery with precision. A unified workspace for the modern knowledge seeker.
          </p>
        </section>

        {/* Platform Selection Section */}
        <section className="mb-12 flex justify-center">
          <div className="inline-flex bg-[#e4e7ff] rounded-xl p-1 gap-1 overflow-x-auto no-scrollbar">
            {/* YouTube */}
            <button className="flex-shrink-0 flex items-center gap-2 bg-white text-[#242c51] px-5 py-3 rounded-lg shadow-sm active:scale-95 transition-all">
              <Youtube size={18} />
              <span className="font-mono font-bold text-[11px] tracking-wider uppercase">YOUTUBE</span>
            </button>
            {/* Webpage */}
            <button className="flex-shrink-0 flex items-center gap-2 text-[#515981] px-5 py-3 rounded-lg hover:bg-white/50 active:scale-95 transition-all">
              <Globe size={18} />
              <span className="font-mono font-bold text-[11px] tracking-wider uppercase">WEBPAGE</span>
            </button>
            {/* Documents */}
            <button className="flex-shrink-0 flex items-center gap-2 text-[#515981] px-5 py-3 rounded-lg hover:bg-white/50 active:scale-95 transition-all">
              <FileText size={18} />
              <span className="font-mono font-bold text-[11px] tracking-wider uppercase">DOCUMENTS</span>
            </button>
            {/* Audio */}
            <button className="flex-shrink-0 flex items-center gap-2 text-[#515981] px-5 py-3 rounded-lg hover:bg-white/50 active:scale-95 transition-all">
              <BookAudio size={18} />
              <span className="font-mono font-bold text-[11px] tracking-wider uppercase">AUDIO</span>
            </button>
          </div>
        </section>

        {/* Upload Area Section */}
        <section className="bg-white p-8 md:p-12 rounded-3xl border border-[#d6dbff] border-dashed">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#f0efff] rounded-2xl flex items-center justify-center mb-6">
              <UploadCloud className="text-[#242c51]" size={32} />
            </div>
            <h4 className="font-mono font-bold text-xl text-[#242c51] mb-2">Upload a link (resource) of the application chosen above</h4>
            <p className="text-[#515981] font-mono text-sm mb-8 max-w-md">
              Enter your resource URL or drag and drop local files to automatically categorize them into your collections.
            </p>
            <div className="w-full max-w-xl space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full bg-[#f0efff] border-0 focus:ring-2 focus:ring-[#0a79ff] rounded-xl px-6 py-4 text-[#242c51] font-mono transition-all outline-none"
                />
              </div>
              <button className="flex items-center justify-center gap-2 w-[220px] mx-auto bg-black text-white py-4 rounded-xl font-mono text-sm hover:bg-gray-800 active:scale-95 transition-all duration-200">
                <span className="text-xl leading-none font-light">+</span> Upload Resource
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white border border-[#e4e7ff] rounded-3xl shadow-sm px-6 py-4 flex items-center justify-between gap-8 z-50">
        <button className="flex flex-col items-center gap-1 text-[#242c51] active:scale-95 transition-all bg-[#f0efff] px-3 py-2 rounded-xl">
          <Home size={20} className="fill-[#242c51]" />
          <span className="font-mono font-bold text-[10px] tracking-widest uppercase">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#515981] hover:text-[#0a79ff] active:scale-95 transition-all">
          <FolderHeart size={20} />
          <span className="font-mono font-bold text-[10px] tracking-widest uppercase">Collections</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#515981] hover:text-[#0a79ff] active:scale-95 transition-all">
          <Search size={20} />
          <span className="font-mono font-bold text-[10px] tracking-widest uppercase">Search</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[#515981] hover:text-[#0a79ff] active:scale-95 transition-all">
          <Settings size={20} />
          <span className="font-mono font-bold text-[10px] tracking-widest uppercase">Settings</span>
        </button>
      </div>
    </div>
  );
}