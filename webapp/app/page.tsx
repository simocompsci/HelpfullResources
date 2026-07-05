import Hero from "./components/Landing/Hero";
import NavBar from "./components/Landing/Navbar";

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <NavBar />
        <Hero/>
      </main>
    </>
  );
}
