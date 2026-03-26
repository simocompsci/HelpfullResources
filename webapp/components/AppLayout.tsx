"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Folder, Sparkles, Settings, Plus } from "lucide-react";
import { useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Collections", href: "/collections", icon: Folder },
    { name: "AI Research", href: "/ai", icon: Sparkles },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 glass-panel m-4 z-50">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="font-bold text-xl tracking-tight">Recall</span>
        </div>
        
        <div className="px-4 pb-6">
          <button 
            onClick={() => setAddModalOpen(true)}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <Plus size={20} />
            Add Resource
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                <item.icon size={20} className={isActive ? "text-primary" : ""} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:pl-[18rem] pb-24 md:pb-0 min-h-screen">
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-white/20 dark:border-gray-800/50 pb-safe z-50">
        <nav className="flex items-center justify-around p-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center p-2 rounded-xl transition-all ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div className={`p-1.5 rounded-full ${isActive ? "bg-primary/10" : "transparent"}`}>
                  <item.icon size={22} className={isActive ? "fill-primary/20" : ""} />
                </div>
                <span className="text-[10px] font-medium mt-1">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Floating Action Button */}
      <button 
        onClick={() => setAddModalOpen(true)}
        className="md:hidden fixed bottom-20 right-4 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 z-50 active:scale-95 transition-transform"
      >
        <Plus size={28} />
      </button>

      {/* Add Modal Placeholder */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setAddModalOpen(false)}></div>
          <div className="glass-panel w-full max-w-md p-6 relative z-10 animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-xl font-bold mb-4">Add New Resource</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">URL or Link</label>
                <input type="text" placeholder="https://" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Collections / Folder</label>
                <select className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                  <option>Uncategorized</option>
                  <option>Design Inspiration</option>
                  <option>Tech Tutorials</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button onClick={() => setAddModalOpen(false)} className="px-5 py-2.5 rounded-xl font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">Cancel</button>
                <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all">Save Resource</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
