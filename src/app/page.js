
import Image from "next/image";
import Hero from "./section/hero";
import Feature from "./section/feature";
import FeautureCard from "@/components/ui/cards/FeautureCard";
import MultiChain from "./section/multichain";
import FeautureCard1 from "@/components/ui/cards/FeautureCard1";
import FeautureCard2 from "@/components/ui/cards/FeautureCard2";
import FeautureCard3 from "@/components/ui/cards/FeautureCard3";
import Personality from "./section/personality";
import Privacy from "./section/privacy";
import Portfolio from "./section/portfolio";
import Footer from "@/components/global/footer";
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
      <Personality />

      <Privacy />
      


      <Portfolio />
      <Footer />
    </div>
  );
}
