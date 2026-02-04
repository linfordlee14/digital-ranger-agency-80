import { Shield, Cpu, TreePine, Database } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

const MissionSection = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protecting digital infrastructure with ethical hacking and advanced threat detection.',
    },
    {
      icon: TreePine,
      title: 'Conservation',
      description: 'Leveraging AI to monitor and protect endangered species across African ecosystems.',
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems that predict threats and optimize protection strategies.',
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transforming raw data into actionable insights for security and conservation.',
    },
  ];

  return (
    <section id="mission" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-cyan" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Our Mission
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Where <span className="text-gradient-bio">Digital Security</span> Meets{' '}
            <span className="text-gradient-bio">Wildlife Protection</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Linfy Tech Solutions, we believe that the same technologies protecting our digital world 
            can safeguard our natural one. We're building a bridge between cybersecurity and conservation, 
            creating solutions that defend both bytes and biodiversity.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {pillars.map((pillar, index) => (
            <GlassCard
              key={pillar.title}
              className="p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-bio-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* Mission Statement Card */}
        <GlassCard className="mt-16 p-8 lg:p-12" variant="glow">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Our Vision for Africa
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Africa faces unique challenges in both digital security and wildlife conservation. 
                Poaching syndicates use sophisticated technology. Businesses face increasing cyber threats. 
                We're here to level the playing field.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By combining ethical hacking expertise with conservation science, we create technologies 
                that protect what matters most—from corporate data to the last Black Rhinos.
              </p>
            </div>
            
            <div className="bg-deep-space-light rounded-xl p-6 border border-white/[0.05]">
              <div className="text-muted-foreground mb-4 pb-4 border-b border-white/[0.05]">
                <span className="text-xs uppercase tracking-widest">Core Values</span>
              </div>
              <div className="space-y-3">
                {[
                  'Ethical hacking for good',
                  'AI-powered conservation',
                  'African-led innovation',
                  'Open-source contribution'
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-bio-green" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default MissionSection;
