import { Search, Folder, Video, Link as LinkIcon, Image as ImageIcon, FileText } from "lucide-react";

export default function Home() {
  const topFolders = [
    { id: 1, name: "Design Inspiration", icon: ImageIcon, color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: 2, name: "Tech Tutorials", icon: Video, color: "text-purple-500", bg: "bg-purple-500/10" },
    { id: 3, name: "Reading List", icon: FileText, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { id: 4, name: "Project Ideas", icon: Folder, color: "text-amber-500", bg: "bg-amber-500/10" },
  ];

  const recentSaves = [
    { id: 1, title: "Modern Web Design Trends 2026", domain: "youtube.com", type: "Video", time: "2 hours ago", icon: Video },
    { id: 2, title: "How to Build Glassmorphism UIs", domain: "medium.com", type: "Article", time: "5 hours ago", icon: FileText },
    { id: 3, title: "Figma UI Kit - Free Download", domain: "figma.com", type: "Asset", time: "Yesterday", icon: LinkIcon },
    { id: 4, title: "Next.js 15 Server Components Guide", domain: "nextjs.org", type: "Documentation", time: "Yesterday", icon: FileText },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header & Search */}
      <header className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
          <p className="text-muted-foreground mt-1">What would you like to recall today?</p>
        </div>
        <div className="w-full md:w-96 relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search titles, tags, or notes..." 
            className="w-full bg-white dark:bg-gray-900 border border-border rounded-full py-2.5 pl-10 pr-4 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all shadow-sm"
          />
        </div>
      </header>

      {/* Top Folders */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Top Collections</h2>
          <button className="text-sm text-primary font-medium hover:underline">View all</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topFolders.map(folder => (
            <div key={folder.id} className="glass-card p-4 flex flex-col items-center justify-center text-center gap-3 cursor-pointer group hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${folder.bg} ${folder.color} group-hover:scale-110 transition-transform`}>
                <folder.icon size={24} />
              </div>
              <span className="font-medium text-sm text-foreground">{folder.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Saves */}
      <section>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Jump Back In</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentSaves.map(save => (
            <div key={save.id} className="glass-card p-4 flex items-start gap-4 cursor-pointer group hover:-translate-y-1">
              <div className="w-16 h-16 rounded-xl bg-secondary/80 flex items-center justify-center shrink-0">
                <save.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">{save.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                  <span className="truncate">{save.domain}</span>
                  <span>•</span>
                  <span>{save.time}</span>
                </p>
                <div className="mt-2 flex gap-2">
                  <span className="text-[10px] px-2 py-1 bg-secondary rounded-lg font-medium text-muted-foreground">{save.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
