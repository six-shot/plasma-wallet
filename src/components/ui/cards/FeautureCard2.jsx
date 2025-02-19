"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import feature_card from "../../../../public/featurecard1.png";

export default function FeautureCard2() {
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
    <div className="h-[120vh] flex justify-center items-center">
      <motion.div ref={ref} className="flex text-white">
        <div className="flex items-center">
          <div className="pr-10">
            <motion.h2
              className="text-[96px] font-sfpro_display_bold   h11 leading-[107px] "
              style={{ opacity, y }}
            >
              All DEXes <br />
              in your  <br />
                pockets
            </motion.h2>
            <p className="mt-10 text-[26px] font-sfpro_display_regular leading-[112%] tracking-[1.1px] text-[#cecece] w-[465px]">
              Explore the list of 1000s dApps or connect Web3 App with a
              WalletConnect protocol
            </p>
          </div>
          <motion.div style={{ opacity: imageOpacity, y: imageY }}>
            <Image
              className="w-[490px]  h-[890px] object-contain"
              src={feature_card}
              alt="feature-card"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
