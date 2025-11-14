import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Tokenomics } from "@/components/Tokenomics";
import { HowToBuy } from "@/components/HowToBuy";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 pb-16">
      <Header />
      <Hero />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
