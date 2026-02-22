import React from 'react'
import { Bungee_Shade, Mona_Sans, DM_Sans } from 'next/font/google'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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

const ContactUs = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4">
      <h1 className={`${BungeeShade.className} text-4xl md:text-7xl text-black text-center font-bold leading-tight max-w-xl md:max-w-4xl mx-auto`}>
        Contact Us
      </h1>

      <form className="w-full max-w-3xl space-y-6 mt-10">
        {/* First row: Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            placeholder="Your Name"
            className="bg-gray-200 p-4 w-full"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-gray-200 p-4 w-full "
          />
        </div>

        {/* Subject */}
        <Input
          type="text"
          placeholder="Subject"
          className="bg-gray-200 p-4 w-full"
        />

        {/* Message */}
        <Textarea
          placeholder="Your Message"
          rows="6"
          className="bg-gray-200 rounded-xl p-4 w-full outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500"
        ></Textarea>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-2 rounded-xl hover:bg-gray-800 transition-all"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default ContactUs
