export default function About() {
  return (
    <section className="mt-16 border-y border-gray-300">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-4 border-x border-gray-300 py-5 px-5">
          <h1 className="font-recoleta text-4xl font-medium tracking-[-0.8px] lg:text-5xl">
            Built for curious minds, designed for everyone.
          </h1>

          <div>
            <p className="text-base text-justify text-gray-600 sm:text-lg font-medium">
              <span className="text-black">Save everything </span>worth
              remembering in <span className="text-black">one place </span>from
              articles, videos, websites, AI tools, books, music, and anything
              else you discover online. Our goal is to provide a{" "}
              <span className="text-black">fast, organized, and reliable </span>home for everything you  want to
              <span className="text-black"> come back to.</span>
            </p>

            <button className="mt-5 rounded-[3px] bg-black p-3 text-white cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
