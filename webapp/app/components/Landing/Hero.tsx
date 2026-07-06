import Image from "next/image";
import mobileHero from "@/public/images/mobileHero.png";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2">
        {/* Images section */}
        <div className="flex justify-center">
          <Image
            src={mobileHero}
            alt="mobileHero"
            height={1000}
            className="h-auto w-auto"
          />
        </div>

        {/* CTA section */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="font-serif text-[2.5rem]/[2.75rem] tracking-[-0.8px] lg:text-[3.125rem]/[3.25rem] lg:tracking-[-0.8px] font-medium">
            Big Catchy Phrase
          </h1>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex gap-2 font-medium">
            <button className="bg-black text-white py-3 px-3 rounded-sm">
              Get it on the App Store
            </button>
            <button className="bg-black text-white py-3 px-3 rounded-sm">
              Get it on Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
