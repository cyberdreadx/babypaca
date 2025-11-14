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
      title: "Trade Baby Paca",
      description: "Connect your wallet in the app and swap for $BABYPACA on Keeta L1."
    }
  ];

  return (
    <section id="how-to-buy" className="mb-10">
      <h2 className="text-2xl font-bold mb-2">How to Buy</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Follow these steps to join the herd and get your Baby Paca tokens.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => (
          <Card key={idx} className="p-4 bg-card border-border/30">
            <div className="text-xs uppercase tracking-wider text-accent mb-2">
              {step.number}
            </div>
            <h3 className="text-base font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
