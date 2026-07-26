export default function Guide() {
  return (
    <section className="mt-16 mb-5">
      <div className="mx-auto max-w-6xl px-10">
        <div className="bg-neutral-100 flex items-center justify-center border border-border-sub rounded-[3px] h-140">
          <div className="w-[92%] h-[85%] overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-[3px]"
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