"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { encode } from "qss";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";

export const HoverEffect = ({
  items,
  className,
  image = false,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
  image?: boolean;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-3 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-2xl -z-10"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="w-full h-full">
            <CardContent className="">
              <Link href={item.link} className="flex flex-col gap-3">
                {image ? (
                  <Image
                    src={`https://api.microlink.io/?${encode({
                      url: item?.link,
                      screenshot: true,
                      meta: false,
                      embed: "screenshot.url",
                      colorScheme: "dark",
                      "viewport.isMobile": true,
                      "viewport.deviceScaleFactor": 1,
                      "viewport.width": 500,
                      "viewport.height": 250,
                    })}`}
                    width={500}
                    height={250}
                    priority={true}
                    quality={50}
                    decoding="async"
                    className="rounded-lg h-full w-full object-cover"
                    alt="preview image"
                  />
                ) : null}

                <CardTitle>{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            </CardContent>
            <CardFooter>
              <Link href={item.link}>Read More</Link>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};
