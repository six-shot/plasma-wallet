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
    <div className="md:py-[140px] py-[100px] bg-[#0c0c0c]">
      <h4 className="md:text-[56px] text-[24px] font-sfpro_display_bold leading-[107%] md:mb-[140px] mb-[60px] pt-5 text-[#cecece] text-center">
        Everything you need is in your 🙏 hands
      </h4>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:max-w-[980px] md:mx-auto w-full px-5">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "md:col-span-2 col-span-1" : "md:col-span-1 col-span-1"
            } w-full bg-black rounded-[20px]  ${
              index === 0 ? "flex-row" : "flex-col"
            } flex justify-between items-center text-[#cecece] ${
              index === 0 ? "pt-[60px] h-full" : "h-[503px] p-10"
            }`}
          >
            {index === 0 ? (
              <div className="flex justify-between md:flex-row flex-col items-center w-full">
                <div className="md:w-[50%] flex justify-center">
                  <Image
                    src={item.leftImage}
                    className="md:w-[332px] w-[219px] md:h-[520px] h-[340px] object-contain"
                    alt={item.title}
                  />
                </div>

                <div className="flex flex-col justify-center md:w-[50%] w-full p-[35px]">
                  <h2 className="md:text-[56px] text-[24px] font-sfpro_display_bold leading-[107%] mb-[18px] md:text-left text-center">
                    Track your asset portfolio and DeFi positions accross
                    multiple chains
                  </h2>
                  <p className="md:text-[24px] text-[16px] md:text-left text-center font-sfpro_display_regular leading-[107%]">
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
      <p className="mt-10 text-[#464646] font-sfpro_display_medium text-center">
        The app is supporting 19 languages localizations
      </p>
    </div>
  );
}
