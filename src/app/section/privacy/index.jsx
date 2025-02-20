"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import privacy from "../../../../public/privacy.png";
import security from "../../../../public/privacy.gif";

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
    <div className="md:h-[140vh] h-full md:py-[140px] py-[100px] max-w-[980px] mx-auto flex justify-between items-center">
      <motion.div ref={ref} className="flex flex-col text-white">
        <div className="flex md:flex-row flex-col md:items-center mb-[140px]">
          <div className="">
            <Image
              className="md:w-[437px] w-full  md:h-[365px] h-[143px] object-contain"
              src={privacy}
              alt="privacy"
            />
          </div>
          <div className="px-5 flex md:justify-normal flex-col justify-center md:items-start items-center">
            <motion.h2
              className="md:text-[96px] text-[48px] font-sfpro_display_bold    md:leading-[107px] leading-[107%] prr "
              style={{ opacity, y }}
            >
              Privacy <br className="md:block hidden"/>
              Matters
            </motion.h2>
            <p className="mt-5 mb-2.5 md:text-[26px] text-[18px] font-sfpro_display_regular leading-[112%] tracking-[1.1px] text-[#cecece] md:w-[437px] w-full md:text-left text-center">
              We don’t collect any information <br /> about users and don’t
              request KYC
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center">
          <div className="px-5 flex md:justify-normal flex-col justify-center md:items-start items-center">
            <motion.h2
              className="md:text-[96px] text-[48px] font-sfpro_display_bold   prr md:leading-[107px] leading-[107%] md:w-[437px] w-full"
              style={{ opacity, y }}
            >
              And <br /> Security <br /> Matters
              <br /> The most
            </motion.h2>
            <p className="mt-5 mb-2.5 md:text-[26px] text-[18px] font-sfpro_display_regular  leading-[112%] tracking-[1.1px] text-[#cecece] md:w-[437px] w-full">
              Your private keys and seed phrase are stored in app's local
              storage and encrypted with your beautiful face
            </p>
          </div>
          <div
            style={{ opacity: imageOpacity, y: imageY }}
            className="px-5 md:w-[490px] w-full  md:h-[462px] h-[450px]"
          >
            <Image className="" src={security} alt="privacy" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
