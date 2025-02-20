"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import privacy from "../../../../public/privacy.gif";

export default function Privacy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  // More delayed values for the image
  const imageOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.25, 0.55], [50, 0]);

  return (
    <div className="h-[140vh] py-[140px] flex justify-center items-center">
      <motion.div ref={ref} className="flex flex-col text-white">
        <div className="flex items-center mb-[140px]">
          <motion.div
            style={{ opacity: imageOpacity, y: imageY }}
            className="px-5"
          >
            <Image
              className="w-[437px]  h-[172px] object-contain"
              src={privacy}
              alt="privacy"
            />
          </motion.div>
          <div className="px-5">
            <motion.h2
              className="text-[96px] font-sfpro_display_bold   prr leading-[107px] "
              style={{ opacity, y }}
            >
              Privacy <br />
              Matters
            </motion.h2>
            <p className="mt-5 mb-2.5 text-[26px] font-sfpro_display_regular leading-[112%] tracking-[1.1px] text-[#cecece] w-[437px]">
              We don’t collect any information <br /> about users and don’t
              request KYC
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="px-5">
            <motion.h2
              className="text-[96px] font-sfpro_display_bold   prr leading-[107px] w-[437px]"
              style={{ opacity, y }}
            >
              And <br /> Security <br /> Matters
              <br /> The most
            </motion.h2>
            <p className="mt-5 mb-2.5 text-[26px] font-sfpro_display_regular leading-[112%] tracking-[1.1px] text-[#cecece] w-[437px]">
              Your private keys and seed phrase are stored in app's local
              storage and encrypted with your beautiful face
            </p>
          </div>
          <motion.div
            style={{ opacity: imageOpacity, y: imageY }}
            className="px-5 w-[490px]  h-[462px]"
          >
            <Image
              className=""
              src={privacy}
              alt="privacy"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
