import Navbar from "@/components/global/navbar";
import React from "react";
import product_image from "../../../../public/svg/product-of-day.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full md:h-screen h-[80vh] relative">

      <div className="fixed top-0 left-0 w-full z-[50]">
        <Navbar />
      </div>
      <iframe
        src="https://my.spline.design/iphone13copy-6395b6786014d4aff285cbc2d6c9db5e/"
        frameBorder="0"
        width="100%"
        height="100%"
        className="relative z-0 md:block hidden"
      ></iframe>
      <div className="absolute w-full  hidden   md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:flex justify-center items-center flex-col">
        <Image
          src={product_image}
          alt="product_image"
          className="w-[250px] h-[57px]"
        />
        <h1 className="text-white font-sfpro_display_bold text-[156px] leading-[164px] mt-5 mb-2.5">
          Pro Wallet
        </h1>
        <p className="text-[18px] leading-[18px] font-sfpro_display_regular text-[#cecece] ">
          Download on the{" "}
          <span className="font-sfpro_display_medium text-[#be5efa]">
            App Store
          </span>
        </p>
      </div>
      <div className="absolute  flex  top-[4rem] md:hidden w-full justify-center  flex-col">
        <div className="pb-[100px] flex flex-col items-center">
          <Image
            src={product_image}
            alt="product_image"
            className="w-[250px] h-[57px]"
          />
          <h1 className="text-white font-sfpro_display_bold text-[64px] leading-[72px] mt-5 mb-2.5">
            Pro Wallet
          </h1>
          <p className="text-[18px] leading-[18px] font-sfpro_display_regular text-[#cecece] ">
            Download on the{" "}
            <span className="font-sfpro_display_medium text-[#be5efa]">
              App Store
            </span>
          </p>
        </div>
        <div className="mt-[100px]  h-[250px] "></div>
      </div>
    </div>
  );
}
