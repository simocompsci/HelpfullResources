import { Plus } from "lucide-react";

export default function CollectionsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
      <div>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-black mb-4">
          Collections
        </h1>
        <p className="text-[#515981] font-mono text-sm md:text-base">
          Manage and organize your curated digital resources.
        </p>
      </div>
      <button className="flex items-center gap-2 bg-[#171a24] text-white py-3 px-5 rounded-xl font-mono text-xs md:text-sm font-bold active:scale-95 transition-all w-fit">
        <Plus size={16} />
        Create New Collection
      </button>
    </div>
  );
}
