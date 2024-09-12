"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradiant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-[calc(100vh-10rem)] grid place-content-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/Oops! 404 Error with a broken robot-amico.svg"
          alt="not-found"
          width={300}
          height={300}
          className="w-full"
          priority
          placeholder="blur"
          blurDataURL="/Oops! 404 Error with a broken robot-amico.svg"
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
          unoptimized
          decoding="async"
        />
        <HoverBorderGradient
          containerClassName="rounded-xl"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 group/modal-btn overflow-hidden relative"
          onClick={() => router.push("/")}
        >
          <span>Go Back</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}
