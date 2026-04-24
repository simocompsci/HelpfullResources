import About from "./components/Landing/About";
import Features from "./components/Landing/Features";
import Footer from "./components/Landing/Footer";
import Hero from "./components/Landing/Hero";
import Navbar from "./components/Landing/Navbar";
import Testimonials from "./components/Landing/Testimonials";
import FAQ from "./components/Landing/FAQ";
import ContactUs from "./components/Landing/ContactUs";

export default function Page() {
    return (
        <main className="flex flex-col min-h-screen bg-[#f7f5ff] text-[#242c51] font-body">
            <Navbar/>
            <Hero/>
            <About/>
            <Features/>
            <Testimonials/>
            <FAQ/>
            <ContactUs/>
            <Footer/>
        </main>
    );
}