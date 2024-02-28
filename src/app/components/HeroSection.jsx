"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import htmlIcon from "../../../public/html-5-icon.svg";
import cssIcon from "../../../public/css-3-icon.svg";
import jsIcon from "../../../public/js-icon.svg";
import reactIcon from "../../../public/react-icon.svg";
import nextjsIcon from "../../../public/nextjs-icon.svg";
import nodejsIcon from "../../../public/nodejs-icon.svg";
import bootstrapIcon from "../../../public/bootstrap-icon.svg";
import tailwindcssIcon from "../../../public/tailwindcss-icon.svg";
import scssIcon from "../../../public/scss-icon.svg";
import hero from "../../../public/hero-section.svg";

const HeroSection = () => {
  return (
    <section className="lg:py-2 mx-auto ">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 ">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <div className="pt-10 px-6">
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-[4rem] lg:leading-tight font-extrabold">
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  Front-End React Developer
                </span> */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 shadow-md">
                  Front-End React Developer
                </span>

                <br></br>
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Hi, I'm Jyothishwar Muthukumar. A passionate Front-end React Developer based in chennai, India. 📍
              </p>
              <div className="socials flex flex-row gap-2">
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
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-2 lg:mt-0"
          >
            <div className=" self-center w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative text-center">
              <Image src={hero} height={300} width={380} alt="Icon" className="pt-20 mx-20 max-sm:mx-0" />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      // className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="2xl:flex 2xl:justify-center 2xl:flex-col xl:flex xl:justify-center xl:flex-col lg:flex lg:justify-center lg:flex-col md:hidden  max-sm:hidden sm:hidden">
          <div className="flex justify-around items-center gap-8 pt-4 sm:pt-24 px-4 sm:px-10">
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text pt-6">tech stack</p>
            <div className="flex justify-start gap-0 ">
              <Image src={htmlIcon} height={64} width={64} alt="html Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" />
              <Image src={cssIcon} height={64} width={64} alt="Github Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
              <Image src={jsIcon} height={64} width={64} alt="js Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" />
            </div>
            <div className="flex justify-start gap-2 ">
              <Image src={reactIcon} height={64} width={64} alt="react Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
              <Image src={nextjsIcon} height={54} width={54} alt="nextjs Icon"
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" />
              <Image src={nodejsIcon} height={64} width={64} alt="nodejs Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
            </div>
            <div className="flex justify-start gap-2 ">
              <Image src={bootstrapIcon} height={58} width={58} alt="bootstrap Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
              <Image src={tailwindcssIcon} height={58} width={58} alt="tailwindcss Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
              <Image src={scssIcon} height={58} width={58} alt="scss-icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
            </div>
          </div>
        </div>

        <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block container flex justify-center flex-col">
          <p className="text-[#ADB7BE] text-lg md:text-center sm:text-center max-sm:text-center mb-6 md:pt-7 pt-7">Tech stack</p>
          <div className="flex justify-around items-center gap-12">
            <div className="flex justify-start gap-0">
              <Image src={htmlIcon} height={64} width={64} alt="html Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" />
              <Image src={cssIcon} height={64} width={64} alt="Github Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
              <Image src={jsIcon} height={64} width={64} alt="js Icon"
               className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
            </div>
          </div>
          <div className="flex justify-center items-center gap-16 pt-6">
            <div className="flex justify-start gap-2 ">
              <Image src={reactIcon} height={60} width={60} alt="react Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" />
              <Image src={nodejsIcon} height={58} width={58} alt="nodejs Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" />
              <Image src={nextjsIcon} height={50} width={50} alt="nextjs Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" />

            </div>
          </div>
          <div className="flex justify-center items-center gap-16 pt-6">
            <div className="flex justify-start gap-2 ">
              <Image src={bootstrapIcon} height={50} width={50} alt="bootstrap Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
              <Image src={scssIcon} height={50} width={50} alt="scss-icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out"/>
              <Image src={tailwindcssIcon} height={58} width={58} alt="tailwindcss Icon" 
              className="hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
