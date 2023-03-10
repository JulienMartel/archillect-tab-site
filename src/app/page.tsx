import { Footer } from "./footer";
import { Logo } from "./logo";
import { Phone } from "./(phone)/phone";
import { Pricing } from "./pricing";
import { Testimonials } from "./testimonials";
import Script from "next/script";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg p-4">
      <Script
        src="https://gumroad.com/js/gumroad.js"
        // onLoad={() => console.log("Script has loaded")} would have to be client component + jotai ?
      />

      <section className="my-12">
        <Logo />

        <h1 className="my-6 px-6 text-center text-2xl font-semibold leading-7">
          Sync your iPhone lock screen with Archillect&apos;s most recent image.
        </h1>

        <nav className="my-6 flex justify-center gap-x-2.5">
          <a
            href="https://jubag.gumroad.com/l/aw"
            data-gumroad-overlay-checkout="true"
            target="_blank"
          >
            <button className="inline-flex h-10 items-center justify-center rounded-3xl bg-neutral-100 py-2 px-5 font-semibold text-black transition-colors hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 active:scale-95 data-[state=open]:bg-neutral-800">
              Get key
            </button>
          </a>
          <a
            href="https://occipital-sunscreen-08f.notion.site/Archillect-wallpaper-instructions-62b3d98263fc4b4aa2494b229f53658b"
            target="_blank"
          >
            <button className="inline-flex h-10 items-center justify-center rounded-3xl bg-neutral-800 py-2 px-5 font-semibold text-neutral-100 transition-colors hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 active:scale-95 data-[state=open]:bg-neutral-800">
              Instructions
            </button>
          </a>
        </nav>
      </section>

      <section className="my-12 mb-24 flex flex-col items-center space-y-2 md:flex-row md:space-x-2 md:space-y-0 lg:my-24">
        <figure className="h-[500px] w-full lg:aspect-square lg:h-full lg:w-2/3">
          <Phone />
        </figure>

        <Pricing />
      </section>

      <section>
        <h2 className="text-center text-xl font-semibold">Wall of love 🤍</h2>
        <Testimonials />
      </section>

      <Footer />
    </main>
  );
}
