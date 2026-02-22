import React from 'react'
import { Bungee_Shade, Mona_Sans, DM_Sans } from 'next/font/google'

const BungeeShade = Bungee_Shade({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
})

const MonaSans = Mona_Sans({
    subsets: ['latin'],
    weight: '800',
    display: 'swap',
})

const DmSans = DM_Sans({
    subsets: ['latin'],
    weight: '800',
    display: 'swap',
})

export default function Testimonials() {
    return (
        <div className="flex flex-col justify-center items-center mx-auto mt-20 px-4">
            <div>
                <h1
                    className={`${BungeeShade.className} text-4xl md:text-7xl text-black text-center font-bold leading-tight max-w-xl md:max-w-4xl mx-auto`}
                >
                    Hear From People Like You And Me
                </h1>
                <p className="text-lg mt-5 md:text-xl leading-relaxed text-black text-center">
                    See how this application improved their workflow and daily life
                </p>
            </div>

            {/* === Masonry Grid === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-xl w-full p-4">
                <div className="flex flex-col gap-4">
                    <div className="bg-gray-300 rounded-xl h-32"></div>
                    <div className="bg-gray-300 rounded-xl h-32"></div>
                    <div className="bg-gray-300 rounded-xl h-64"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="bg-gray-300 rounded-xl h-64"></div>
                    <div className="bg-gray-300 rounded-xl h-32"></div>
                    <div className="bg-gray-300 rounded-xl h-32"></div>
                </div>
            </div>
        </div>
    )
}
