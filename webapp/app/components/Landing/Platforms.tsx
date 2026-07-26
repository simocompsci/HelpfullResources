import { Pinterest } from "@/components/ui/svgs/pinterest";
import { Youtube } from "@/components/ui/svgs/youtube";
import { Twitter } from "@/components/ui/svgs/twitter";
import { FacebookIcon } from "@/components/ui/svgs/facebookIcon";
import { InstagramIcon } from "@/components/ui/svgs/instagramIcon";
import { TiktokIconLight } from "@/components/ui/svgs/tiktokIconLight";
import { Linkedin } from "@/components/ui/svgs/linkedin";
import { Reddit } from "@/components/ui/svgs/reddit";
import { Threads } from "@/components/ui/svgs/threads";
import { Safari } from "@/components/ui/svgs/safari";
import { Google } from "@/components/ui/svgs/google";
import { GoogleWordmark } from "@/components/ui/svgs/googleWordmark";

const platforms = [
  { icon: Pinterest, label: "Save pins and boards from Pinterest" },
  { icon: Youtube, label: "Bookmark your favorite YouTube videos" },
  { icon: Twitter, label: "Save tweets and threads for later" },
  { icon: FacebookIcon, label: "Save posts and links from Facebook" },
  { icon: InstagramIcon, label: "Save reels and posts from Instagram" },
  { icon: TiktokIconLight, label: "Bookmark trending TikTok videos" },
  { icon: Linkedin, label: "Save articles and posts from LinkedIn" },
  { icon: Reddit, label: "Save threads and posts from Reddit" },
  { icon: Threads, label: "Save conversations from Threads" },
  { icon: Safari, label: "Import bookmarks from Safari" },
  { icon: Google, label: "Sync your Google bookmarks" },
  { icon: GoogleWordmark, label: "Discover and save content from Google" },
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
                  key={platform.label}
                  className="h-60 rounded-[3px] border border-border-sub bg-neutral-100 flex flex-col items-center justify-center gap-4 p-5"
                >
                  <platform.icon className="w-12 h-12" />
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
