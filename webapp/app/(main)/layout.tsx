import NavBar from "../components/shared/NavBar";
export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />

      <main className="pt-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
}