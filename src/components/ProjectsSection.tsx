import { ExternalLink, Shield, Bird, Lock, AlertTriangle, Activity, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';

const ProjectsSection = () => {
  const projects = [
    {
      id: 'rhino-guardians',
      title: 'RhinoGuardians',
      subtitle: 'AI-Powered Anti-Poaching System',
      description: 'An integrated wildlife monitoring platform combining computer vision, acoustic sensors, and predictive analytics to protect endangered Black Rhinos across African reserves.',
      type: 'conservation',
      stats: [
        { label: 'Reserves Protected', value: '12' },
        { label: 'Rhinos Monitored', value: '340+' },
        { label: 'Threat Alerts', value: '2.5K' },
      ],
      features: [
        'Real-time camera trap analysis',
        'Poaching pattern prediction',
        'Ranger coordination system',
        'Population tracking dashboard',
      ],
    },
    {
      id: 'cyber-sentinel',
      title: 'CyberSentinel',
      subtitle: 'Enterprise Security Dashboard',
      description: 'A comprehensive cybersecurity monitoring platform providing real-time threat detection, vulnerability assessment, and incident response for organizations across Africa.',
      type: 'cybersecurity',
      stats: [
        { label: 'Threats Blocked', value: '50K+' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Response Time', value: '<5min' },
      ],
      features: [
        'Real-time threat monitoring',
        'Automated vulnerability scanning',
        'Incident response workflows',
        'Compliance reporting',
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-deep-space-light/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-bio-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-bio-green" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Case Studies
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Impact in <span className="text-gradient-bio">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how our technology is making a real difference in cybersecurity 
            and wildlife conservation.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <GlassCard
              key={project.id}
              className="overflow-hidden"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.05] bg-white/[0.01]">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  project.type === 'conservation' 
                    ? 'bg-bio-green/10' 
                    : 'bg-neon-cyan/10'
                }`}>
                  {project.type === 'conservation' ? (
                    <Bird className="w-4 h-4 text-bio-green" />
                  ) : (
                    <Shield className="w-4 h-4 text-neon-cyan" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {project.type}
                </span>
              </div>

              <div className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Info */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-neon-cyan font-medium mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-bio-green flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="glass-outline" className="group">
                      Learn More
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  {/* Project Dashboard Preview */}
                  <div className="bg-deep-space rounded-xl border border-white/[0.05] p-4">
                    {/* Mini Dashboard Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {project.type === 'conservation' ? 'Wildlife Monitor' : 'Threat Dashboard'}
                      </span>
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-bio-green animate-pulse" />
                        <span className="text-xs text-bio-green font-medium">LIVE</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                          <div className="text-xl lg:text-2xl font-bold text-gradient-bio">
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Mock Visualization */}
                    <div className="space-y-3">
                      {project.type === 'conservation' ? (
                        <>
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
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Southern Corridor</span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                                <div className="w-11/12 h-full bg-gradient-to-r from-neon-cyan to-bio-green rounded-full" />
                              </div>
                              <CheckCircle className="w-3 h-3 text-bio-green" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-bio-green/5 border border-bio-green/10">
                            <Lock className="w-4 h-4 text-bio-green" />
                            <span className="text-foreground">Firewall Status: Active</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-bio-green/5 border border-bio-green/10">
                            <Shield className="w-4 h-4 text-bio-green" />
                            <span className="text-foreground">Intrusion Detection: Online</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm p-3 rounded-lg bg-amber-400/5 border border-amber-400/10">
                            <AlertTriangle className="w-4 h-4 text-amber-400" />
                            <span className="text-foreground">1 Suspicious Activity Flagged</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
