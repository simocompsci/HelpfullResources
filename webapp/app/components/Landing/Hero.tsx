import Image from "next/image";
import webHero from "@/public/images/webHero.png";
import mobileHero from "@/public/images/mobileHero.png";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
        <div>
          {/* the images of our application */}
          <Image  src={webHero} alt="webHero" />
          <Image src={mobileHero} alt="mobileHero" />
        </div>
        <div>{/* The CTA section */}</div>
      </div>
    </section>
  );
}
