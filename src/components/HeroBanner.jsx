"use client";
import React from "react";
import WordRotate from "./animation/WordRotate";
import Runner from "./svgimage/Runner";
import { FadeText } from "./animation/FadeText";
import WordFadeIn from "./animation/WordFadeIn";
import LinkedIn from "./svgimage/LinkedIn";
import Github from "./svgimage/Github";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="flex justify-center items-center min-h-screen">
          <div>
            <div className="text-[#212121] dark:text-[#f5f5f5] mb-6">
              <FadeText
                className="font-medium text-2xl md:ml-1"
                direction="left"
                framerProps={{
                  show: { transition: { delay: 0.2 } },
                }}
                text="Hello,I'm"
              />
              <WordFadeIn
                className="font-bold text-4xl md:text-7xl"
                words="R Bharathi Kumar"
              />
              <div className="flex">
                <FadeText
                  className="font-black text-3xl md:ml-1"
                  direction="left"
                  framerProps={{
                    show: { transition: { delay: 0.2 } },
                  }}
                  text="CEO"
                />
                <FadeText
                  className="font-medium text-3xl mx-3"
                  direction="left"
                  framerProps={{
                    show: { transition: { delay: 0.2 } },
                  }}
                  text="at"
                />
                <FadeText
                  className="font-black text-3xl md:ml-1"
                  direction="left"
                  framerProps={{
                    show: { transition: { delay: 0.2 } },
                  }}
                  text="LinkListCircle"
                />
              </div>
            </div>
            <div>
              <div className="text-[#212121] dark:text-[#f5f5f5]">
                <FadeText
                  className="font-medium text-2xl"
                  direction="left"
                  framerProps={{
                    show: { transition: { delay: 0.2 } },
                  }}
                  text="Specialization in"
                />
              </div>
              <div className="mb-4">
                <WordRotate
                  className="text-6xl py-2 font-black text-[#212121] dark:text-[#f5f5f5]"
                  words={[
                    "Blockchain Dev",
                    "AI/ML Technology",
                    "Mern Stack Dev",
                    "Mobile App Dev",
                  ]}
                />
              </div>
            </div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className="text-[#212121] dark:text-[#f5f5f5] font-medium ">
                <div className="flex items-center mt-2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <button className="bg-[#e2e2e2] dark:bg-[#3f3f3f] py-2 px-4 text-2xl rounded-full border-4 border-[#3f3f3f] dark:border-[#e2e2e2] mr-2 my-2">
                      Download CV
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <button className="bg-[#212121] text-[#f5f5f5] dark:text-[#212121] dark:bg-[#e2e2e2] py-2 px-4 text-2xl rounded-full border-4 border-[#212121] dark:border-[#e2e2e2] mx-2 my-2">
                      Contact Us
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <button className="bg-[#212121] dark:bg-[#e2e2e2] p-4 rounded-full mx-2">
                      <LinkedIn />
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <button className="rounded-full mx-2 mt-1">
                      <Github />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <Runner />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-[#212121] text-center dark:text-[#f5f5f5] font-bold text-2xl">
            Mobile is on building Have a look in Desktop - HeroBanner Section
          </h1>
        </div>
      </div>
    </div>
  );
}
