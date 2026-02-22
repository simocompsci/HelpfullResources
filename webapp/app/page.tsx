import About from "./components/Landing/About";
import Features from "./components/Landing/Features";
import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";
import Testimonials from "./components/Landing/Testimonials";
import FAQ from "./components/Landing/FAQ";
import ContactUs from "./components/Landing/ContactUs";
import Footer from "./components/Landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About/>
      <Features/>
      <Testimonials/>
      <FAQ/>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
