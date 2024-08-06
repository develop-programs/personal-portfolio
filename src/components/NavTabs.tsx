import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type NavItems = {
  name: string;
  link: string;
};

export default function NavTabs({ data }: { data: NavItems[] }) {
  const [position, setPosition] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative w-fit flex gap-4 items-center"
    >
      {data.map((item, index) => (
        <Tab key={index} setPosition={setPosition} link={item?.link}>
          {item?.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </div>
  );
}

const Tab = ({
  children,
  setPosition,
  link,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
  link: string;
}) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  return (
    <Link
      href={link}
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer p-2 text-xs uppercase text-white mix-blend-screen"
    >
      {children}
    </Link>
  );
};

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      transition={{
        ease: "easeInOut",
        stiffness: 60,
        duration: 0.5,
        type: "just",
      }}
      className="absolute z-0 h-full w-fit rounded-lg bg-slate-700/60"
    />
  );
};
