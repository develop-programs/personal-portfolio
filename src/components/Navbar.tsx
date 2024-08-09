"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradiant";
import { DownloadCV } from "@/function/DownloadCV";
import Image from "next/image";
import NavBar from "./NavTabs";
import Link from "next/link";

export default function Navbar() {
  let [activeTab, setActiveTab] = React.useState(-1);
  return (
    <div className="w-full py-8 flex justify-between items-center">
      <div className="hidden md:flex items-center space-x-6 bg-slate-800 px-4 py-2 pe-6 rounded-2xl">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/image.png"
            width={50}
            height={50}
            alt="logo"
            decoding="async"
            loading="lazy"
            className="size-8 aspect-square"
          />
          <span className="text-sm font-bold uppercase">Shreyansh</span>
        </Link>
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
            viewBox="0 0 24 24"
            className="size-6"
          >
            <path
              fill="#b2b1ff"
              d="m20 9-7-7H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
            />
            <path
              fill="#6563ff"
              d="M20 9h-5a2 2 0 0 1-2-2V2zm-5 9H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-5-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z"
            />
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
