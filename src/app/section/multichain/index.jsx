import React from "react";
import Image from "next/image";
import multichain from "../../../../public/svg/multichain.svg";
import ethereum from "../../../../public/svg/tokens/eth.svg"
import bnb from "../../../../public/svg/tokens/bnb.svg";
import polygon from "../../../../public/svg/tokens/polygon.svg";
import avalanche from "../../../../public/svg/tokens/avalanche.svg";
import arbitrum from "../../../../public/svg/tokens/arbitrum.svg";
import optimism from "../../../../public/svg/tokens/optimism.svg";
import fantom from "../../../../public/svg/tokens/fantom.svg";
import celo from "../../../../public/svg/tokens/celo.svg";

export default function MultiChain() {
  const chains = [
    { icon: ethereum, name: "Ethereum" },
    { icon: bnb, name: "BNB" },
    { icon: polygon, name: "Polygon" },
    { icon: avalanche, name: "Avalanche" },
    { icon: arbitrum, name: "Arbitrum" },
    { icon: optimism, name: "Optimism" },
    { icon: fantom, name: "Fantom" },
    { icon: celo, name: "Celo" },
  ];

  return (
    <div className="md:h-[140vh] md:py-0 py-[100px] flex justify-center items-center flex-col md:px-0 px-10">
      <div className="flex flex-col items-start">
        <Image className="lg:w-auto md:w-[668px] w-[343px]" src={multichain} alt="multichain" />
        <h4 className="md:text-[26px] text-[18px] font-sfpro_display_regular leading-[32px] text-white md:text-left text-center">
          Unlimited support of all EVM Chains with the fastest RPC
        </h4>
        <div className="flex md:gap-2 lg:gap-0 gap-[15px] md:flex-nowrap flex-wrap items-center md:justify-between  mt-10 lg:w-[842px] lg:pr-[20%]">
          {chains.map((chain, index) => (
            <Image
              key={index}
              src={chain.icon}
              alt={chain.name}
              className="md:w-[60px] w-[36px] md:h-[60px] h-[36px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
