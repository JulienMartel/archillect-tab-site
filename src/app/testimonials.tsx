import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      avatar: "/gritcult.jpg",
      name: "@GRITCULT",
      source: "Twitter",
      message: "I have this on my iPhone and it’s lit",
    },
    {
      avatar: "/farza.jpg",
      name: "@FarzaTV",
      source: "buymeacoffee donor",
      message: "i like it -- super simple ship :)!",
    },
    {
      avatar: "/bmac.webp",
      name: "Anonymous",
      source: "buymeacoffee donor",
      message:
        "Hey, I've been using the archillect extension for so long, I love it, it gives me so much inspiration and just makes my day a little better when I open chrome.",
    },
    {
      avatar: "/bmac.webp",
      name: "marshall",
      source: "buymeacoffee donor",
      message: "i love it so much. thank u. been using for years",
    },
  ];

  return (
    <div className="mt-6 flex max-w-full flex-col flex-wrap lg:max-h-96">
      {testimonials.map((t) => (
        <Testimonial key={t.name} {...t} />
      ))}
    </div>
  );
}

function Testimonial({
  avatar,
  name,
  source,
  message,
}: {
  avatar: string;
  name: string;
  source: string;
  message: string;
}) {
  return (
    <div className="mb-3 rounded-lg border-2 border-neutral-900 px-4 py-5 lg:mr-3 lg:w-[calc(33.33%-0.75rem)]">
      <div className="flex items-center space-x-2">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-neutral-900">
          <Image
            src={avatar}
            alt={name}
            width={74}
            height={74}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="leading-6">{name}</span>
          <span className="leading-6 text-neutral-500">{source}</span>
        </div>
      </div>

      <p className="mt-3">{message}</p>
    </div>
  );
}
