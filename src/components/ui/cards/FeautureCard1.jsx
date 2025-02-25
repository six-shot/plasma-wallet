"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import feature_card from "../../../../public/featurecard1.png";

export default function FeautureCard1() {
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
    <div className="h-[120vh] flex justify-center items-center lg:px-0 md:px-10 px-5 ">
      <motion.div ref={ref} className="flex text-white">
        <div className="flex md:flex-row flex-col items-center">
          <motion.div style={{ opacity: imageOpacity, y: imageY }}>
            <Image
              className="lg:w-[490px] md:w-[324px] w-[219px]  md:h-[660px] lg:h-[890px] h-[446px] object-contain"
              src={feature_card}
              alt="feature-card"
            />
          </motion.div>
          <div className="px-5 flex flex-col md:items-start items-center  md:justify-normal justify-center md:mt-0 mt-5 md:w-[364px] lg:w-auto w-full">
            <motion.h2
              className="lg:text-[96px] md:text-[68px] text-[48px] font-sfpro_display_bold   h11 lg:leading-[107px] leading-[107%] md:text-left text-center md:w-full w-[218px] "
              style={{ opacity, y }}
            >
              Get <br className="md:block hidden" />
              Access <br className="md:block hidden" />
              to 1000s <br className="md:block hidden" /> dApps
            </motion.h2>
            <p className="mt-10 lg:text-[26px] text-[18px] font-sfpro_display_regular leading-[112%] tracking-[1.1px] text-[#cecece] lg:w-[465px] w-full md:text-left text-center">
              Explore the list of 1000s dApps or connect Web3 App with a
              WalletConnect protocol
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
