"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { Experiences } from "@/json/Experiences";
import InternshipIcon from "./internship";

export default function AnimatedTabs() {
  const [position, setPosition] = React.useState({
    top: 0,
    height: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="pt-16 pb-24">
      <div className="flex gap-4">
        <div className="ms-12 lg:ms-32 w-0.5 h-[20dvh] bg-slate-900"></div>
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
            {Experiences.map((item, index) => (
              <Trigger key={index} setPosition={setPosition} value={index + 1}>
                {item.trigger}
              </Trigger>
            ))}
            <Cursor position={position} />
          </TabsList>
          {Experiences.map((item, index) => (
            <TabsContent key={index} value={`${index + 1}`} className="h-full">
              <div className="grid gap-4">
                <span className="text-2xl font-bold">{item.position}</span>
                <div className="flex items-center gap-2">
                  <InternshipIcon className="size-4" />
                  <span className="text-sm font-semibold">{item.type}</span>
                </div>
                <span className="flex items-center gap-3 text-base font-bold">
                  <svg
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 stroke-current"
                  >
                    <path
                      d="M9.0001 20.6C9.0001 20.6 16.5131 13.9218 16.5131 8.91307C16.5131 4.76373 13.1494 1.40002 9.0001 1.40002C4.85076 1.40002 1.48706 4.76373 1.48706 8.91307C1.48706 13.9218 9.0001 20.6 9.0001 20.6Z"
                      strokeWidth="2"
                    />
                    <path
                      d="M11.4004 8.60018C11.4004 9.92566 10.3259 11.0002 9.00041 11.0002C7.67493 11.0002 6.60041 9.92566 6.60041 8.60018C6.60041 7.27469 7.67493 6.20018 9.00041 6.20018C10.3259 6.20018 11.4004 7.27469 11.4004 8.60018Z"
                      strokeWidth="2"
                    />
                  </svg>
                  {item.location}
                </span>
                <div className="grid gap-1">
                  {item.responsibilities.map((item, index) => (
                    <span
                      className="flex items-center gap-3 text-sm font-normal"
                      key={index}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        id="check"
                        className="size-4 fill-green-500"
                      >
                        <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 0 1 .27-1.951 1.392 1.392 0 0 1 1.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656c-.022.002-.042.002-.064.002z"></path>
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 fill-current"
                  >
                    <path d="M15.5588 15.1987C16.0827 15.3733 16.649 15.0902 16.8237 14.5662C16.9983 14.0423 16.7152 13.476 16.1912 13.3013L15.5588 15.1987ZM12.5 13.125H11.5C11.5 13.5554 11.7754 13.9376 12.1838 14.0737L12.5 13.125ZM13.5 8.42087C13.5 7.86858 13.0523 7.42087 12.5 7.42087C11.9477 7.42087 11.5 7.86858 11.5 8.42087H13.5ZM16.1912 13.3013L12.8162 12.1763L12.1838 14.0737L15.5588 15.1987L16.1912 13.3013ZM13.5 13.125V8.42087H11.5V13.125H13.5ZM20.5 12C20.5 16.4183 16.9183 20 12.5 20V22C18.0228 22 22.5 17.5228 22.5 12H20.5ZM12.5 20C8.08172 20 4.5 16.4183 4.5 12H2.5C2.5 17.5228 6.97715 22 12.5 22V20ZM4.5 12C4.5 7.58172 8.08172 4 12.5 4V2C6.97715 2 2.5 6.47715 2.5 12H4.5ZM12.5 4C16.9183 4 20.5 7.58172 20.5 12H22.5C22.5 6.47715 18.0228 2 12.5 2V4Z" />
                  </svg>

                  <span className="text-sm">{item.duration}</span>
                </div>
              </div>
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
      className="relative z-10 block cursor-pointer p-2 text-xs uppercase text-white"
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
