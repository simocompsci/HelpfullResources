import { UploadCloud } from "lucide-react";

export default function UploadSection(){
    return(
        <>
        {/* Upload Area Section */}
        <section className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl border border-[#d6dbff] border-dashed">
          <div className="flex flex-col items-center text-center">

            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f0efff] rounded-2xl flex items-center justify-center mb-5 sm:mb-6">
              <UploadCloud className="text-[#242c51]" size={28} />
            </div>

            <h4 className="font-mono font-bold text-lg sm:text-xl text-[#242c51] mb-2">
              Upload a link (resource) of the application chosen above
            </h4>

            <p className="text-[#515981] font-mono text-xs sm:text-sm mb-6 sm:mb-8 max-w-md">
              Enter your resource URL or drag and drop local files to automatically categorize them into your collections.
            </p>

            <div className="w-full max-w-xl space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full bg-[#f0efff] border-0 focus:ring-2 focus:ring-[#0a79ff] rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-[#242c51] font-mono transition-all outline-none"
                />
              </div>

              <button className="flex items-center justify-center gap-2 w-full sm:w-[220px] mx-auto bg-black text-white py-3 sm:py-4 rounded-xl font-mono font-semibold text-sm hover:bg-gray-800 active:scale-95 transition-all duration-200">
                <span className="text-xl leading-none font-light">+</span> Upload Resource
              </button>
            </div>

          </div>
        </section></>
        
    )
    
}