import { motion } from "framer-motion";
import { FolderHeart } from "lucide-react";

const folderColors = [
  { body: "#e4e7ff", flap: "#6366f1" },
  { body: "#dbeafe", flap: "#3b82f6" },
  { body: "#fef3c7", flap: "#f59e0b" },
  { body: "#ccfbf1", flap: "#14b8a6" },
  { body: "#f0e7ff", flap: "#8b5cf6" },
  { body: "#ffe4e6", flap: "#f43f5e" },
  { body: "#cffafe", flap: "#06b6d4" },
  { body: "#fce7f3", flap: "#ec4899" },
];

const collections = [
  { title: "Design Inspiration", items: 128 },
  { title: "Research Papers", items: 42 },
  { title: "Recipes", items: 55 },
  { title: "Web Components", items: 214 },
  { title: "Architecture", items: 16 },
  { title: "Photography", items: 56 },
  { title: "Design Inspiration", items: 128 },
  { title: "Research Papers", items: 42 },
  { title: "Recipes", items: 55 },
  { title: "Web Components", items: 214 },
  { title: "Architecture", items: 16 },
  { title: "Photography", items: 56 },
];

interface CollectionsGridProps {
  searchQuery?: string;
}

export default function CollectionsGrid({ searchQuery = "" }: CollectionsGridProps) {
  const filteredCollections = collections.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredCollections.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 px-4 text-center mt-8 border-2 border-dashed border-gray-200 rounded-3xl bg-white"
      >
        <div className="bg-[#f0efff] p-6 rounded-full mb-6">
          <FolderHeart size={48} className="text-[#242c51] opacity-70" />
        </div>
        <h3 className="text-xl font-semibold text-[#242c51] mb-3 font-body">No collections found</h3>
        <p className="text-[#515981] max-w-sm mb-6 text-sm font-medium">
          We couldn&rsquo;t find any collections matching &ldquo;{searchQuery}&rdquo;. Try a different search term or create a new one.
        </p>
      </motion.div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
    >
      {filteredCollections.map((col, index) => {
        const colors = folderColors[index % folderColors.length];
        return (
          <motion.div
            key={index}
            variants={item}
            className="group flex flex-col items-center justify-start bg-white rounded-3xl pt-8 pb-6 px-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-gray-200 transition-all duration-300 ease-out cursor-pointer"
          >
            {/* Folder SVG */}
            <div className="relative w-28 h-24 md:w-36 md:h-32 mb-6">
              <svg viewBox="0 0 110 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                {/* Shadow */}
                <ellipse cx="55" cy="83" rx="44" ry="5" fill="rgba(0,0,0,0.06)" />

                {/* Back panel */}
                <rect x="6" y="18" width="98" height="60" rx="7" fill={colors.body} />

                {/* Papers */}
                <g className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                  <rect x="24" y="10" width="20" height="34" rx="2.5" fill="#ffffff" stroke="#e5e7eb" strokeWidth="0.5" transform="rotate(-6 34 27)" />
                  <rect x="42" y="12" width="26" height="36" rx="2.5" fill="#fafafa" stroke="#e5e7eb" strokeWidth="0.5" transform="rotate(2 55 30)" />
                  <rect x="62" y="8" width="22" height="32" rx="2.5" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="0.5" transform="rotate(8 73 24)" />
                </g>

                {/* Front flap */}
                <g className="transition-transform duration-300 ease-out group-hover:-translate-y-1" style={{ transformOrigin: "55px 80px" }}>
                  <path d="M6 80 L104 80 Q110 80 110 74 L110 46 Q110 42 106 42 L76 42 C68 42 63 28 55 28 L12 28 Q6 28 6 34 Z" fill={colors.flap} />
                </g>
              </svg>
            </div>

            {/* Typography */}
            <h3 className="text-[15px] md:text-lg font-medium text-center text-gray-800 mb-1 tracking-tight">
              {col.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide">
              {col.items} Files
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
