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
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Features/>
            <Testimonials/>
            <FAQ/>
            <ContactUs/>
            <Footer/>
        </>
    );
}