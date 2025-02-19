"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import feature_card from "../../../../public/631e0338341fb57358927f13_app-1-store.png";

export default function FeautureCard() {
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
          <motion.h2
            className="text-[56px] font-sfpro_display_bold leading-[64px] pr-10"
            style={{ opacity, y }}
          >
            Store, Send, <br />
            Receive and <br /> Trade over
            <br /> 10,000 crypto
            <br /> assets and NFTs
          </motion.h2>
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
