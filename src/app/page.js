
import Image from "next/image";
import Hero from "./section/hero";
import Feature from "./section/feature";
import FeautureCard from "@/components/ui/cards/FeautureCard";
import MultiChain from "./section/multichain";
import FeautureCard1 from "@/components/ui/cards/FeautureCard1";
import FeautureCard2 from "@/components/ui/cards/FeautureCard2";
import FeautureCard3 from "@/components/ui/cards/FeautureCard3";
export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <FeautureCard />
      <MultiChain />
      <FeautureCard1 />
      <FeautureCard2 />
      <FeautureCard3 />
    </div>
  );
}
