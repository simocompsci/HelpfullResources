import NavBar from "../components/shared/NavBar";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="pt-24 pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Bottom Center Navbar */}
      <div className="fixed bottom-25 md:bottom-10 left-1/2 -translate-x-1/2 z-50">
        <NavBar />
      </div>
    </>
  );
}
