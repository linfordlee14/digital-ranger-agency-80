import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/[0.05] bg-deep-space">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-bio-green flex items-center justify-center">
              <Shield className="w-5 h-5 text-deep-space" />
            </div>
            <span className="font-semibold text-foreground">
              Linfy Tech Solutions
            </span>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-bio-green" />
            <span>for Africa & the Planet</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Linfy Tech Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
