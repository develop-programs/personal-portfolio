import Footer from "@/components/Footer";
import { HoverEffect } from "@/components/ui/Card-hover";
import { projects } from "@/json/projects";
import React, { Suspense } from "react";

export default function page() {
  return (
    <div className="container">
      <div className="py-12 leading-relaxed">
        <h1 className="text-4xl font-bold">My Best Work So Far...</h1>
        <span className="text-lg font-semibold">
          Come and explore what I have build
        </span>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <HoverEffect items={projects} image={true} />
      </Suspense>
      <Footer />
    </div>
  );
}
