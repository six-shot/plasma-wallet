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
    <div className="h-[140vh] flex justify-center items-center flex-col">
      <div className="flex flex-col items-start">
        <Image src={multichain} alt="multichain" />
        <h4 className="text-[26px] font-sfpro_display_regular leading-[32px] text-white">
          Unlimited support of all EVM Chains with the fastest RPC
        </h4>
        <div className="flex items-center justify-between mt-10 w-[842px] pr-[20%]">
          {chains.map((chain, index) => (
            <Image
              key={index}
              src={chain.icon}
              alt={chain.name}
              className="w-[60px] h-[60px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
