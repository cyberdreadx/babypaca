import { Button } from "@/components/ui/button";
import babyPacaLogo from "@/assets/baby-paca-logo.png";

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-12">
      <div className="lg:col-span-3">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          <span className="gradient-text">Baby Paca</span>, the tiny degen of Keeta.
        </h1>
        <p className="text-muted-foreground max-w-xl mb-6 text-base">
          One herd, one chain. Baby Paca lives on Keeta L1 with a 1B max supply and 10% team allocation.
          The rest is for the market, the memes, and the herd.
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          🔔 Trading currently available only through the <strong className="text-foreground">Alpaca DEX iOS app</strong>.
          Bridge from Base → Keeta L1, then trade inside the app.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          <a href="https://apps.apple.com/app/id6754289633" target="_blank" rel="noopener">
            <Button size="lg" className="bg-gradient-to-br from-primary to-pink-400 hover:opacity-90 text-background font-semibold shadow-lg">
              🦙 Download Alpaca DEX
            </Button>
          </a>
          <a href="#how-to-buy">
            <Button size="lg" variant="outline" className="border-border/50 hover:bg-card">
              📚 How to bridge & buy
            </Button>
          </a>
        </div>
        <div className="border border-dashed border-border/50 rounded-xl p-3 max-w-xl bg-background/60 backdrop-blur-sm">
          <div className="text-xs uppercase tracking-wider text-muted-foreground/90 mb-1">
            Contract Address (Keeta L1)
          </div>
          <div className="text-xs text-muted-foreground break-all font-mono">
            0xC3F7c75a012f9dc7f0Cfed2Dfe6D88ec30f26C22
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <div className="relative overflow-hidden rounded-3xl p-6 shadow-2xl" style={{
          background: 'linear-gradient(135deg, hsl(270 50% 20%), hsl(270 60% 8%))',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div className="absolute inset-0 opacity-90 pointer-events-none" style={{
            background: 'radial-gradient(circle at top, rgba(255,132,220,0.16), transparent 60%)'
          }} />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <img 
              src={babyPacaLogo} 
              alt="Baby Paca" 
              className="w-36 h-36 rounded-full border-4 border-secondary/80 bg-black shadow-xl"
            />
            <p className="text-sm text-muted-foreground text-center">
              The cutest degen on the chain
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>Supply: 1B</span>
              <span>•</span>
              <span>Chain: Keeta L1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
