"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradiant";
import { DownloadCV } from "@/function/DownloadCV";
import Image from "next/image";
import NavBar from "./NavTabs";

export default function Navbar() {
  let [activeTab, setActiveTab] = React.useState(-1);
  return (
    <div className="w-full py-8 flex justify-between items-center">
      <div className="hidden md:flex items-center space-x-12 bg-slate-800 px-4 py-2 pe-6 rounded-2xl">
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
          <span className="text-sm font-bold uppercase">Shreyansh</span>
        </div>
        <div>
          <NavBar
            data={[
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
            ]}
          />
        </div>
      </div>
      <div className="md:hidden grid place-content-center">
        <button>
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <HoverBorderGradient
        containerClassName="rounded-xl"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 group/modal-btn overflow-hidden relative"
        onClick={DownloadCV}
      >
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 128 128"
            className="size-6 fill-current"
          >
            <path d="M32 122h10c1.7 0 3-1.3 3-3s-1.3-3-3-3H32c-3.9 0-7-3.1-7-7V99c0-1.7-1.3-3-3-3s-3 1.3-3 3v10C19 116.2 24.8 122 32 122zM86 122h10c7.2 0 13-5.8 13-13V99c0-1.7-1.3-3-3-3s-3 1.3-3 3v10c0 3.9-3.1 7-7 7H86c-1.7 0-3 1.3-3 3S84.3 122 86 122zM42 6H32c-7.2 0-13 5.8-13 13v10c0 1.7 1.3 3 3 3s3-1.3 3-3V19c0-3.9 3.1-7 7-7h10c1.7 0 3-1.3 3-3S43.7 6 42 6zM86 6c-1.7 0-3 1.3-3 3 0 .2 0 .3.1.5C83 9.7 83 9.8 83 10v9c0 7.2 5.8 13 13 13h9c.2 0 .3 0 .5-.1.2 0 .3 0 .5 0 1.7 0 3-1.3 3-3C109 16.3 98.7 6 86 6zM96 26c-3.9 0-7-3.1-7-7v-6.7c7 1.2 12.5 6.7 13.7 13.7H96zM39 59c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3s-1.3-3-3-3H42C40.3 56 39 57.3 39 59zM89 74c0-1.7-1.3-3-3-3H42c-1.7 0-3 1.3-3 3s1.3 3 3 3h44C87.7 77 89 75.7 89 74zM69.2 89c0-1.7-1.3-3-3-3h-24c-1.7 0-3 1.3-3 3s1.3 3 3 3h24C67.9 92 69.2 90.7 69.2 89z"></path>
          </svg>
          Download CV
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          ✈️
        </div>
      </HoverBorderGradient>
    </div>
  );
}
