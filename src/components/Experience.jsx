"use client";
import React from "react";
import { motion } from "framer-motion";
import JsLogo from "./svgimage/JsLogo";
import RustLogo from "./svgimage/RustLogo";
import Python from "./svgimage/Python";
import NextJs from "./svgimage/NextJs";
import ReactNative from "./svgimage/ReactNative";
import TailwindCSS from "./svgimage/TailwindCSS";
import Figma from "./svgimage/Figma";
import Php from "./svgimage/Php";

export default function Experience() {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="min-h-screen flex justify-center items-center">
          <div className="text-[#212121] dark:text-[#f5f5f5]">
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-center"
            >
              <h1 className="font-medium text-2xl md:mr-1">Explore My</h1>
            </motion.div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-center mb-8"
            >
              <h1 className="font-bold text-4xl md:text-7xl">Experience</h1>
            </motion.div>
            <motion.div
              transition={{ delay: 0, duration: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex justify-center w-[950px] mt-16"
            >
              <div className="mx-16">
                <div className="flex justify-center">
                  <JsLogo />
                </div>
                <h1 className="text-2xl font-medium text-center">JavaScript</h1>
                <h1 className="text-sm font-medium text-center">
                  Intermediate
                </h1>
              </div>
              <div className="mx-16">
                <div className="flex justify-center">
                  <RustLogo />
                </div>
                <h1 className="text-2xl font-medium text-center">Rust</h1>
                <h1 className="text-sm font-medium text-center">Basic</h1>
              </div>
              <div className="mx-16">
                <div className="flex justify-center">
                  <Python />
                </div>
                <h1 className="text-2xl font-medium text-center">Python</h1>
                <h1 className="text-sm font-medium text-center">Experienced</h1>
              </div>
              <div className="mx-16">
                <div className="flex justify-center">
                  <NextJs />
                </div>
                <h1 className="text-2xl font-medium text-center">NextJS</h1>
                <h1 className="text-sm font-medium text-center">Experienced</h1>
              </div>
              <div className="mx-16">
                <div className="flex justify-center">
                  <Php />
                </div>
                <h1 className="text-2xl font-medium text-center">Php</h1>
                <h1 className="text-sm font-medium text-center">
                  Intermediate
                </h1>
              </div>
            </motion.div>
            <motion.div
              transition={{ delay: 0, duration: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex justify-center w-[950px] mt-10"
            >
              <div className="mx-16">
                <div className="flex justify-center">
                  <ReactNative />
                </div>
                <h1 className="text-2xl font-medium text-center">
                  React Native
                </h1>
                <h1 className="text-sm font-medium text-center">
                  Intermediate
                </h1>
              </div>
              <div className="mx-16">
                <div className="flex justify-center">
                  <TailwindCSS />
                </div>
                <h1 className="text-2xl font-medium text-center">
                  Tailwind CSS
                </h1>
                <h1 className="text-sm font-medium text-center">Experienced</h1>
              </div>
              <div className="mx-16">
                <div className="flex justify-center">
                  <Figma />
                </div>
                <h1 className="text-2xl font-medium text-center">Figma</h1>
                <h1 className="text-sm font-medium text-center">Experienced</h1>
              </div>
            </motion.div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-center mt-16"
            >
              <h1 className="font-medium text-2xl md:mr-1">AI/ML Concepts</h1>
            </motion.div>
            <motion.div
              transition={{ delay: 0, duration: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-4"
            >
              <div className="flex justify-center items-center">
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Deep Learning
                </h1>
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Machine Learning
                </h1>
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Neural Network
                </h1>
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Computer Vision
                </h1>
              </div>
            </motion.div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-center mt-10"
            >
              <h1 className="font-medium text-2xl md:mr-1">
                Blockchain Concepts
              </h1>
            </motion.div>
            <motion.div
              transition={{ delay: 0, duration: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-4"
            >
              <div className="flex justify-center items-center">
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Smart Contract
                </h1>
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Parity
                </h1>
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Cryptography
                </h1>
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  BaaS
                </h1>
              </div>
            </motion.div>
            <motion.div
              transition={{ delay: 0, duration: 2 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-10"
            >
              <div className="flex justify-center items-center">
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Consensus
                </h1>
                <h1 className="mx-4 text-center font-medium text-xl text px-6 py-2 rounded-full bg-[#E2E2E2] dark:bg-[#3F3F3F]">
                  Distributed ledgers
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-[#212121] text-center dark:text-[#f5f5f5] font-bold text-2xl">
            Mobile is on building Have a look in Desktop - Experience Section
          </h1>
        </div>
      </div>
    </div>
  );
}
