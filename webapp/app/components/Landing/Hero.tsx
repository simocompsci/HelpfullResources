import Image from "next/image";
import mobileHero from "@/public/images/mobileHero.png";
import { Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)] items-start">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2  mt-10">
        {/* CTA section */}
        <div className="flex justify-end">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex text-sm">
              <button className="group inline-flex w-fit items-center gap-1.5 rounded-[2px] border border-gray-200 py-1 pl-2.5 pr-1 outline-offset-2 transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-brand">
                <span>AI Search</span>
                <span className="bg-gray-200 rounded-[2px] p-1 flex items-center gap-1.5">Comming Soon <Clock className="text-gray-700" size={18}/></span>
              </button>
            </div>
            <h1 className="font-recoleta font-medium max-w-md text-[2.5rem]/[2.75rem] tracking-[-0.8px] lg:text-6xl lg:tracking-[-0.8px]">
              All Of Your Bookmarks In One Place
            </h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-2 font-medium">
              <button className="bg-black text-white py-3 px-3 rounded-sm cursor-pointer">
                Get it on the App Store
              </button>
              <button className="bg-white text-black py-3 px-3 rounded-sm border border-gray-300 cursor-pointer">
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
        {/* Images section */}
        <div className="flex justify-start">
          <Image
            src={mobileHero}
            alt="mobileHero"
            height={5000}
            className="h-auto w-auto"
          />
        </div>
      </div>
    </section>
  );
}
