import { Plus, Search } from "lucide-react";

interface CollectionsHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function CollectionsHeader({ searchQuery, setSearchQuery }: CollectionsHeaderProps) {
  return (
    <div className="flex flex-col mb-10 gap-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-black mb-4">
            Collections
          </h1>
          <p className="text-[#515981] font-mono text-sm md:text-base">
            Manage and organize your curated digital resources.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#171a24] text-white py-3 px-5 rounded-xl font-mono text-xs md:text-sm font-bold active:scale-95 transition-all w-full sm:w-fit whitespace-nowrap">
            <Plus size={16} />
            New Collection
          </button>
        </div>
      </div>
    </div>
  );
}
