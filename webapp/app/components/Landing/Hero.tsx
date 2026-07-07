import Image from "next/image";
import mobileHero from "@/public/images/mobileHero.png";
import { Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex  items-center pt-20 px-5 sm:px-6 lg:px-8">
      <div className="mx-auto mt-10 lg:mt-0 grid w-full md:px-10 max-w-6xl grid-cols-1 items-center gap-12 md:gap-5 md:grid-cols-2">
        {/* CTA section */}
        <div className="flex justify-center lg:justify-start">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-4 text-left lg:mx-0 lg:text-left">
            <div className="flex justify-start text-sm lg:justify-start">
              <button className="group inline-flex w-fit items-center font-medium gap-1.5 rounded-[2px] border border-gray-200 py-1 pl-2.5 pr-1 transition-colors duration-100">
                <span>AI Search</span>

                <span className="flex items-center gap-1.5 rounded-[2px] text-blue-400 bg-[rgba(31,167,122,0.08)] p-1">
                  Coming Soon
                  <Clock size={18} className="text-blue-400" />
                </span>
              </button>
            </div>

            <h1 className="font-recoleta max-w-md text-4xl font-medium tracking-[-0.8px] sm:text-5xl lg:text-6xl">
              All Of Your Bookmarks In One Place
            </h1>

            <p className="text-gray-600 text-base sm:text-lg font-medium">
              Centralized <span className="text-black">Bookmarking App </span>
              That&apos;s <span className="text-black">Fast</span> ,{" "}
              <span className="text-black">Intuitive </span>
              And <span className="text-black">Works Everywhere</span>
            </p>

            <div className="flex flex-col gap-3 pt-2 font-medium sm:flex-row">
              <button className="w-full cursor-pointer rounded-[2px] bg-black px-4 py-3 text-white sm:w-auto">
                Get it on the App Store
              </button>

              <button className="w-full cursor-pointer rounded-[2px] border border-gray-300 bg-white px-4 py-3 text-black sm:w-auto">
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>

        {/* Images section */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src={mobileHero}
            alt="mobileHero"
            priority
            className="h-auto w-[80%] max-w-sm sm:w-[70%] md:max-w-md lg:w-auto lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
