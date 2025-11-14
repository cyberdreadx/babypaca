import { Button } from "@/components/ui/button";
import babyPacaLogo from "@/assets/baby-paca-logo.png";

export const Hero = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-12 overflow-hidden">
      <div className="lg:col-span-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          <span className="gradient-text">$BPACA</span> 🦙✨<br />
          <span className="text-2xl sm:text-3xl md:text-4xl">The tiniest degen on Keeta 🚀</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mb-6 text-base sm:text-lg leading-relaxed">
          One herd, one chain. 1B supply, 10% team, 90% for the degens. 
          No rugs, just vibes 💎🙌
        </p>
        <p className="text-sm sm:text-base text-accent font-semibold mb-4 bg-card/50 p-3 rounded-lg border border-accent/30">
          ⚡ Trading ONLY on <strong className="text-foreground">Alpaca DEX iOS app</strong>
          <br className="sm:hidden" /> Bridge Base → Keeta L1 first! 🌉
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <a href="https://apps.apple.com/app/id6754289633" target="_blank" rel="noopener" className="w-full sm:w-auto">
            <Button size="lg" className="w-full bg-gradient-to-br from-primary to-pink-400 hover:opacity-90 text-background font-bold shadow-lg text-base sm:text-lg py-6">
              🦙 Download Alpaca DEX
            </Button>
          </a>
          <a href="#how-to-buy" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full border-border/50 hover:bg-card font-semibold text-base sm:text-lg py-6">
              📚 How to bridge & buy
            </Button>
          </a>
        </div>
        <div className="border border-dashed border-accent/50 rounded-xl p-4 w-full bg-card/80 backdrop-blur-sm">
          <div className="text-xs sm:text-sm uppercase tracking-wider text-accent font-bold mb-2">
            📋 Contract Address (Keeta L1)
          </div>
          <div className="text-xs sm:text-sm text-foreground break-all font-mono bg-background/50 p-2 rounded overflow-hidden">
            keeta_aabiku5vlchcgsxqwj6o4sryvqucaywcb46advac425biaroqzhibaaj7mt6a6i
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-2 w-full">
        <div className="relative overflow-hidden rounded-3xl p-6 shadow-2xl w-full" style={{
          background: 'linear-gradient(135deg, hsl(270 50% 20%), hsl(270 60% 8%))',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div className="absolute inset-0 opacity-90 pointer-events-none" style={{
            background: 'radial-gradient(circle at top, rgba(255,132,220,0.16), transparent 60%)'
          }} />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="relative">
              <img 
                src={babyPacaLogo} 
                alt="Baby Paca" 
                className="w-40 h-40 sm:w-44 sm:h-44 rounded-full border-4 border-secondary/80 shadow-2xl"
                style={{ mixBlendMode: 'lighten' }}
              />
              <div className="absolute -top-2 -right-2 text-3xl animate-bounce">✨</div>
              <div className="absolute -bottom-2 -left-2 text-3xl animate-bounce delay-150">🚀</div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground text-center font-semibold">
              The cutest degen on the chain 💜
            </p>
            <div className="flex gap-3 text-xs sm:text-sm text-muted-foreground font-mono bg-background/30 px-4 py-2 rounded-full">
              <span>Supply: 1B 💎</span>
              <span>•</span>
              <span>Keeta L1 ⛓️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
