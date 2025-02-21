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
    <div className="h-[120vh] flex justify-center items-center lg:px-0 md:px-10 px-5">
      <motion.div ref={ref} className="flex text-white">
        <div className="flex md:flex-row flex-col items-center">
          <motion.h2
            className="md:text-[56px] text-[24px] font-sfpro_display_bold md:leading-[64px] leading-[107%] lg:pr-10 md:pr-0  md:text-left text-center"
            style={{ opacity, y }}
          >
            Store, Send, <br className="md:block hidden" />
            Receive and <br className="md:block hidden" />
            Trade over
            <br className="md:block hidden" /> 10,000 crypto
            <br className="md:block hidden" /> assets and NFTs
          </motion.h2>
          <motion.div style={{ opacity: imageOpacity, y: imageY }}>
            <Image
              className="lg:w-[490px] md:w-[324px] w-[219px]  md:h-[660px] lg:h-[890px] h-[446px] object-contain"
              src={feature_card}
              alt="feature-card"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
