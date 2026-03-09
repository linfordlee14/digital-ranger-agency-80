import { Shield, Lock, Globe, Activity, AlertTriangle, CheckCircle } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';

const BentoGrid = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-bio-green/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Enterprise Platforms
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient-bio">Platforms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our technology is making a real difference in cybersecurity,
            conservation, and digital transformation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Large Card - RhinoGuardians */}
          <GlassCard className="lg:col-span-2 group p-6 lg:p-8">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-bio-green/10 flex items-center justify-center pulse-glow">
                  <Shield className="w-6 h-6 text-bio-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">RhinoGuardians</h3>
                  <p className="text-sm text-muted-foreground">AI-Powered Conservation</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Advanced wildlife monitoring platform combining computer vision, acoustic sensors, 
                and predictive analytics to protect endangered species across African reserves.
              </p>

              {/* Mini Dashboard */}
              <div className="flex-1 bg-deep-space-light rounded-xl border border-white/[0.05] p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Wildlife Monitor</span>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-bio-green animate-pulse" />
                    <span className="text-xs text-bio-green font-medium">LIVE</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-2xl font-bold text-bio-green">12</div>
                    <div className="text-xs text-muted-foreground">Reserves</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-2xl font-bold text-bio-green">340+</div>
                    <div className="text-xs text-muted-foreground">Rhinos</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-2xl font-bold text-bio-green">2.5K</div>
                    <div className="text-xs text-muted-foreground">Alerts</div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Eastern Reserve</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-neon-cyan to-bio-green rounded-full" />
                      </div>
                      <CheckCircle className="w-3 h-3 text-bio-green" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Northern Zone</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                        <div className="w-3/5 h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
                      </div>
                      <AlertTriangle className="w-3 h-3 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="gradient" className="w-full md:w-auto md:self-start" onClick={scrollToContact}>
                Get in Touch
              </Button>
            </div>
          </GlassCard>

          {/* Medium Card - CyberSentinel with Threat Dashboard */}
          <GlassCard className="group p-6 lg:p-8">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center relative">
                  <Lock className="w-6 h-6 text-neon-cyan" />
                  <div className="absolute inset-0 rounded-xl bg-neon-cyan/20 animate-ping opacity-30" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">CyberSentinel</h3>
                  <p className="text-sm text-muted-foreground">Enterprise Security Dashboard</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                Real-time threat detection, vulnerability assessment, and incident response 
                for organizations across Africa.
              </p>

              {/* Threat Dashboard */}
              <div className="flex-1 bg-deep-space-light rounded-xl border border-white/[0.05] p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Threat Dashboard</span>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-neon-cyan animate-pulse" />
                    <span className="text-xs text-neon-cyan font-medium">LIVE</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm p-2.5 rounded-lg bg-bio-green/5 border border-bio-green/10">
                    <Lock className="w-4 h-4 text-bio-green" />
                    <span className="text-foreground">Firewall: Active</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm p-2.5 rounded-lg bg-bio-green/5 border border-bio-green/10">
                    <Shield className="w-4 h-4 text-bio-green" />
                    <span className="text-foreground">IDS: Online</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm p-2.5 rounded-lg bg-amber-400/5 border border-amber-400/10">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span className="text-foreground">1 Alert Flagged</span>
                  </div>
                </div>
              </div>

              <Button variant="glass" className="w-full" onClick={scrollToContact}>
                Contact Us
              </Button>
            </div>
          </GlassCard>

          {/* Medium Card - Web Development */}
          <GlassCard className="group p-6 lg:p-8 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-bio-green/10 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-foreground" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground mb-4">Modern Digital Solutions</p>

              <p className="text-muted-foreground text-sm mb-6 flex-1">
                Secure, scalable web applications built with modern technologies 
                and best practices.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-bio-green" />
                  <span className="text-foreground">React & TypeScript</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-bio-green" />
                  <span className="text-foreground">Cloud Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-bio-green" />
                  <span className="text-foreground">API Development</span>
                </div>
              </div>

              <Button variant="glass" className="w-full">
                View Projects
              </Button>
            </div>
          </GlassCard>

          {/* Full-width AI Card */}
          <GlassCard className="lg:col-span-3 group p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">Data Analytics & AI</h3>
                <p className="text-muted-foreground">
                  Custom machine learning solutions for threat prediction, pattern recognition, 
                  and automated decision-making across security and conservation domains.
                </p>
              </div>
              <Button variant="glass-outline">
                Explore AI Solutions
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
