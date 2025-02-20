"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import feature_card from "../../../../public/featurecard1.png";
import Logos1 from "../../../../public/svg/tokens/Logos-1.svg"
import Logos2 from "../../../../public/svg/tokens/Logos-2.svg"
import Logos3 from "../../../../public/svg/tokens/Logos-3.svg"
import Logos4 from "../../../../public/svg/tokens/Logos-4.svg"
import Logos5 from "../../../../public/svg/tokens/Logos-5.svg" 
import Logos6 from "../../../../public/svg/tokens/Logos-6.svg"
import Logos7 from "../../../../public/svg/tokens/Logos-7.svg"
import Logos8 from "../../../../public/svg/tokens/Logos-77.svg"
import Logos9 from "../../../../public/svg/tokens/logos.svg"
import Logos10 from "../../../../public/svg/tokens/Logos3.svg"
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
              in your <br />
              pockets
            </motion.h2>
            <p className="mt-10 text-[26px] font-sfpro_display_regular leading-[112%] tracking-[1.1px] text-[#cecece] w-[465px]">
              Explore the list of 1000s dApps or connect Web3 App with a
              WalletConnect protocol
            </p>
            <div
              className="w-[396px] flex flex-col justify-between gap-6
            items-center mr-[10%] mt-10
            "
            >
              <div className="flex justify-between w-full">
                <Image src={Logos1} alt="logo" />
                <Image src={Logos2} alt="logo" />
                <Image src={Logos3} alt="logo" />
                <Image src={Logos4} alt="logo" />
                <Image src={Logos5} alt="logo" />
              </div>
              <div className="flex justify-between w-full">
                <Image src={Logos6} alt="logo" />
                <Image src={Logos7} alt="logo" />
                <Image src={Logos8} alt="logo" />
                <Image src={Logos9} alt="logo" />
                <Image src={Logos10} alt="logo" />
              </div>
            </div>
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
