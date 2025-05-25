"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import jyopfp from "../../../public/jyopfp.svg";
import htmlIcon from "../../../public/html-5-icon.svg";
import cssIcon from "../../../public/css-3-icon.svg";
import jsIcon from "../../../public/js-icon.svg";
import reactIcon from "../../../public/react-icon.svg";
import nextjsIcon from "../../../public/nextjs-icon.svg";
import nodejsIcon from "../../../public/nodejs-icon.svg";
import bootstrapIcon from "../../../public/bootstrap-icon.svg";
import tailwindcssIcon from "../../../public/tailwindcss-icon.svg";
import scssIcon from "../../../public/scss-icon.svg";
import reduxIcon from "../../../public/redux.svg";
import tsIcon from "../../../public/typescript-icon.svg";
import gitIcon from "../../../public/git-icon.svg";
import mongodbjsIcon from "../../../public/mongodb-icon.svg";
// import hero from "../../../public/hero-section.svg";
// import jyopfp from "../../../public/"

const HeroSection = () => {
  return (
    <section className="lg:py-12 mx-auto px-2 sm:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="place-self-center text-center md:text-left"
          >
            <div className="pt-10 px-2 sm:px-6">
              <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-[4rem] lg:leading-tight font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 shadow-md">
                  Front-End React Developer
                </span>
                <br />
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Hi, I'm Jyothishwar Muthukumar. A passionate Front-end React Developer based in chennai, India. 📍
              </p>
              <div className="socials flex flex-row gap-2 justify-center md:justify-start">
                <Link href="https://github.com/jyothish2011">
                  <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/jyothishwar-muthukumar-1664b0193/">
                  <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-2 lg:mt-0"
          >
            <div className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative text-center mx-auto">
              <Image src={jyopfp} alt="jyopfp" width={320} height={400} className="rounded-full object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex py-8 sm:py-12 justify-center items-center text-lg font-semibold text-gray-300">Tech Stack</div>
        <div className="overflow-x-hidden w-full">
          <div className="marquee min-w-[700px] flex items-center">
            <div className="marquee-content flex gap-4">
              {/* Original Icons */}
              <Image src={htmlIcon} height={48} width={48} alt="html Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="HTML" />
              <Image src={cssIcon} height={48} width={48} alt="css Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="CSS" />
              <Image src={jsIcon} height={48} width={48} alt="js Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Javascript" />
              <Image src={tsIcon} height={44} width={44} alt="ts Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Typescript" />
              <Image src={reactIcon} height={48} width={48} alt="react Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="React.JS" />
              <Image src={reduxIcon} height={40} width={40} alt="redux Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Redux" />
              <Image src={nextjsIcon} height={40} width={40} alt="nextjs Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Next.JS" />
              <Image src={nodejsIcon} height={48} width={48} alt="nodejs Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Node.JS" />
              <Image src={mongodbjsIcon} height={48} width={48} alt="mongodb Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="MongoDB" />
              <Image src={bootstrapIcon} height={44} width={44} alt="bootstrap Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Bootstrap" />
              <Image src={tailwindcssIcon} height={44} width={44} alt="tailwindcss Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="TailwindCSS" />
              <Image src={scssIcon} height={44} width={44} alt="scss Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="SCSS" />
              <Image src={gitIcon} height={44} width={44} alt="git Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Git" />

              {/* Duplicate to make loop seamless */}
              <Image src={htmlIcon} height={48} width={48} alt="html Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="HTML" />
              <Image src={cssIcon} height={48} width={48} alt="css Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="CSS" />
              <Image src={jsIcon} height={48} width={48} alt="js Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Javascript" />
              <Image src={tsIcon} height={44} width={44} alt="ts Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Typescript" />
              <Image src={reactIcon} height={48} width={48} alt="react Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="React.JS" />
              <Image src={reduxIcon} height={40} width={40} alt="redux Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Redux" />
              <Image src={nextjsIcon} height={40} width={40} alt="nextjs Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Next.JS" />
              <Image src={nodejsIcon} height={48} width={48} alt="nodejs Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Node.JS" />
              <Image src={mongodbjsIcon} height={48} width={48} alt="mongodb Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="MongoDB" />
              <Image src={bootstrapIcon} height={44} width={44} alt="bootstrap Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Bootstrap" />
              <Image src={tailwindcssIcon} height={44} width={44} alt="tailwindcss Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="TailwindCSS" />
              <Image src={scssIcon} height={44} width={44} alt="scss Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="SCSS" />
              <Image src={gitIcon} height={44} width={44} alt="git Icon" className="hover:scale-125 transition-transform duration-300 ease-in-out" title="Git" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
