import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full pb-24 pt-8 grid place-content-center">
      <div className="flex flex-col items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/image.png"
              width={50}
              height={50}
              alt="logo"
              decoding="async"
              loading="lazy"
              className="size-8 aspect-square rounded-full"
            />
            <span className="text-xl font-bold uppercase">Shreyansh</span>
          </div>
        </div>
        <div className="space-x-8">
          {[
            {
              name: "About",
              link: "/about",
            },
            {
              name: "Projects",
              link: "/projects",
            },
            {
              name: "Blog",
              link: "/blog",
            },
            {
              name: "Contact",
              link: "/contact",
            },
          ].map((item) => (
            <Link href={item?.link} key={item?.name} className="">
              <span className="text-base font-mono">{item?.name}</span>
            </Link>
          ))}
        </div>
        <div className="h-0.5 my-2 bg-slate-400/70 w-[calc(100%-2rem)]" />
        <div>
          <span className="text-sm font-sans font-light">
            © 2022 Shreyansh Portfolio. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}
