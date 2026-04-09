import { Plus } from "lucide-react";

const collections = [
  { title: "Design Inspiration", items: 128 },
  { title: "Research Papers", items: 42 },
  { title: "Recipes", items: 55 },
  { title: "Web Components", items: 214 },
  { title: "Architecture", items: 16 },
  { title: "Photography", items: 56 },{ title: "Design Inspiration", items: 128 },
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
          <h1 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-black mb-4">
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {collections.map((col, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start bg-[#f1f1f2] rounded-3xl pt-8 pb-6 px-4 hover:bg-[#e8e8e9] transition-all cursor-pointer group border border-transparent hover:border-gray-200"
          >
            {/* Folder SVG wrapper */}
            <div className="relative w-28 h-24 md:w-36 md:h-32 mb-6 transition-transform group-hover:-translate-y-1">
              <svg viewBox="0 0 100 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                
                {/* Back flap */}
                <rect x="0" y="20" width="100" height="70" rx="6" fill="#4B4B4D" />
                
                {/* Papers */}
                <rect x="12" y="5" width="28" height="40" rx="3" fill="#ffffff" stroke="#e0e0e0" strokeWidth="0.5" transform="rotate(-8 26 25)" />
                <rect x="32" y="7" width="38" height="42" rx="3" fill="#fafafa" stroke="#e0e0e0" strokeWidth="0.5" transform="rotate(2 51 28)" />
                <rect x="58" y="10" width="32" height="40" rx="3" fill="#f4f4f4" stroke="#e0e0e0" strokeWidth="0.5" transform="rotate(10 74 30)" />
                
                {/* Front flap */}
                <path 
                  d="M 6 90
                     L 94 90
                     Q 100 90, 100 84
                     L 100 41
                     Q 100 37, 96 37
                     L 65 37
                     C 57 37, 51 24, 43 24
                     L 6 24
                     Q 0 24, 0 30
                     L 0 84
                     Q 0 90, 6 90
                     Z" 
                  fill="#5C5C5E" 
                />
              </svg>
            </div>

            {/* Typography */}
            <h3 className="text-[15px] md:text-lg font-medium text-center text-gray-800 mb-1 tracking-tight">
              {col.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
              {col.items} Files
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}