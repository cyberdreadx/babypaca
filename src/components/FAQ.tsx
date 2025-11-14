export const FAQ = () => {
  const faqs = [
    {
      q: "What is $BPACA?",
      a: "$BPACA (Baby Paca) is a meme token on Keeta L1 with a 1B supply. It's a community-driven project focused on fun, memes, and building a strong herd."
    },
    {
      q: "Where can I trade $BPACA?",
      a: "Currently, $BPACA trades exclusively on the Alpaca DEX iOS app. You'll need to bridge assets from Base to Keeta L1 first."
    },
    {
      q: "What is the contract address?",
      a: "The $BPACA contract on Keeta L1 is: keeta_aabiku5vlchcgsxqwj6o4sryvqucaywcb46advac425biaroqzhibaaj7mt6a6i"
    },
    {
      q: "Is there a team allocation?",
      a: "Yes, 10% of the supply goes to the team for development and operations, with the remaining 90% available for the market and community."
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
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">FAQ 💬</h2>
      <p className="text-sm sm:text-base text-muted-foreground mb-5">
        Got questions? We got answers, anon 🧠
      </p>
      <div className="space-y-5">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-border/30 pb-5 last:border-0">
            <h3 className="text-base sm:text-lg font-bold mb-2">{faq.q}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
