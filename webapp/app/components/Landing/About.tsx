export default function About() {
  return (
    <section className="mt-16 border-y border-gray-300">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-4 border-x border-gray-300 py-5 px-5">
          <h1 className="font-recoleta text-4xl font-medium tracking-[-0.8px] lg:text-5xl">
            Built for curious minds, designed for everyone.
          </h1>

          <div>
            <p className="text-base text-justify text-gray-600 sm:text-lg">
              Save everything worth remembering in one place—from articles,
              videos, websites, and AI tools to books, music, and anything else
              you discover online. Our goal is simple: provide a fast,
              organized, and reliable home for everything you want to come back
              to, with all the features you'd expect from a modern bookmarking
              platform.
            </p>

            <button className="mt-5 rounded-[3px] bg-black p-3 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}