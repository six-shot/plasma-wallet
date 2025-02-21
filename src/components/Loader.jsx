"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoadComplete();
    } else {
      window.addEventListener("load", handleLoadComplete);
      const timeoutId = setTimeout(handleLoadComplete, 5000);

      return () => {
        window.removeEventListener("load", handleLoadComplete);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out">
      <div className="flex flex-col items-center">
        <div className="relative h-20 w-20">
          <div className="absolute animate-ripple-1 h-20 w-20 rounded-full bg-gray-500/40 opacity-0"></div>
          <div className="absolute animate-ripple-2 h-20 w-20 rounded-full bg-gray-500/40 opacity-0"></div>
          <div className="absolute animate-ripple-3 h-20 w-20 rounded-full bg-gray-500/40 opacity-0"></div>
        </div>
        <div className="text-[#646566] mt-6 animate-soft-blink font-sfpro_display_medium">
          Connecting to Web3...
        </div>
      </div>
    </div>
  );
};

export default Preloader;
