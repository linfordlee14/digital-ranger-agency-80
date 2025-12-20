import { ArrowRight, Shield, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-earth-amber/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-terminal-border bg-terminal-bg/50 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
            <span className="font-mono text-sm text-cyber-green">
              // DIGITAL_RANGERS_ACTIVE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Securing Nature</span>
            <br />
            <span className="text-gradient-cyber">through Code.</span>
            <br />
            <span className="text-foreground">Empowering Africa</span>
            <br />
            <span className="text-gradient-earth">through Data.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            We combine cutting-edge cybersecurity with AI-powered conservation technology 
            to protect digital infrastructure and endangered wildlife across Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              variant="cyber"
              size="xl"
              onClick={() => scrollToSection('#mission')}
              className="group"
            >
              <Shield className="w-5 h-5" />
              Our Mission
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="earth-outline"
              size="xl"
              onClick={() => scrollToSection('#projects')}
              className="group"
            >
              <Leaf className="w-5 h-5" />
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-cyber-green mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Threat Monitoring</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-earth-amber mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Species Protected</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-cyber-teal mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Secured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyber-green rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
