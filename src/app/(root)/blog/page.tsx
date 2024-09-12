import Footer from "@/components/Footer";
import { HoverEffect } from "@/components/ui/Card-hover";
import { blogs } from "@/json/blogs";
import React, { Suspense } from "react";

export default function page() {
  return (
    <div className="container">
      <div className="py-12">
        <span className="text-2xl font-semibold font-sans">
          My latest blog posts.
        </span>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <HoverEffect
            items={blogs}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
