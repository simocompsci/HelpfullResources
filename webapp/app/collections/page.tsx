import { Folder, MoreVertical, Plus } from "lucide-react";

export default function CollectionsPage() {
  const folders = [
    { id: 1, name: "Design Inspiration", count: 24, color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: 2, name: "Tech Tutorials", count: 12, color: "text-purple-500", bg: "bg-purple-500/10" },
    { id: 3, name: "Reading List", count: 56, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: 4, name: "Project Ideas", count: 8, color: "text-amber-500", bg: "bg-amber-500/10" },
    { id: 5, name: "Recipes", count: 31, color: "text-rose-500", bg: "bg-rose-500/10" },
    { id: 6, name: "Travel Plans", count: 14, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Collections</h1>
          <p className="text-muted-foreground mt-1">Organize your saved resources into folders.</p>
        </div>
        <button className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-2.5 rounded-xl font-medium flex items-center gap-2">
          <Plus size={20} />
          New Folder
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {folders.map(folder => (
          <div key={folder.id} className="glass-card p-6 flex flex-col cursor-pointer group hover:-translate-y-1 relative">
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical size={20} />
            </button>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${folder.bg} ${folder.color} group-hover:scale-110 transition-transform origin-bottom-left`}>
              <Folder size={28} className="fill-current/20" />
            </div>
            <h3 className="font-semibold text-lg text-foreground">{folder.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{folder.count} resources</p>
          </div>
        ))}
      </div>
    </div>
  );
}
