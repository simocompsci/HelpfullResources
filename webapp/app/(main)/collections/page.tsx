import { Plus } from "lucide-react";

const collections = [
  { title: "Design Inspiration", items: 128 },
  { title: "Research Papers", items: 42 },
  { title: "Recipes", items: 55 },
  { title: "Web Components", items: 214 },
  { title: "Architecture", items: 16 },
  { title: "Photography", items: 56 },
];

export default function CollectionsPage() {
  return (
    <div className="w-full relative">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-1">
            COLLECTIONS
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

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {collections.map((col, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#f9f9fb] rounded-[2rem] p-6 md:p-8 hover:bg-[#f0efff] transition-all cursor-pointer group"
          >
            {/* Folder Graphic */}
            <div className="relative w-32 h-24 md:w-40 md:h-28 mb-4 md:mb-6 transition-transform group-hover:scale-105">
              
              {/* Back flap (white paper) */}
              <div className="absolute top-2 right-2 w-[85%] h-[85%] bg-white border border-gray-200 rounded-xl shadow-sm z-0"></div>
              
              {/* Front Folder */}
              {/* Folder Tab */}
              <div className="absolute top-0 left-0 w-[45%] h-[30%] bg-[#363a45] rounded-t-xl z-10"></div>
              
              {/* Folder Main Body */}
              <div className="absolute bottom-0 left-0 w-full h-[80%] bg-[#363a45] rounded-xl rounded-tl-none z-20 shadow-sm text-[#363a45]"></div>

            </div>

            {/* Typography */}
            <h3 className="text-sm md:text-base font-bold text-center text-black mb-1 tracking-tight">
              {col.title}
            </h3>
            <p className="text-[10px] md:text-xs text-[#8c94b3] font-mono font-bold tracking-widest uppercase">
              {col.items} ITEMS
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}