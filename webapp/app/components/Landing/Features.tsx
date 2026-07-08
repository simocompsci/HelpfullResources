export default function Features() {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="bg-white rounded-[2px] py-5 px-5">
          <div className="flex flex-col gap-5 md:flex md:flex-row  justify-between md:items-end">
            <div className="text-[1.75rem]/8 font-medium tracking-[-0.72px] text-foreground-primary lg:text-[2.25rem]/[2.5rem]">
              <p className="text-black max-w-xl text-balance">
                The features section The features section The features section
                section
              </p>
            </div>
            <div>
              <button className="text-white rounded-[2px] bg-black py-3 px-5">
                Get Started
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="aspect-square bg-gray-200 rounded-[2px]"></div>
            <div className="aspect-square bg-gray-200 rounded-[2px]"></div>
            <div className="aspect-square bg-gray-200 rounded-[2px]"></div>
            <div className="aspect-square bg-gray-200 rounded-[2px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
