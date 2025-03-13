"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomCarousel from "./CustomCarousel";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="flex justify-center items-center min-h-screen text-[#212121] dark:text-[#f5f5f5]">
          <div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-start"
            >
              <h1 className="font-medium text-2xl md:ml-1">Look At My</h1>
            </motion.div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-start"
            >
              <h1 className="font-bold text-4xl md:text-7xl">Work Of Art</h1>
            </motion.div>
            <motion.div
              transition={{ delay: 0, duration: 1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {/* <div className="border-4 border-[#212121] dark:border-[#f5f5f5] text-[#212121] dark:text-[#f5f5f5] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[50px]"></div> */}
              <CustomCarousel>
                <div className="p-4 flex justify-center items-center">
                  <div className="border-4 w-full p-8 py-10 border-[#212121] dark:border-[#f5f5f5] text-[#212121] dark:text-[#f5f5f5] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[50px]">
                    <div className="flex justify-center mb-4">
                      <img
                        src="/images/Cycle.png"
                        alt="Project 1"
                        className="w-[300px] border-4 border-[#212121] dark:border-[#f5f5f5] rounded-[50px] "
                      />
                    </div>
                    <div className="flex justify-center">
                      <h1 className="font-bold text-2xl">
                        Cycle a ToDo Web App Using NextJS and Supabase
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Next JS
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Supabase
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Java Script
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Supabase
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Tailwind CSS
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-[#212121] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#212121] px-6 py-2 rounded-tl-[500px] rounded-br-[500px] rounded-tr-[100px] rounded-bl-[100px] mx-10"
                      >
                        <Link
                          className="text-2xl font-medium"
                          href="https://github.com/LLC-Fasty/Cycle.git"
                        >
                          Github
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-[#212121] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#212121] px-6 py-2 rounded-tl-[500px] rounded-br-[500px] rounded-tr-[100px] rounded-bl-[100px] mx-10"
                      >
                        <Link
                          className="text-2xl font-medium"
                          href="https://cycle-five.vercel.app/"
                        >
                          Live
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-center items-center">
                  <div className="border-4 w-full p-8 py-10 border-[#212121] dark:border-[#f5f5f5] text-[#212121] dark:text-[#f5f5f5] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[50px]">
                    <div className="flex justify-center mb-4">
                      <img
                        src="/images/Project2.png"
                        alt="Project 1"
                        className="w-[300px] border-4 border-[#212121] dark:border-[#f5f5f5] rounded-[50px] "
                      />
                    </div>
                    <div className="flex justify-center">
                      <h1 className="font-bold text-2xl">
                        Social Media App using React Native, Expo and Supabase
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          React Native
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Expo
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          React Context API
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Supabase
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Javascript
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-[#212121] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#212121] px-6 py-2 rounded-tl-[500px] rounded-br-[500px] rounded-tr-[100px] rounded-bl-[100px] mx-10"
                      >
                        <Link
                          className="text-2xl font-medium"
                          href="https://github.com/LLC-Fasty/LLCircle-SocialApp"
                        >
                          Github
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-center items-center">
                  <div className=" w-full p-8 py-10 border-4 border-[#212121] dark:border-[#f5f5f5] text-[#212121] dark:text-[#f5f5f5] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[50px]">
                    <div className="flex justify-center mb-4">
                      <img
                        src="/images/ProjectOne.png"
                        alt="Project 1"
                        className="w-[300px] border-4 border-[#212121] dark:border-[#f5f5f5] rounded-[50px] "
                      />
                    </div>
                    <div className="flex justify-center">
                      <h1 className="font-bold text-2xl">
                        AI-based Video Summarization using FFmpeg and NLP
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Deep Learning
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          NLP
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          FFmpeg
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-[#212121] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#212121] px-6 py-2 rounded-tl-[500px] rounded-br-[500px] rounded-tr-[100px] rounded-bl-[100px] mx-10"
                      >
                        <Link
                          className="text-2xl font-medium"
                          href="https://github.com/bharathikumar007/Video_Summarization"
                        >
                          Github
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-[#212121] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#212121] px-6 py-2 rounded-tl-[500px] rounded-br-[500px] rounded-tr-[100px] rounded-bl-[100px] mx-10"
                      >
                        <Link
                          className="text-2xl font-medium"
                          href="https://www.scribd.com/document/642391721/AI-based-Video-Summarization-Using-FFmpeg-and-NLP"
                        >
                          Research Paper
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex justify-center items-center">
                  <div className="border-4 w-full p-8 py-10 border-[#212121] dark:border-[#f5f5f5] text-[#212121] dark:text-[#f5f5f5] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[50px]">
                    <div className="flex justify-center mb-4">
                      <img
                        src="/images/p2.png"
                        alt="Project 1"
                        className="w-[300px] border-4 border-[#212121] dark:border-[#f5f5f5] rounded-[50px] "
                      />
                    </div>
                    <div className="flex justify-center">
                      <h1 className="font-bold text-2xl">
                        Disney+ Hotstar Clone Using JavaScript and Firebase
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          JavaScript
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          Firebase
                        </h1>
                      </div>
                      <div>
                        <h1 className="mx-4 font-medium text-sm text px-2 py-1 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                          React JS
                        </h1>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-[#212121] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#212121] px-6 py-2 rounded-tl-[500px] rounded-br-[500px] rounded-tr-[100px] rounded-bl-[100px] mx-10"
                      >
                        <Link
                          className="text-2xl font-medium"
                          href="https://github.com/bharathikumar007/DisneyPlus_Clone"
                        >
                          Github
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="bg-[#212121] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#212121] px-6 py-2 rounded-tl-[500px] rounded-br-[500px] rounded-tr-[100px] rounded-bl-[100px] mx-10"
                      >
                        <Link
                          className="text-2xl font-medium"
                          href="https://disney-plushotstar.web.app/home"
                        >
                          Live Demo
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CustomCarousel>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-[#212121] text-center dark:text-[#f5f5f5] font-bold text-2xl">
            Mobile is on building Have a look in Desktop - Projects Section
          </h1>
        </div>
      </div>
    </div>
  );
}
