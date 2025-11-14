import babyPacaLogo from "@/assets/baby-paca-logo.png";

export const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
      <div className="flex items-center gap-3">
        <img 
          src={babyPacaLogo} 
          alt="Baby Paca logo" 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-3 border-accent"
          style={{ mixBlendMode: 'lighten' }}
        />
        <div className="font-bold text-base sm:text-lg">
          Baby Paca <span className="text-secondary">on Keeta L1</span> 🦙
        </div>
      </div>
      <div className="rounded-full border border-accent/30 bg-card/50 px-4 py-2 text-xs sm:text-sm text-muted-foreground">
        Bridge Base → Keeta · Alpaca DEX 📱
      </div>
    </header>
  );
};
