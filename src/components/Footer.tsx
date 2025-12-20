import { Shield, Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-terminal-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="w-6 h-6 text-cyber-green" />
              <Terminal className="w-3 h-3 text-earth-amber absolute -bottom-1 -right-1" />
            </div>
            <span className="font-mono font-bold text-foreground">
              LINFY<span className="text-cyber-green">_</span>TECH
            </span>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive" />
            <span>for Africa & the Planet</span>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-cyber-green">{'>'}</span> © {currentYear} Linfy Tech Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
