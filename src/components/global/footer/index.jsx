import React from "react";
import one from "../../../../public/svg/one.svg";
import Image from "next/image";
import qrcode from "../../../../public/qrcode.png";
import apple_icon from "../../../../public/svg/apple.svg";
import Link from "next/link";
import discord from "../../../../public/svg/discord.svg";
import twitter from "../../../../public/svg/twitter.svg";
import telegram from "../../../../public/svg/telegram.svg";
import footer from "../../../../public/footer.png";

export default function Footer() {
  return (
    <div className="pt-[140px] flex justify-center items-center flex-col">
      <h4 className="text-[56px] font-sfpro_display_bold leading-[107%] mb-[140px] text-[#cecece] text-center">
        Begin your Crypto 🪐 Journey <br />
        with Plasma Wallet
      </h4>
      <div className="flex justify-between items-center w-[980px] mb-[60px]">
        <div className="flex flex-col items-center">
          <Image src={one} alt="one" />
          <h4 className="mt-5 mb-2.5 text-[26px] font-sfpro_display_regular leading-[30px] text-[#cecece] text-center">
            Download the App
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <Image src={one} alt="one" />
          <h4 className="mt-5 mb-2.5 text-[26px] font-sfpro_display_regular leading-[30px] text-[#cecece] text-center">
            Top up your wallet
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <Image src={one} alt="one" />
          <h4 className="mt-5 mb-2.5 text-[26px] font-sfpro_display_regular leading-[30px] text-[#cecece] text-center">
            Swap and Earn Crypto
          </h4>
        </div>
      </div>
      <Image src={qrcode} className="w-[162px] mb-5" alt="qrcode" />
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
      <div className="mt-[60px] w-[200px] flex justify-between items-center opacity-[.5]">
        <Image src={telegram} alt="telegram" />
        <Image src={discord} alt="discord" />
        <Image src={twitter} alt="twitter" />
      </div>
      <Image src={footer} alt="footer" className="mt-10 w-[972px]" />
      <div className="w-[980px] h-[67px] flex justify-between items-center border-t border-[#86868b4e]">
        <div className="flex justify-between items-center font-sfpro_display_regular ">
          <div className="flex items-center">
            <h4 className="text-[#424245] text-xs leading-[107%] mr-5">
              Copyright © 2048 Plasma Alliance. All rights reserved.
            </h4>
            <h4 className="text-[#86868b] mx-[14px] text-xs leading-[107%]">
              Privacy Policy
            </h4>
            <h4 className="text-[#86868b] mx-[14px] text-xs leading-[107%]">
              Terms of Service
            </h4>
            <h4 className="text-[#86868b] mx-[14px] text-xs leading-[107%]">
              ENS: 0xPlasma.eth
            </h4>
          </div>
        </div>
        <h4 className="text-[#86868b] mx-[14px] text-xs leading-[107%]">
          hello@plasma-wallet.com
        </h4>
      </div>
    </div>
  );
}
