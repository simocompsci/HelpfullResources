import { Search } from "lucide-react";

export default function AISearchArea() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto mt-8 sm:mt-12">
      
      {/* Message Input Area */}
      <div className="w-full relative flex items-center bg-[#f0efff] rounded-2xl border border-transparent focus-within:border-[#bfc2d3] focus-within:bg-white transition-colors duration-200 mb-8">
        <input 
          type="text" 
          placeholder="Search for your needed resources..." 
          className="w-full bg-transparent outline-none py-4 pl-5 pr-12 text-gray-900 placeholder-gray-400 font-medium"
        />
        <button className="absolute right-3 p-2 text-gray-400 hover:text-gray-700 transition-colors">
          <Search size={20} />
        </button>
      </div>

      {/* 2x2 Grid of Suggestions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-6">
        
        {/* Suggestion Card 1 */}
        <button className="flex flex-col items-start p-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 active:scale-[0.98] transition-all text-left w-full h-full">
          <span className="font-semibold font-mono text-gray-900 text-sm">View all</span>
          <span className="text-gray-500 font-mono text-sm mt-1">my cameras</span>
        </button>

        {/* Suggestion Card 2 */}
        <button className="flex flex-col items-start p-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 active:scale-[0.98] transition-all text-left w-full h-full">
          <span className="font-semibold font-mono text-gray-900 text-sm">Show me</span>
          <span className="text-gray-500 font-mono text-sm mt-1">my smart home hub</span>
        </button>

        {/* Suggestion Card 3 */}
        <button className="flex flex-col items-start p-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 active:scale-[0.98] transition-all text-left w-full h-full">
          <span className="font-semibold font-mono text-gray-900 text-sm">How much</span>
          <span className="text-gray-500 font-mono text-sm mt-1 mb-1">electricity have I used this month?</span>
        </button>

        {/* Suggestion Card 4 */}
        <button className="flex flex-col items-start p-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 active:scale-[0.98] transition-all text-left w-full h-full">
          <span className="font-semibold font-mono text-gray-900 text-sm">How much</span>
          <span className="text-gray-500 font-mono text-sm mt-1">water have I used this month?</span>
        </button>

      </div>
    </div>
  );
}
