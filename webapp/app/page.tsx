// import About from "./components/Landing/About";
// import Features from "./components/Landing/Features";
// import Footer from "./components/Landing/Footer";
// import Hero from "./components/Landing/Hero";
import NavBar from "./components/Landing/Navbar";
// import Navbar from "./components/Landing/Navbar";
// import Testimonials from "./components/Landing/Testimonials";
// import FAQ from "./components/Landing/FAQ";
// import ContactUs from "./components/Landing/ContactUs";

import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
});

export default function Page() {
    return (
        <>
        <NavBar/>
        <div className="w-full max-w-4xl bg-gray-200 flex justify-center mx-auto mt-50 border border-black">
            <div className={`flex font-medium text-center text-lg/6 text-text-sub p-10 ${inter.className}`}>
                Self-updating documentation for startups, enterprises, and agents.


            </div>
        </div>
            
        </>
    );
}