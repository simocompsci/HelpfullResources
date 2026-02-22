import React from 'react'
import { Bungee_Shade } from 'next/font/google'
import { Mona_Sans } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

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

export default function About() {
    return (
        <>
            <section className="flex flex-col md:flex-row justify-between items-start mt-20 gap-12 mx-10 md:mx-30">
                {/* LEFT COLUMN */}
                <div className="md:w-2/5">
                    <h1 className={`${BungeeShade.className} text-5xl md:text-7xl font-serif mb-6 leading-tight`}>
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                        Our application is designed for people who save a lot of useful resources
                        they find online but often forget where they stored them, making it
                        difficult to use those resources later.
                    </p>
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:w-3/5">
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                        I created this app after realizing that my friends and I all faced the
                        same problem: we constantly save social media videos, links, books,
                        YouTube tutorials, and other resources we think will be useful, but we
                        rarely use them. Let’s be honest — we scroll too much and end up stacking
                        these resources instead of benefiting from them. That’s why we built this
                        solution: an app designed to help you actually use what you save. It’s
                        accessible on all your devices — whether you’re on your phone, your PC, or
                        even your smart refrigerator.
                    </p>
                </div>
            </section>


        </>

    )
}
