import { Card } from "@/components/ui/card";

export const Tokenomics = () => {
  const items = [
    { title: "Total Supply", value: "1,000,000,000", subtitle: "Fixed forever" },
    { title: "Team Allocation", value: "10%", subtitle: "Locked & vested" },
    { title: "Market Supply", value: "90%", subtitle: "For the herd" },
    { title: "Chain", value: "Keeta L1", subtitle: "No bridging out" }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-2">Tokenomics</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Simple, transparent, and fair distribution for the community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <Card key={idx} className="p-4 bg-card border-border/30">
            <h3 className="text-base font-semibold mb-1">{item.title}</h3>
            <p className="text-lg font-bold text-primary mb-1">{item.value}</p>
            <span className="text-xs text-muted-foreground">{item.subtitle}</span>
          </Card>
        ))}
      </div>
    </section>
  );
};
