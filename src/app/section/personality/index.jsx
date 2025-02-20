import React from 'react'
import Image from 'next/image'
import feature_card from "../../../../public/personality.png"
export default function Personality() {
  return (
    <div className="flex justify-center items-center flex-col my-[140px]">
      <h2 className="text-[96px] font-sfpro_display_bold   text-white leading-[107px] py-5 text-center">
        Personality <br /> is Important
      </h2>
      <p className="text-[26px] font-sfpro_display_regular leading-[112%] mb-[100px] text-white">
        Customize your wallet experience
      </p>
      <Image
        className="w-[490px]  h-[890px] object-contain"
        src={feature_card}
        alt="feature-card"
      />
    </div>
  );
}
