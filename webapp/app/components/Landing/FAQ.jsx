import React from 'react'
import { Bungee_Shade, Mona_Sans, DM_Sans } from 'next/font/google'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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

export default function FAQ() {
    return (
        <div className="mt-20 px-4">
            <h1
                className={`${BungeeShade.className} text-4xl md:text-7xl text-black text-center font-bold leading-tight max-w-xl md:max-w-4xl mx-auto`}
            >
                FAQ
            </h1>

            <div className="flex justify-center w-full mt-10">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full max-w-3xl mx-auto"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={`${MonaSans.className} text-2xl md:text-3xl`}>
                            Product Information
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance px-2">
                            <p className="text-base md:text-xl leading-relaxed text-black text-start">
                                Our flagship product combines cutting-edge technology with sleek
                                design. Built with premium materials, it offers unparalleled
                                performance and reliability.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className={`${MonaSans.className} text-2xl md:text-3xl`}>
                            Shipping Details
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance px-2">
                            <p className="text-base md:text-xl leading-relaxed text-black text-start">
                                We offer worldwide shipping through trusted courier partners.
                                Standard delivery takes 3-5 business days, while express shipping
                                ensures delivery within 1-2 business days.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className={`${MonaSans.className} text-2xl md:text-3xl`}>
                            Return Policy
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance px-2">
                            <p className="text-base md:text-xl leading-relaxed text-black text-start">
                                We stand behind our products with a comprehensive 30-day return
                                policy. If you&apos;re not completely satisfied, simply return the
                                item in its original condition.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>

    )
}
