import { BookAudio, FileText, Globe, Youtube } from "lucide-react";


export default function HeroHome() {
    return (
        <>
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
            
        </>
    )

}