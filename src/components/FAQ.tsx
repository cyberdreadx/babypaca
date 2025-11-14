export const FAQ = () => {
  const faqs = [
    {
      q: "What is Baby Paca?",
      a: "Baby Paca is a meme token on Keeta L1 with a 1B max supply. It's a community-driven project focused on fun, memes, and building a strong herd."
    },
    {
      q: "Where can I trade Baby Paca?",
      a: "Currently, Baby Paca trades exclusively on the Alpaca DEX iOS app. You'll need to bridge assets from Base to Keeta L1 first."
    },
    {
      q: "What is the contract address?",
      a: "The Baby Paca contract on Keeta L1 is: 0xC3F7c75a012f9dc7f0Cfed2Dfe6D88ec30f26C22"
    },
    {
      q: "Is there a team allocation?",
      a: "Yes, 10% of the supply is allocated to the team, with the remaining 90% available for the market and community."
    },
    {
      q: "How do I bridge to Keeta L1?",
      a: "Use the official Keeta bridge to transfer assets from Base L2 to Keeta L1. Then connect your wallet in the Alpaca DEX app to trade."
    },
    {
      q: "Are there any NFTs planned?",
      a: "Yes! We're planning a Baby Paca NFT collection as part of Phase 3 of our roadmap."
    }
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-2">FAQ</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Common questions about Baby Paca and how to get started.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-border/30 pb-4 last:border-0">
            <h3 className="text-base font-semibold mb-1">{faq.q}</h3>
            <p className="text-sm text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
