"use client";

import { motion } from "framer-motion";

export function Pricing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid h-min w-full place-items-center lg:w-1/3"
    >
      <div className="mx-auto w-full rounded-2xl bg-neutral-900 px-6 py-7">
        <h3 className="text-xl font-bold">Full Access</h3>

        <p className="text-neutral-500">Free 1 week trial included.</p>

        <p className="mt-2.5 mb-4 inline-block rounded-full bg-neutral-700 px-3 py-1 font-bold">
          $3 / month
        </p>

        <a
          href="https://jubag.gumroad.com/l/aw"
          data-gumroad-overlay-checkout="true"
          target="_blank"
        >
          <button className="flex h-10 w-full items-center justify-center rounded-md bg-neutral-100 py-2 px-5 font-semibold text-black transition-colors hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 data-[state=open]:bg-neutral-800">
            Get key
          </button>
        </a>

        <ul className="mt-6">
          <Li>iOS shortcut</Li>
          <Li>Chrome extension</Li>
          <Li>Archillect API access</Li>
          <Li>iOS auto-center image subject</Li>
          <Li>Instructions included</Li>
          <Li>Lifetime access</Li>
          <Li>Regular updates</Li>
          <Li>Secure & open-source</Li>
          <Li>Customer support</Li>
          <Li>Cancel anytime</Li>
        </ul>
      </div>
    </motion.div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="my-2 flex items-center gap-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>

      <span>{children}</span>
    </li>
  );
}
