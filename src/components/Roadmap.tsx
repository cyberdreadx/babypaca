import { Card } from "@/components/ui/card";

export const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Liquidity",
      items: ["Token deployment on Keeta L1", "Initial liquidity on Alpaca DEX", "Community onboarding"]
    },
    {
      phase: "Phase 2",
      title: "Growth & Awareness",
      items: ["Marketing campaigns", "Partnerships with Keeta projects", "Meme contests & giveaways"]
    },
    {
      phase: "Phase 3",
      title: "Utility & Expansion",
      items: ["NFT collection drop", "Staking & rewards program", "Cross-chain bridge exploration"]
    }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-2">Roadmap</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Our journey from launch to becoming the top meme on Keeta L1.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((phase, idx) => (
          <Card key={idx} className="p-4 bg-card border-border/30">
            <div className="text-xs uppercase tracking-wider text-accent mb-2">
              {phase.phase}
            </div>
            <h3 className="text-base font-semibold mb-3">{phase.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
