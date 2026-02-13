"use client";
import React from "react";
import { motion } from "framer-motion";
import Vision from "./svgimage/Vision";
import TextRevealByWord from "./animation/TextRevealByWordTextRevealByWord";

export default function MyVision() {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="flex justify-center items-center min-h-screen text-[#212121] dark:text-[#f5f5f5]">
          <div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              <Vision />
            </motion.div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-center"
            >
              <h1 className="font-medium text-2xl md:mr-1">Want to Know My</h1>
            </motion.div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex justify-center mb-8"
            >
              <h1 className="font-bold text-4xl md:text-7xl">Vision</h1>
            </motion.div>
          </div>
          <div>
            <TextRevealByWord text="To create impactful, user-centered products that solve real-world problems through thoughtful design, emerging technologies, and seamless user experiences." />
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-[#212121] text-center dark:text-[#f5f5f5] font-bold text-2xl">
            Mobile is on building Have a look in Desktop - My Vision Section
          </h1>
        </div>
      </div>
    </div>
  );
}
