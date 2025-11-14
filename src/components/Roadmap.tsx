import { Card } from "@/components/ui/card";

export const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1 🚀",
      title: "Launch & Liquidity",
      items: ["Token deployment on Keeta L1 ⛓️", "Initial liquidity on Alpaca DEX 💧", "Community onboarding 🦙"]
    },
    {
      phase: "Phase 2 📈",
      title: "Growth & Vibes",
      items: ["Marketing campaigns 📢", "Partnerships with Keeta projects 🤝", "Meme contests & giveaways 🎁"]
    },
    {
      phase: "Phase 3 🎵",
      title: "Music & Expansion",
      items: ["Create Baby Paca music on rougee.app 🎶", "Airdrop to song token holders 🪂", "NFT collection drop 🖼️", "Staking & rewards 💎"]
    }
  ];

  return (
    <section className="mb-10 w-full overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Roadmap 🗺️</h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-5">
        From launch to moon mission - the Baby Paca journey 🌙
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {phases.map((phase, idx) => (
          <Card key={idx} className="p-5 bg-card border-border/30 hover:border-accent/50 transition-all">
            <div className="text-xs sm:text-sm uppercase tracking-wider text-accent mb-2 font-bold">
              {phase.phase}
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-4">{phase.title}</h3>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 text-lg">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
