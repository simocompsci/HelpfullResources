"use client";

import NavBar from "../components/shared/NavBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen pb-28 sm:pb-24 font-body bg-[#f7f5ff]">
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-16 flex-grow">
        {/* Navigation / Header */}
        <nav className="flex justify-between mb-10 items-center">
            <h1 className="text-4xl font-serif font-semibold">Logo</h1>
            <button className="bg-black text-white py-3 px-6 font-mono font-semibold text-sm sm:text-base rounded-xl active:scale-95 transition-all">Logout</button>
        </nav>

        {children}
      </main>

      {/* Floating Bottom Navigation */}
      <NavBar/>
    </div>
  );
}
