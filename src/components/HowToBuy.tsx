import { Card } from "@/components/ui/card";

export const HowToBuy = () => {
  const steps = [
    {
      number: "Step 1",
      title: "Get tokens on Base",
      description: "Buy ETH or stablecoins on Base L2 using any exchange or onramp."
    },
    {
      number: "Step 2",
      title: "Bridge to Keeta L1",
      description: "Use the official Keeta bridge to move your assets from Base to Keeta L1."
    },
    {
      number: "Step 3",
      title: "Download Alpaca DEX",
      description: "Install the Alpaca DEX app from the iOS App Store (iPhone required)."
    },
    {
      number: "Step 4",
      title: "Trade $BPACA",
      description: "Connect your wallet in the app and swap for $BPACA on Keeta L1."
    }
  ];

  return (
    <section id="how-to-buy" className="mb-10 scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">How to Buy 💸</h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-5">
        4 easy steps to join the degen herd 🦙
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => (
          <Card key={idx} className="p-5 bg-card border-border/30 hover:border-accent/50 transition-all">
            <div className="text-xs sm:text-sm uppercase tracking-wider text-accent mb-2 font-bold">
              {step.number}
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-3">{step.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
