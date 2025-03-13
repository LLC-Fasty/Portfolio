"use client";
import React from "react";
import ContactUsImg from "./svgimage/ContactUsImg";
import { motion, useTransform, useScroll } from "framer-motion";

export default function ContactUs() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  return (
    <div>
      <div className="hidden sm:block">
        <motion.div style={{ scale }}>
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <div className="flex justify-center items-center min-h-screen text-[#212121] dark:text-[#f5f5f5]">
            <div className="mr-6">
              <div>
                <motion.div
                  transition={{ delay: 0 }}
                  initial={{ x: -300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="flex justify-start"
                >
                  <h1 className="font-medium text-2xl md:ml-1">
                    Want to Reach Out
                  </h1>
                </motion.div>
                <motion.div
                  transition={{ delay: 0 }}
                  initial={{ x: -300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="flex justify-start"
                >
                  <h1 className="font-bold text-4xl md:text-7xl">Contact Me</h1>
                </motion.div>
              </div>
              <motion.div
                transition={{ delay: 0 }}
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <ContactUsImg />
              </motion.div>
            </div>
            <motion.div
              transition={{ delay: 0 }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="ml-6"
            >
              <div className="flex justify-center items-center h-[450px] w-[560px] bg-[#212121] dark:bg-[#f5f5f5] rounded-[100px]">
                <div>
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className="w-[60px] mx-8 h-[60px] flex justify-center items-center bg-[#3F3F3F] dark:bg-[#e2e2e2] rounded-full border-4 border-[#f5f5f5] dark:border-[#212121]"
                    >
                      <svg
                        width="40"
                        height="30"
                        className="text-[#f5f5f5] dark:text-[#212121]"
                        viewBox="0 0 40 30"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M39.5616 2.24902L28.3684 12.8256L39.5616 27.7488C39.8333 27.2054 40 26.6038 40 25.9554V4.04237C39.9999 3.39573 39.8316 2.79238 39.5616 2.24902Z" />
                        <path d="M21.9631 14.2948L36.9446 0.136639C36.6263 0.0549995 36.2996 0 35.9563 0H4.04332C3.67332 0 3.32332 0.0649994 2.98333 0.158358L18.0565 14.3132C19.1532 15.3131 20.8432 15.3131 21.9631 14.2948Z" />
                        <path d="M24.2277 16.7399C23.0161 17.8432 21.5028 18.3949 19.9911 18.3949C18.4895 18.3949 16.9895 17.8499 15.7945 16.7615L14.0696 15.1415L3.1913 29.9047C3.4663 29.9647 3.74965 29.9997 4.04293 29.9997H35.956C36.3093 29.9997 36.6476 29.9397 36.9743 29.8531L25.9311 15.1299L24.2277 16.7399Z" />
                        <path d="M0.404996 2.3099C0.153358 2.83661 0 3.41989 0 4.0416V25.9564C0 26.6664 0.199998 27.3264 0.523354 27.9064L11.6232 12.8449L0.404996 2.3099Z" />
                      </svg>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className="w-[60px] mx-8 h-[60px] flex justify-center items-center bg-[#3F3F3F] dark:bg-[#e2e2e2] rounded-full border-4 border-[#f5f5f5] dark:border-[#212121]"
                    >
                      <svg
                        width="30"
                        height="30"
                        className="text-[#f5f5f5] dark:text-[#212121]"
                        viewBox="0 0 30 30"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.98323 9.61853H0.960678C0.693387 9.61853 0.476807 9.83521 0.476807 10.1024V29.4503C0.476807 29.7176 0.693387 29.9341 0.960678 29.9341H6.98323C7.25052 29.9341 7.4671 29.7176 7.4671 29.4503V10.1024C7.4671 9.83521 7.25052 9.61853 6.98323 9.61853Z" />
                        <path d="M3.97413 0C1.78277 0 0 1.78084 0 3.96977C0 6.15968 1.78277 7.94119 3.97413 7.94119C6.16374 7.94119 7.94507 6.15958 7.94507 3.96977C7.94516 1.78084 6.16374 0 3.97413 0Z" />
                        <path d="M22.302 9.13733C19.8831 9.13733 18.095 10.1772 17.0105 11.3587V10.1021C17.0105 9.83488 16.7939 9.6182 16.5266 9.6182H10.759C10.4917 9.6182 10.2751 9.83488 10.2751 10.1021V29.4499C10.2751 29.7172 10.4917 29.9338 10.759 29.9338H16.7684C17.0356 29.9338 17.2522 29.7172 17.2522 29.4499V19.8772C17.2522 16.6515 18.1284 15.3947 20.3771 15.3947C22.826 15.3947 23.0206 17.4094 23.0206 20.0432V29.45C23.0206 29.7173 23.2372 29.9339 23.5045 29.9339H29.5161C29.7834 29.9339 30 29.7173 30 29.45V18.8374C30 14.0408 29.0854 9.13733 22.302 9.13733Z" />
                      </svg>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className="w-[60px] mx-8 h-[60px] flex justify-center items-center bg-[#3F3F3F] dark:bg-[#e2e2e2] rounded-full border-4 border-[#f5f5f5] dark:border-[#212121]"
                    >
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 0H30C32.75 0 35 2.25 35 5V30C35 32.75 32.75 35 30 35H5C2.25 35 0 32.75 0 30V5C0 2.25 2.25 0 5 0Z"
                          className="text-[#f5f5f5] dark:text-[#212121]"
                        />
                        <path
                          d="M24.125 9.62506C23.375 9.62506 22.625 10.2501 22.625 11.1251C22.625 12.0001 23.25 12.6251 24.125 12.6251C25 12.6251 25.625 12.0001 25.625 11.1251C25.5 10.2501 24.875 9.62506 24.125 9.62506Z"
                          className="text-[#212121] dark:text-[#f5f5f5]"
                        />
                        <path
                          d="M17.5 11.5002C14.125 11.5002 11.375 14.2502 11.375 17.6252C11.375 21.0002 14.125 23.7502 17.5 23.7502C20.875 23.7502 23.625 21.0002 23.625 17.6252C23.75 14.2502 21 11.5002 17.5 11.5002ZM17.5 21.6252C15.375 21.6252 13.5 19.8752 13.5 17.6252C13.5 15.5002 15.25 13.6252 17.5 13.6252C19.625 13.6252 21.5 15.3752 21.5 17.6252C21.5 19.8752 19.75 21.6252 17.5 21.6252Z"
                          className="text-[#212121] dark:text-[#f5f5f5]"
                        />
                        <path
                          d="M22.5 5.00006H12.5C8.37498 5.00006 4.99998 8.37506 4.99998 12.5001V22.5001C4.99998 26.6251 8.37498 30.0001 12.5 30.0001H22.5C26.625 30.0001 30 26.6251 30 22.5001V12.5001C30 8.37506 26.625 5.00006 22.5 5.00006ZM27.625 22.5001C27.625 25.3751 25.25 27.6251 22.5 27.6251H12.5C9.62498 27.6251 7.37498 25.2501 7.37498 22.5001V12.5001C7.37498 9.62506 9.74998 7.37506 12.5 7.37506H22.5C25.375 7.37506 27.625 9.75006 27.625 12.5001V22.5001Z"
                          className="text-[#212121] dark:text-[#f5f5f5]"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="mt-20">
                    <form action="">
                      <div className="flex justify-between items-center">
                        <div className="mr-2">
                          <input
                            type="email"
                            placeholder="Enter the Mail"
                            className="text-2xl text-[#212121] dark:text-[#f5f5f5] bg-[#E2E2E2] dark:bg-[#3F3F3F] placeholder:text-[#212121] dark:placeholder:text-[#f5f5f5] py-3 text-center font-medium rounded-full w-[280px]"
                          />
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.8 }}
                          className="ml-2"
                        >
                          <button className="text-2xl text-[#f5f5f5] dark:text-[#212121] bg-[#3f3f3f] dark:bg-[#E2E2E2] px-4 py-2 text-center font-medium rounded-full border-4 border-[#f5f5f5] dark:border-[#212121]">
                            Subscribe
                          </button>
                        </motion.div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="block sm:hidden">
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-[#212121] text-center dark:text-[#f5f5f5] font-bold text-2xl">
            Mobile is on building Have a look in Desktop - Contact Us Section
          </h1>
        </div>
      </div>
    </div>
  );
}
