export default function Guide() {
  return (
    <section className="mt-12 md:mt-16 mb-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
        <div
          className="
            bg-neutral-100
            border border-border-sub
            rounded-[3px]
            flex items-center justify-center
            h-[220px]
            sm:h-[320px]
            md:h-[450px]
            lg:h-[560px]
          "
        >
          <div
            className="
              w-[96%]
              h-[94%]
              sm:w-[95%]
              sm:h-[92%]
              md:w-[95%]
              md:h-[91%]
              overflow-hidden
            "
          >
            <video
              className="w-full h-full object-cover rounded md:rounded-[6px]"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/videos/guide.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
