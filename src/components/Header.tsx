import babyPacaLogo from "@/assets/baby-paca-logo.png";

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8">
      <div className="flex items-center gap-3">
        <img 
          src={babyPacaLogo} 
          alt="Baby Paca logo" 
          className="w-14 h-14 rounded-full border-3 border-accent bg-black"
        />
        <div className="font-bold text-lg">
          Baby Paca <span className="text-secondary">on Keeta L1</span>
        </div>
      </div>
      <div className="rounded-full border border-border/30 px-4 py-2 text-xs text-muted-foreground">
        Bridge Base → Keeta · Trade via Alpaca DEX (iOS)
      </div>
    </header>
  );
};
