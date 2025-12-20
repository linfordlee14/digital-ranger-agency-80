import { Shield, Cpu, TreePine, Database } from 'lucide-react';

const MissionSection = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protecting digital infrastructure with ethical hacking and advanced threat detection.',
      color: 'cyber-green',
    },
    {
      icon: TreePine,
      title: 'Conservation',
      description: 'Leveraging AI to monitor and protect endangered species across African ecosystems.',
      color: 'earth-amber',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems that predict threats and optimize protection strategies.',
      color: 'cyber-teal',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transforming raw data into actionable insights for security and conservation.',
      color: 'earth-sand',
    },
  ];

  return (
    <section id="mission" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block font-mono text-sm text-cyber-green mb-4 px-3 py-1 rounded border border-terminal-border bg-terminal-bg/50">
            {'>'} MISSION_STATEMENT
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Where <span className="text-gradient-cyber">Digital Security</span> Meets{' '}
            <span className="text-gradient-earth">Wildlife Protection</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At Linfy Tech Solutions, we believe that the same technologies protecting our digital world 
            can safeguard our natural one. We're building a bridge between cybersecurity and conservation, 
            creating solutions that defend both bytes and biodiversity.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="terminal-card p-6 group hover:border-cyber-green/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-${pillar.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className={`w-6 h-6 text-${pillar.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement Card */}
        <div className="mt-16 terminal-card p-8 lg:p-12 border-glow">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-earth-amber" />
            <div className="w-3 h-3 rounded-full bg-cyber-green" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">mission.md</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-cyber-green font-mono">$</span> Our Vision for Africa
              </h3>
              <p className="text-muted-foreground mb-4">
                Africa faces unique challenges in both digital security and wildlife conservation. 
                Poaching syndicates use sophisticated technology. Businesses face increasing cyber threats. 
                We're here to level the playing field.
              </p>
              <p className="text-muted-foreground">
                By combining ethical hacking expertise with conservation science, we create technologies 
                that protect what matters most—from corporate data to the last Black Rhinos.
              </p>
            </div>
            
            <div className="font-mono text-sm bg-terminal-bg rounded-lg p-6 border border-terminal-border scanline">
              <div className="text-muted-foreground mb-2">
                <span className="text-cyber-green">linfy@rangers</span>:<span className="text-cyber-teal">~</span>$ cat mission.txt
              </div>
              <div className="text-foreground space-y-1">
                <p className="text-earth-amber"># Core Values</p>
                <p>→ Ethical hacking for good</p>
                <p>→ AI-powered conservation</p>
                <p>→ African-led innovation</p>
                <p>→ Open-source contribution</p>
                <p className="text-cyber-green typing-cursor">_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
