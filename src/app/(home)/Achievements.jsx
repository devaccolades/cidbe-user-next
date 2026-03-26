"use client";

import React from "react";
import { Image } from "antd";
import Link from "next/link";
import { motion } from "framer-motion";

const Achievements = ({ achievements = [] }) => {
  console.log("check", achievements);

  return (
    <section className="containers pb-[40px] lg:pb-[80px]">
      {/* Heading */}
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[20px] lg:text-[32px] font-[clash-display-medium] text-[--secondary-cl]">
          Achievements
        </h2>

        <Link
          href="/achievements"
          className="text-md font-bold text-[var(--primary-cl)] hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
        {achievements.slice(0, 4).map((achi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-[16px] w-full shadow-xl bg-white overflow-hidden flex flex-col"
          >
            {/* Image Section (Fixed) */}
            <div className="w-full h-[220px] overflow-hidden">
              <Image
                src={achi?.image}
                alt={achi?.image_alt}
                preview={false}
                className="w-full h-full object-cover !block"
              />
            </div>

            {/* Content Section (Fixed) */}
            <div className="p-[12px] h-[100px] flex flex-col justify-between">
              <p className="text-[10px] bg-gray-400 w-fit px-2 py-1 rounded-md text-white">
                28/03/2024
              </p>

              <p className="text-[14px] text-[#483C32] line-clamp-2">
                {achi?.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
