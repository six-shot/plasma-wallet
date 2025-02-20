import React from 'react'
import Image from 'next/image'
import feature_card from "../../../../public/personality.png"
export default function Personality() {
  return (
    <div className="flex justify-center items-center flex-col md:my-[140px] my-[100px]">
      <h2 className="md:text-[96px] text-[48px] font-sfpro_display_bold   text-white md:leading-[107px] leading-[107%] py-5 text-center ">
        Personality <br className="md:block hidden"/> is Important
      </h2>
      <p className="md:text-[26px] text-[18px] font-sfpro_display_regular leading-[112%] mb-[100px] text-white">
        Customize your wallet experience
      </p>
      <Image
        className="md:w-[490px] w-[219px]  md:h-[890px] h-[446px] object-contain"
        src={feature_card}
        alt="feature-card"
      />
    </div>
  );
}
