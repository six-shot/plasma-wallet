
import Image from "next/image";
import Hero from "./section/hero";
import Feature from "./section/feature";
import FeautureCard from "@/components/ui/cards/FeautureCard";
import MultiChain from "./section/multichain";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <FeautureCard />
      <MultiChain />
    </div>
  );
}
