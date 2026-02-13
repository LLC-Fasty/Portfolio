"use client";
import React from "react";
import { motion } from "framer-motion";
import Edu from "./svgimage/Edu";

export default function About() {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="flex justify-center items-center min-h-screen">
          <div>
            <div className="flex justify-center items-center">
              <div>
                <div className="text-[#212121] dark:text-[#f5f5f5] mb-6">
                  <div className="flex justify-between mt-[100px]">
                    <motion.div
                      transition={{ delay: 0, duration: 2 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="border-4 border-[#212121] dark:border-[#f5f5f5] px-[100px] py-[60px] rounded-tr-[150px] rounded-bl-[150px] rounded-br-[20px]"
                    >
                      <div className="text-3xl font-bold text-center">
                        <h1>Experience</h1>
                      </div>
                      <div className="text-2xl font-medium text-center">
                        <h1>2+ Years</h1>
                      </div>
                    </motion.div>
                    <motion.div
                      transition={{ delay: 0, duration: 2 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <img
                        src="/images/Expo.png"
                        alt="Experience"
                        className="w-[200px] block dark:hidden mr-8"
                      />
                      <img
                        src="/images/ExpoLight.png"
                        alt="Experience"
                        className="w-[200px] hidden dark:block mr-8"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    transition={{ delay: 0, duration: 2 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#212121] dark:text-[#f5f5f5] border-4 border-[#212121] dark:border-[#f5f5f5] rounded-tl-[200px] rounded-br-[200px] rounded-bl-[20px] w-[550px] mx-12 mt-4 py-10"
                  >
                    <div className="flex justify-center">
                      <Edu />
                    </div>
                    <div className="text-3xl font-bold text-center">
                      <h1>Education</h1>
                    </div>
                    <div className="text-2xl font-normal text-center">
                      <h1>Diploma in Computer Engineering</h1>
                    </div>
                    <div className="text-2xl font-normal text-center">
                      <h1>B.Tech in Artificial Intelligence</h1>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="text-[#212121] dark:text-[#f5f5f5]">
                <motion.div
                  transition={{ delay: 0, duration: 2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex justify-end"
                >
                  <h1 className="font-medium text-2xl md:mr-1">
                    Get to know more
                  </h1>
                </motion.div>
                <motion.div
                  transition={{ delay: 0, duration: 2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex justify-end mb-8"
                >
                  <h1 className="font-bold text-4xl md:text-7xl">About Me</h1>
                </motion.div>
                <motion.div
                  transition={{ delay: 0, duration: 2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <img
                    src="/images/ProfilePic.png"
                    alt="ProfilePic"
                    className="w-[400px] h-[400px] border-4 border-[#212121] dark:border-[#f5f5f5] rounded-tl-[200px] rounded-br-[200px] rounded-bl-[20px]"
                  />
                </motion.div>
              </div>
            </div>
            <motion.div
              transition={{ delay: 0, duration: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-[#E2E2E2] dark:bg-[#3F3F3F] py-10 px-32 rounded-tl-[400px] rounded-br-[100px]"
            >
              <p className="text-[#212121] dark:text-[#f5f5f5] text-2xl font-semibold text-center">
                Creative UI/UX Designer with 2+ years of experience designing intuitive digital experiences for web and mobile applications. Strong in research, prototyping, design systems, and frontend implementation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-[#212121] text-center dark:text-[#f5f5f5] font-bold text-2xl">
            Mobile is on building Have a look in Desktop - About Section
          </h1>
        </div>
      </div>
    </div>
  );
}
