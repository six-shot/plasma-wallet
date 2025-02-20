"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Feature() {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: text1Ref,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scroll2 } = useScroll({
    target: text2Ref,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scroll3 } = useScroll({
    target: text3Ref,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scroll4 } = useScroll({
    target: text4Ref,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scroll1, [0, 0.5], [0, 1]);
  const opacity2 = useTransform(scroll2, [0, 0.5], [0, 1]);
  const opacity3 = useTransform(scroll3, [0, 0.5], [0, 1]);
  const opacity4 = useTransform(scroll4, [0, 0.5], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="md:h-[120vh] h-full md:py-0 py-[100px] flex justify-center items-center flex-col"
    >
      <motion.h1
        ref={text1Ref}
        style={{ opacity: opacity1 }}
        className="h1 font-sfpro_display_bold md:text-[124px] text-[36px] md:leading-[132px] leading-[116%]"
      >
        Self-Custody
      </motion.h1>
      <motion.h1
        ref={text2Ref}
        style={{ opacity: opacity2 }}
        className="h1 font-sfpro_display_bold md:text-[124px] text-[36px] md:leading-[132px] leading-[116%]"
      >
        Crypto wallet
      </motion.h1>
      <motion.h1
        ref={text3Ref}
        style={{ opacity: opacity3 }}
        className="h1 font-sfpro_display_bold md:text-[124px] text-[36px] md:leading-[132px] leading-[116%]"
      >
        For DeFi, NFT
      </motion.h1>
      <motion.h1
        ref={text4Ref}
        style={{ opacity: opacity4 }}
        className="h1 font-sfpro_display_bold md:text-[124px] text-[36px] md:leading-[132px] leading-[116%]"
      >
        & Metaverse
      </motion.h1>
    </div>
  );
}
