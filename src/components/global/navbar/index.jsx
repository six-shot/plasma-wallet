import Link from "next/link";
import React from "react";
import apple_icon from "../../../../public/svg/apple.svg";
import Image from "next/image";


export default function Navbar() {
  return (
    <div className="w-full h-[3.5rem] flex items-center bg-[#ffffff00] backdrop-blur-[5px] px-[5%] py-[2rem]">
      <div className="flex justify-between items-center w-full md:px-0 px-2.5">
        <Link href="/">
          <div className="flex flex-col">
            <h4 className="text-white text-[24px] font-sfpro_display_bold leading-[28px]">
              Plasma Wallet
            </h4>

            <h5 className="text-[#cecece] text-xs tracking-[1.06px]">
              Powered by 0xPlasma
            </h5>
          </div>
        </Link>
        <div className="md:hidden  flex flex-col items-center gap-[6px] mr-[-.5rem]">
          <div className="w-[24px] h-[2px] bg-white"></div>
          <div className="w-[24px] h-[2px] bg-white"></div>
          <div className="w-[24px] h-[2px] bg-white"></div>
        </div>

        <div className="md:block hidden">
          <Link href="/" className="opacity-[.3]">
            <div className="h-[45px] w-[160px] border border-white flex items-center rounded-[8px] px-2">
              <div className="w-[36px]  flex items-center justify-center">
                <Image src={apple_icon} className="w-[20px]" alt="apple_icon" />
              </div>
              <div className="flex flex-col text-white">
                <h5 className="uppercase text-[9px] tracking-[1.05px] leading-[12px] font-sfpro_display_regular ">
                  {" "}
                  download on the{" "}
                </h5>
                <h5 className=" text-[16px] tracking-[1.05px] leading-[20px] font-sfpro_display_medium">
                  {" "}
                  App store{" "}
                </h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
