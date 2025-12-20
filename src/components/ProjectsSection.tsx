import { ExternalLink, Shield, Bird, BarChart3, Lock, AlertTriangle, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      color: 'earth-amber',
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
      color: 'cyber-green',
    },
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block font-mono text-sm text-cyber-green mb-4 px-3 py-1 rounded border border-terminal-border bg-terminal-bg/50">
            {'>'} PROJECT_SHOWCASE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Impact in <span className="text-gradient-cyber">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how our technology is making a real difference in cybersecurity 
            and wildlife conservation.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="terminal-card overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-6 py-3 border-b border-border bg-terminal-bg/50">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-earth-amber" />
                <div className="w-3 h-3 rounded-full bg-cyber-green" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  {project.id}.project
                </span>
              </div>

              <div className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Info */}
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider mb-4 bg-${project.color}/10 text-${project.color} border border-${project.color}/20`}>
                      {project.type === 'conservation' ? (
                        <Bird className="w-3 h-3" />
                      ) : (
                        <Shield className="w-3 h-3" />
                      )}
                      {project.type}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className={`text-${project.color} font-medium mb-4`}>
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <span className="text-cyber-green">→</span>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="cyber-outline" className="group">
                      Learn More
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  {/* Project Dashboard Preview */}
                  <div className="bg-terminal-bg rounded-lg border border-terminal-border p-4 scanline">
                    {/* Mini Dashboard Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-mono text-xs text-muted-foreground">
                        {project.type === 'conservation' ? 'WILDLIFE_MONITOR' : 'THREAT_DASHBOARD'}
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-cyber-green animate-pulse" />
                        <span className="text-xs text-cyber-green font-mono">LIVE</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="text-center p-3 rounded bg-background/50 border border-border">
                          <div className={`text-xl lg:text-2xl font-mono font-bold text-${project.color}`}>
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
                              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="w-4/5 h-full bg-cyber-green rounded-full" />
                              </div>
                              <span className="text-cyber-green font-mono text-xs">SAFE</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Northern Zone</span>
                            <div className="flex items-center gap-2">
                              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="w-3/5 h-full bg-earth-amber rounded-full" />
                              </div>
                              <span className="text-earth-amber font-mono text-xs">ALERT</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Southern Corridor</span>
                            <div className="flex items-center gap-2">
                              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="w-11/12 h-full bg-cyber-green rounded-full" />
                              </div>
                              <span className="text-cyber-green font-mono text-xs">SAFE</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-3 text-sm p-2 rounded bg-cyber-green/5 border border-cyber-green/20">
                            <Lock className="w-4 h-4 text-cyber-green" />
                            <span className="text-foreground">Firewall Status: Active</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm p-2 rounded bg-cyber-green/5 border border-cyber-green/20">
                            <Shield className="w-4 h-4 text-cyber-green" />
                            <span className="text-foreground">Intrusion Detection: Online</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm p-2 rounded bg-earth-amber/5 border border-earth-amber/20">
                            <AlertTriangle className="w-4 h-4 text-earth-amber" />
                            <span className="text-foreground">1 Suspicious Activity Flagged</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
