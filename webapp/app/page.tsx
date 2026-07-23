import About from "./components/Landing/About";
import Features from "./components/Landing/Features";
import Guide from "./components/Landing/Guide";
import Hero from "./components/Landing/Hero";
import NavBar from "./components/Landing/Navbar";
import Platforms from "./components/Landing/Platforms";

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <NavBar />
        <Hero/>
        <About/>
        <Features/>
        <Platforms/>
        <Guide/>
      </main>
    </>
  );
}
