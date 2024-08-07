"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";

export default function AnimatedTabs() {
  const [position, setPosition] = React.useState({
    top: 0,
    height: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="pt-16 pb-24">
      <div className="flex gap-4 h-[20vh]">
        <div className="ms-12 lg:ms-32 w-0.5 h-full bg-slate-900"></div>
        <Tabs defaultValue="1" className="flex gap-12 h-full">
          <TabsList
            className="grid gap-3"
            onMouseLeave={() => {
              setPosition((pv) => ({
                ...pv,
                opacity: 0,
              }));
            }}
          >
            {Array.from({ length: 4 }, (_, i) => (
              <Trigger key={i} value={i + 1} setPosition={setPosition}>
                Tab {i + 1}
              </Trigger>
            ))}
            <Cursor position={position} />
          </TabsList>
          {Array.from({ length: 4 }, (_, i) => (
            <TabsContent value={`${i + 1}`} className="w-full h-full" key={i}>
              {`Tab ${i + 1}`}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

const Trigger = ({
  children,
  setPosition,
  value,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      top: number;
      height: number;
      opacity: number;
      width: number;
    }>
  >;
  value: number;
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  return (
    <TabsTrigger
      value={`${value}`}
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { height, width } = ref.current.getBoundingClientRect();
        console.log(ref.current.getBoundingClientRect());

        setPosition({
          top: ref.current.offsetTop,
          height,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer p-2 uppercase text-white"
    >
      {children}
    </TabsTrigger>
  );
};

const Cursor = ({
  position,
}: {
  position: { top: number; height: number; opacity: number; width: number };
}) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      transition={{
        ease: "easeInOut",
        stiffness: 80,
        duration: 0.3,
        type: "spring",
      }}
      className={`absolute z-0 ms-1 h-${position.height} w-${position.width} rounded-lg bg-slate-700/60`}
    />
  );
};
