import AnimatedTabs from "@/components/Animated-Tabs";
import {HoverEffect} from "@/components/ui/Card-hover";
import {LinkPreview} from "@/components/ui/Link-preview";
import React from "react";
import {projects} from "@/json/projects";
import {blogs} from "@/json/blogs";
import {Suspense} from "react";
import Footer from "@/components/Footer";

export default function page() {
    return (
        <div>
            <div className="w-full lg:max-w-[44rem] grid gap-12 pt-24 pb-48">
        <span className="text-2xl lg:text-4xl font-bold tracking-wider leading-tight antialiased">
          I&apos;m enthusiastic developer commited to create{" "}
            <span className="bg-gradient-to-l from-violet-700 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
            awesome stuff.
          </span>
        </span>
                <span className="text-sm md:text-base text-muted-foreground tracking-widest">
          Meet <strong className="text-white text-lg font-bold">Shreyansh Awadhiya</strong>, the self-proclaimed code wizard who can covert ideas
          into beautiful websites. His passion for building clean and functional
          designs is only rivaled by his passion for finding the perfect GIF to
          express his excitement.
        </span>
                <div className="text-base font-sans text-muted-foreground tracking-wider space-x-2">
                    My favorite Techs are
                    <LinkPreview url="https://reactjs.org/">React js</LinkPreview>,
                    <LinkPreview url="https://nextjs.org/">Next.js</LinkPreview>, with
                    <LinkPreview url="https://www.typescriptlang.org/">
                        TypeScript
                    </LinkPreview>
                    .
                </div>
            </div>
            <div>
                <div className="grid gap-3">
                    <span className="text-2xl font-bold">Work Experience</span>
                    <span className="text-base">My Experiences in Tech field.</span>
                </div>
                <AnimatedTabs/>
            </div>
            <div>
        <span className="text-2xl font-semibold font-sans">
          My best work so far.
        </span>
                <Suspense fallback={<div>Loading...</div>}>
                    <HoverEffect items={projects} image={true}/>
                </Suspense>
            </div>
            <div>
        <span className="text-2xl font-semibold font-sans">
          About My Favorite Tech.
        </span>
                <Suspense fallback={<div>Loading...</div>}>
                    <HoverEffect
                        items={blogs}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                    />
                </Suspense>
            </div>
            <Footer/>
        </div>
    );
}
