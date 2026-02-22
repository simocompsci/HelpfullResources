import React from "react";
import { Bungee_Shade } from "next/font/google";
import { Mona_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Darker_Grotesque } from "next/font/google";

const BungeeShade = Bungee_Shade({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const MonaSans = Mona_Sans({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});


const DarkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
})

export default function Features() {
  return (
    <>
      <section className="mt-20 text-center">
        <div>
          <h1
            className={`${BungeeShade.className} text-5xl md:text-7xl font-serif mb-6 leading-tight`}
          >
            Features
          </h1>

          <div className="flex flex-col justify-between mt-10 md:mx-30">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center py-15 md:py-5">
              <div className="flex flex-col items-start ml-10 md:ml-30 gap-5">
                <div className="bg-black p-5 rounded-3xl">
                  <span
                    className={`${DarkerGrotesque.className} text-center text-white text-4xl`}
                  >
                    First Feature
                  </span>
                </div>
                <h1
                  className={`${DarkerGrotesque.className} text-4xl md:text-7xl text-black font-bold text-start leading-tight max-w-xl md:max-w-2xl`}
                >
                  Use Our Product
                  <br />
                  For Your Benefit
                </h1>

                <p className="text-lg md:text-2xl leading-relaxed text-black text-start mr-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore corrupti, dolor aperiam similique architecto sint
                  voluptates. Quidem fugiat molestias nisi obcaecati, deleniti
                  maxime
                </p>
              </div>
              <div className="relative flex justify-center items-center p-4 sm:p-6 mt-8 md:p-8 mx-4 sm:mx-6 md:mx-8">
                <img
                  src="/images/diego-soares-tDgyZNDwWjE-unsplash.jpg"
                  alt="Product Preview"
                  className="w-full max-w-sm h-[600px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl object-cover"
                />

                {/*<div className="absolute right-0 flex flex-col gap-4 pr-1">
                                    <div className="w-70 h-40 bg-gray-200 rounded-2xl"></div>
                                    <div className="w-70 h-40 bg-gray-200 rounded-2xl"></div>
                                    <div className="w-70 h-40 bg-gray-200 rounded-2xl"></div>
                                </div>*/}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center md:rounded-3xl bg-black py-15 md:py-5">
              {/* 🖼️ Image section */}
              <div className="order-2 md:order-1 relative flex justify-center items-center p-4 sm:p-6 mt-8 md:p-8 mx-4 sm:mx-6 md:mx-4 md:my-8">
                <img
                  src="/images/diego-soares-tDgyZNDwWjE-unsplash.jpg"
                  alt="Product Preview"
                  className="w-full max-w-sm h-[600px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl object-cover"
                />

                {/*<div className="absolute left-0 top-40 w-70 h-40 bg-gray-200 rounded-2xl pl-1"></div>
                                <div className="absolute right-0 bottom-40 w-70 h-40 bg-gray-200 rounded-2xl pr-1"></div>*/}
              </div>

              {/* 📝 Text section */}
              <div className="order-1 md:order-2 flex flex-col items-start ml-10 md:mr-10 gap-5">
                <div className="bg-white p-5 rounded-3xl">
                  <span
                    className={`${DarkerGrotesque.className} text-center text-4xl`}
                  >
                    First Feature
                  </span>
                </div>

                <h1
                  className={`${DarkerGrotesque.className} text-4xl md:text-7xl text-white font-bold text-start leading-tight max-w-xl md:max-w-2xl`}
                >
                  Use Our Product
                  <br />
                  For Your Benefit
                </h1>

                <p className="text-lg md:text-2xl leading-relaxed text-white text-start mr-20">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore corrupti, dolor aperiam similique architecto sint
                  voluptates. Quidem fugiat molestias nisi obcaecati, deleniti
                  maxime
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center py-15 md:py-5">
              <div className="flex flex-col items-start ml-10 md:ml-30 gap-5">
                <div className="bg-black p-5 rounded-3xl">
                  <span
                    className={`${DarkerGrotesque.className} text-center text-white text-4xl`}
                  >
                    First Feature
                  </span>
                </div>
                <h1
                  className={`${DarkerGrotesque.className} text-4xl md:text-7xl text-black font-bold text-start leading-tight max-w-xl md:max-w-2xl`}
                >
                  Use Our Product
                  <br />
                  For Your Benefit
                </h1>

                <p className="text-lg md:text-2xl leading-relaxed text-black text-start mr-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore corrupti, dolor aperiam similique architecto sint
                  voluptates. Quidem fugiat molestias nisi obcaecati, deleniti
                  maxime
                </p>
              </div>
              <div className="relative flex justify-center items-center p-4 sm:p-6 mt-8 md:p-8 mx-4 sm:mx-6 md:mx-8">
                <img
                  src="/images/diego-soares-tDgyZNDwWjE-unsplash.jpg"
                  alt="Product Preview"
                  className="w-full max-w-sm h-[600px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl object-cover"
                />

                {/*<div className="absolute left-0 w-80 h-70 bg-gray-200 rounded-2xl pl-1"></div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
