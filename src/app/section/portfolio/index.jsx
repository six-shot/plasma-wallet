import React from "react";
import Image from "next/image";
import swap from "../../../../public/svg/swap.svg";
import aggregator from "../../../../public/svg/aggregator.svg";
import chains from "../../../../public/chains.png";
export default function Portfolio() {
  const portfolioItems = [
    {
      icon: swap,
      title: "Swap 10,000 assets at the best price on any EVM chain",
      description: "Powerful HyperDEX aggregator",
      bottomImage: aggregator,
      leftImage: chains,
    },
    {
      icon: swap,
      title: "Swap 10,000 assets at the best price on any EVM chain",
      description: "Powerful HyperDEX aggregator",
      bottomImage: aggregator,
    },
    {
      icon: swap,
      title: "Swap 10,000 assets at the best price on any EVM chain",
      description: "Powerful HyperDEX aggregator",
      bottomImage: aggregator,
    },
    {
      icon: swap,
      title: "Swap 10,000 assets at the best price on any EVM chain",
      description: "Powerful HyperDEX aggregator",
      bottomImage: aggregator,
    },
    {
      icon: swap,
      title: "Swap 10,000 assets at the best price on any EVM chain",
      description: "Powerful HyperDEX aggregator",
      bottomImage: aggregator,
    },
    {
      icon: swap,
      title: "Swap 10,000 assets at the best price on any EVM chain",
      description: "Powerful HyperDEX aggregator",
      bottomImage: aggregator,
    },
    {
      icon: swap,
      title: "Swap 10,000 assets at the best price on any EVM chain",
      description: "Powerful HyperDEX aggregator",
      bottomImage: aggregator,
    },
    // Add more items as needed
  ];

  return (
    <div className="py-[140px] bg-[#0c0c0c]">
      <div className="grid grid-cols-2 gap-4 max-w-[980px] mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "col-span-2" : "col-span-1"
            } w-full bg-black rounded-[20px]  ${
              index === 0 ? "flex-row" : "flex-col"
            } flex justify-between items-center text-[#cecece] ${
              index === 0 ? "pt-[60px] h-full" : "h-[503px] p-10"
            }`}
          >
            {index === 0 ? (
              <div className="flex justify-between items-center w-full">
                <div className="w-[50%] flex justify-center">
                  <Image
                    src={item.leftImage}
                    className="w-[332px] h-[520px] object-contain"
                    alt={item.title}
                  />
                </div>

                <div className="flex flex-col justify-center max-w-[50%] p-[35px]">
                  <h2 className="text-[56px] font-sfpro_display_bold leading-[107%] mb-[18px]">
                    Track your asset portfolio and DeFi positions accross
                    multiple chains
                  </h2>
                  <p className="text-[24px] font-sfpro_display_regular leading-[107%]">
                    With a real-time on-chain data and analytics
                  </p>
                </div>
              </div>
            ) : (
              <>
                <Image src={item.icon} alt={item.title} />
                <h4 className="text-[24px] font-sfpro_display_bold text-center mt-5 mb-2.5">
                  {item.title}
                </h4>
                <p className="text-[18px] mb-[30px] leading-[107%]">
                  {item.description}
                </p>
                {item.bottomImage && (
                  <Image src={item.bottomImage} alt="bottom image" />
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <p className="mt-5 text-[#464646] font-sfpro_display_medium text-center">
        The app is supporting 19 languages localizations
      </p>
    </div>
  );
}
