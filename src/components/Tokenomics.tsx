import { Card } from "@/components/ui/card";

export const Tokenomics = () => {
  const items = [
    { title: "Total Supply 💰", value: "1,000,000,000", subtitle: "Fixed forever ♾️" },
    { title: "Team Allocation 🔒", value: "10%", subtitle: "For the builders" },
    { title: "Market Supply 🦙", value: "90%", subtitle: "For the degens" },
    { title: "Chain ⛓️", value: "Keeta L1", subtitle: "No escape 😈" }
  ];

  return (
    <section className="mb-10 w-full overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Tokenomics 📊</h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-5">
        Simple, transparent, degen-approved distribution 🎯
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {items.map((item, idx) => (
          <Card key={idx} className="p-5 bg-card border-border/30 hover:border-accent/50 transition-all hover:scale-105">
            <h3 className="text-sm sm:text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-xl sm:text-2xl font-bold text-primary mb-2">{item.value}</p>
            <span className="text-xs sm:text-sm text-muted-foreground">{item.subtitle}</span>
          </Card>
        ))}
      </div>
    </section>
  );
};
