"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Typewritter({ words }: { words: string[] }) {
  return (
    <Typewriter
      loop
      cursor
      cursorStyle="|"
      words={words}
      delaySpeed={1000}
      typeSpeed={200}
      deleteSpeed={200}
    />
  );
}
