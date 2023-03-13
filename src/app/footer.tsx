import Image from "next/image";

export function Footer() {
  return (
    <footer className="grid place-items-center py-36">
      <div>
        <a
          href="https://www.producthunt.com/posts/auto-archillect-wallpapers?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-auto&#0045;archillect&#0045;wallpapers"
          target="_blank"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=383473&theme=light"
            alt="Auto&#0032;Archillect&#0032;Wallpapers - Sync&#0032;your&#0032;lock&#0032;screen&#0032;with&#0032;Archillect&#0039;s&#0032;most&#0032;recent&#0032;image | Product Hunt"
            className="mb-6 h-[54px] w-[250px]"
            width="250"
            height="54"
          />
        </a>
      </div>
      <div className="mb-1.5 flex space-x-3">
        <a
          className="font-semibold"
          href="https://occipital-sunscreen-08f.notion.site/FAQ-Archillect-Wallpaper-5e57d17f1f014b4faaa5c43b19b32557"
          target="_blank"
        >
          FAQ
        </a>
        <a
          className="font-semibold"
          href="https://api.aw.jubag.dev/"
          target="_blank"
        >
          API
        </a>
        <a
          className="font-semibold"
          href="https://github.com/JulienMartel/archillect-tab"
          target="_blank"
        >
          Github
        </a>
      </div>
      <a
        href="https://twitter.com/JU3AG"
        className="font-medium text-neutral-500 hover:underline"
        target="_blank"
      >
        by ju
      </a>
    </footer>
  );
}
