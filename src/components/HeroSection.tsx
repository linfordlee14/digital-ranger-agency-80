import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleBackground from '@/components/ParticleBackground';
import TrustedBy from '@/components/TrustedBy';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space-light via-background to-background" />
      
      {/* Particle Canvas */}
      <ParticleBackground />

      {/* Radial Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-bio-green/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enterprise Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm mb-10 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-bio-green animate-pulse" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Enterprise Security & Conservation Tech
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <span className="text-foreground">Securing the Future of</span>
            <br />
            <span className="text-gradient-bio">Data & Wildlife.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Advanced Cybersecurity, AI Analytics, and Conservation Tech for a resilient world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.45s' }}>
            <Button
              variant="gradient"
              size="xl"
              onClick={() => scrollToSection('#services')}
              className="group"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="glass-outline"
              size="xl"
              onClick={() => scrollToSection('#about')}
              className="group"
            >
              <FileText className="w-5 h-5" />
              Learn About Us
            </Button>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative z-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <TrustedBy />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-neon-cyan rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
