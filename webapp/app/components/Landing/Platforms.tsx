const platforms = [
  { src: "/images/platfroms/pinterest.svg", alt: "Pinterest", label: "Save pins and boards from Pinterest" },
  { src: "/images/platfroms/youtube.svg", alt: "YouTube", label: "Bookmark your favorite YouTube videos" },
  { src: "/images/platfroms/twitter.svg", alt: "Twitter", label: "Save tweets and threads for later" },
  { src: "/images/platfroms/facebook.svg", alt: "Facebook", label: "Save posts and links from Facebook" },
  { src: "/images/platfroms/instagram.svg", alt: "Instagram", label: "Save reels and posts from Instagram" },
  { src: "/images/platfroms/tiktok.svg", alt: "TikTok", label: "Bookmark trending TikTok videos" },
  { src: "/images/platfroms/linkedin.svg", alt: "LinkedIn", label: "Save articles and posts from LinkedIn" },
  { src: "/images/platfroms/reddit.svg", alt: "Reddit", label: "Save threads and posts from Reddit" },
  { src: "/images/platfroms/safari.svg", alt: "Safari", label: "Save tabs and pages from Safari" },
  { src: "/images/platfroms/chrome.svg", alt: "Chrome", label: "Save tabs and pages from Chrome" },
];

export default function Platforms() {
  return (
    <section className="mt-16 border-y border-border-sub">
      <div className="mx-auto max-w-6xl md:px-5">
        <div className="bg-white  border-x border-border-sub">
          <div className="flex flex-col gap-5  justify-between">
            <div className="border-b py-5 px-5 border-border-sub">
              <h1 className="text-black max-w-lg md:max-w-lg text-balance text-[1.75rem]/8 font-medium tracking-[-0.72px] lg:text-[2.25rem]/[2.5rem]">
              Save Your Bookmarks{" "}
              <span className="text-gray-600"> From All Platforms Easily</span>{" "}
              </h1>
            </div>
            
            <div className="grid grid-cols-2 py-5 px-5 gap-5 md:grid-cols-4 mb-5">
              {platforms.map((platform) => (
                <div
                  key={platform.alt}
                  className="h-60 rounded-[3px] border border-border-sub bg-neutral-100 flex flex-col items-center justify-center gap-4 p-5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={platform.src}
                    alt={platform.alt}
                    className="w-16 h-16 object-contain"
                  />
                  <p className="text-sm text-gray-600 text-center">
                    {platform.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
