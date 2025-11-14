import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Tokenomics } from "@/components/Tokenomics";
import { HowToBuy } from "@/components/HowToBuy";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CyberCubes } from "@/components/CyberCubes";

const Index = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <CyberCubes />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 pb-16 relative z-10">
        <Header />
        <Hero />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
