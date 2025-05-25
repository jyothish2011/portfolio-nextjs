"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import aboutSection from "../../../public/about-section.svg";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-12 sm:px-6 lg:gap-16 lg:py-16 lg:px-16">
        <div className="flex justify-center">
          <Image
            src={aboutSection}
            alt="aboutSection"
            width={320}
            height={400}
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
            priority
          />
        </div>
        <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, Redux, Node.js, Express,
            Mongo db, HTML, CSS, bootstrap, tailwind and Github. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
