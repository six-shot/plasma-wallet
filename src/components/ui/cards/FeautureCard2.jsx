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
    <div className="md:h-[120vh] h-full md:py-0 py-[100px] flex justify-center items-center md:px-0 px-5">
      <motion.div ref={ref} className="flex text-white">
        <div className="flex md:flex-row flex-col items-center">
          <div className="pr-10">
            <motion.h2
              className="md:text-[96px] text-[48px] font-sfpro_display_bold   h11 md:leading-[107px] leading-[107%] md:text-left text-center "
              style={{ opacity, y }}
            >
              All DEXes <br />
              in your <br />
              pockets
            </motion.h2>
            <p className="mt-10 md:text-[26px] text-[18px] font-sfpro_display_regular leading-[112%] tracking-[1.1px] text-[#cecece] md:w-[465px] w-full md:text-left text-center">
              Explore the list of 1000s dApps or connect Web3 App with a
              WalletConnect protocol
            </p>
            <div
              className="w-[396px] flex flex-col justify-between gap-6
            items-center mr-[10%] mt-10
            "
            >
              <div className="flex justify-between w-full  md:px-0 px-10">
                <Image src={Logos1} className="md:w-auto w-[50px]" alt="logo" />
                <Image src={Logos2} className="md:w-auto w-[50px]" alt="logo" />
                <Image src={Logos3} className="md:w-auto w-[50px]" alt="logo" />
                <Image src={Logos4} className="md:w-auto w-[50px]" alt="logo" />
                <Image src={Logos5} className="md:w-auto w-[50px]" alt="logo" />
              </div>
              <div className="flex justify-between w-full md:px-0 px-10">
                <Image src={Logos6} className="md:w-auto w-[50px]" alt="logo" />
                <Image src={Logos7} className="md:w-auto w-[50px]" alt="logo" />
                <Image src={Logos8} className="md:w-auto w-[50px]" alt="logo" />
                <Image src={Logos9} className="md:w-auto w-[50px]" alt="logo" />
                <Image src={Logos10} className="md:w-auto w-[50px]" alt="logo" />
              </div>
            </div>
          </div>
          <motion.div style={{ opacity: imageOpacity, y: imageY }} className="md:mt-0 mt-10">
            <Image
              className="md:w-[490px] w-[219px]  md:h-[890px] h-[446px] object-contain"
              src={feature_card}
              alt="feature-card"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
