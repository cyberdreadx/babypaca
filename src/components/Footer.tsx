export const Footer = () => {
  return (
    <footer className="w-full border-t border-border/30 mt-6 pt-4 flex flex-wrap justify-between items-center gap-2 text-xs text-muted-foreground overflow-hidden">
      <div>
        © 2025 Baby Paca · All rights reserved · This is a meme token for entertainment purposes.
      </div>
      <div className="flex gap-3 text-sm">
        <a href="https://twitter.com/babypaca" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
          X
        </a>
        <a href="https://t.me/babypaca" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
          Telegram
        </a>
        <a href="https://discord.gg/babypaca" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
          Discord
        </a>
      </div>
    </footer>
  );
};
