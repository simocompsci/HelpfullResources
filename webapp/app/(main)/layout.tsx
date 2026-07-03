"use client";

import { Home, Folder, Search, Settings, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/collections", label: "Collections", icon: Folder },
  { href: "/ai", label: "Search", icon: Search },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push("/ai");
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [router]);

  return (
    <div className="flex min-h-screen font-body bg-[#f7f5ff]">
      <nav className="fixed left-0 top-0 h-full w-16 md:w-60 bg-white border-r border-gray-200 z-50 flex flex-col items-center md:items-stretch">
        <div className="flex justify-center md:justify-start p-3 md:p-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={44}
            height={44}
            className="w-11 h-11 md:w-12 md:h-12 object-cover rounded-full border border-gray-200"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-stretch gap-1 p-2 md:p-3">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center justify-center md:justify-start gap-3 p-2 md:px-3 md:py-2.5 rounded-xl active:scale-95 transition-all ${
                  isActive
                    ? "bg-[#f0efff] text-[#242c51]"
                    : "text-[#515981] hover:text-[#0a79ff]"
                }`}
              >
                <Icon
                  size={20}
                  className={
                    isActive && (href === "/home" || href === "/collections")
                      ? "fill-[#242c51]"
                      : ""
                  }
                />
                <span className="hidden md:inline font-mono font-bold text-[10px] sm:text-[11px] tracking-widest uppercase">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="relative group p-2 md:p-3">
          <Link
            href="/settings"
            className="flex items-center justify-center md:justify-start gap-3 p-2 md:px-3 md:py-2.5 rounded-xl bg-gray-200 text-[#242c51] active:scale-95 transition-all"
          >
            <User size={20} />
            <span className="hidden md:inline font-mono font-bold text-[10px] sm:text-[11px] tracking-widest uppercase">Profile</span>
          </Link>

          <div className="absolute left-0 bottom-full mb-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0 overflow-hidden">
            <div className="p-1.5 flex flex-col gap-0.5">
              <Link
                href="/settings"
                className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#515981] hover:text-[#242c51] hover:bg-[#f0efff] rounded-xl transition-all font-medium"
              >
                <Settings size={18} />
                Settings
              </Link>
              <div className="h-px bg-gray-100 my-1 mx-2" />
              <button className="flex items-center gap-3 px-3 py-2.5 text-sm text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium w-full text-left outline-none">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 ml-16 md:ml-60 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
