"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      avatar: "/testimonials/gritcult.jpg",
      name: "@GRITCULT",
      source: "Twitter",
      message: "I have this on my iPhone and it’s lit",
      icon: <TwitterIcon />,
    },
    {
      avatar: "/testimonials/farza.jpg",
      name: "@FarzaTV",
      source: "Twitter",
      message: "i like it -- super simple ship :)!",
      icon: <TwitterIcon />,
    },
    {
      avatar: "/testimonials/bmac.webp",
      name: "Anonymous",
      source: "Buy Me a Coffee",
      message:
        "Hey, I've been using the archillect extension for so long, I love it, it gives me so much inspiration and just makes my day a little better when I open chrome.",
      icon: <DollarIcon />,
    },
    {
      avatar: "/testimonials/bmac.webp",
      name: "marshall",
      source: "Buy Me a Coffee",
      message: "i love it so much. thank u. been using for years",
      icon: <DollarIcon />,
    },
    {
      avatar: "/testimonials/jackson.webp",
      name: "Jackson Burgess",
      source: "Chrome Web Store",
      message: "Its valid",
      icon: <Rating rating={5} />,
    },
    {
      avatar: "/testimonials/yj.webp",
      name: "YJ Ang",
      source: "Chrome Web Store",
      message: "Thank you for making this extension!",
      icon: <Rating rating={5} />,
    },
    {
      avatar: "/testimonials/caleb.webp",
      name: "Caleb Rudnick",
      source: "Chrome Web Store",
      message: "This is awesome - thank you for making it!",
      icon: <Rating rating={5} />,
    },
    {
      avatar: "/testimonials/ahan.webp",
      name: "Ahan Madhur",
      source: "Chrome Web Store",
      icon: <Rating rating={3} />,
    },
    {
      avatar: "/testimonials/ziro.webp",
      name: "ziro",
      source: "Chrome Web Store",
      message:
        "great extension. hope you keep updating it and tweaking it further",
      icon: <Rating rating={4} />,
    },
  ];

  return (
    <div className="mt-6 flex max-w-full flex-col flex-wrap lg:max-h-[600px]">
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
  icon,
}: {
  avatar: string;
  name: string;
  source: string;
  message?: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mb-3 rounded-lg border-2 border-neutral-900 px-4 py-5 lg:mr-3 lg:w-[calc(33.33%-0.75rem)]"
    >
      <div className="flex justify-between">
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
            <span className="text-sm leading-6 text-neutral-500">{source}</span>
          </div>
        </div>

        {icon}
      </div>

      {message && <p className="mt-3">{message}</p>}
    </motion.div>
  );
}

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex h-min space-x-0.5">
      <span className="leading-4">{rating}</span>
      <StarIcon />
    </div>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}
