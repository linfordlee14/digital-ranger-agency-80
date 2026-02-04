import { Github, Linkedin, Shield, TreePine, Database, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';

const AboutSection = () => {
  const skills = [
    { icon: Shield, label: 'Ethical Hacking' },
    { icon: Database, label: 'Data Analytics' },
    { icon: TreePine, label: 'Conservation Tech' },
    { icon: Code, label: 'Full-Stack Dev' },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started exploring cybersecurity and ethical hacking while studying computer science.',
    },
    {
      year: '2020',
      title: 'Conservation Meets Tech',
      description: 'First collaboration with wildlife reserves, applying data analytics to conservation challenges.',
    },
    {
      year: '2022',
      title: 'Linfy Tech Solutions Founded',
      description: 'Officially launched the agency, combining cybersecurity expertise with conservation technology.',
    },
    {
      year: '2024',
      title: 'RhinoGuardians Launch',
      description: 'Deployed the flagship AI anti-poaching system across multiple African reserves.',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-bio-green/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-cyan" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              About Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the <span className="text-gradient-bio">Founder</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Founder Profile */}
          <GlassCard className="p-6 lg:p-8">
            {/* Profile Header */}
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-bio-green/20 border border-white/[0.1] flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-gradient-bio">LM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Linford Musiyambodza</h3>
                <p className="text-neon-cyan text-sm mb-4">Founder & Lead Engineer</p>
                <div className="flex gap-2">
                  <Button variant="glass" size="sm" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="glass" size="sm" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground mb-6 leading-relaxed">
              <p>
                A white-hat hacker and data analyst with a passion for both digital security and 
                African wildlife conservation. Linford combines technical expertise with a deep 
                commitment to protecting what matters.
              </p>
              <p>
                Based in Africa, he founded Linfy Tech Solutions to prove that technology can be 
                a force for good—defending businesses from cyber threats while simultaneously 
                protecting endangered species from extinction.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                >
                  <skill.icon className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Journey Timeline */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-foreground">The Journey</h3>
            <div className="space-y-6">
              {timeline.map((event, index) => (
                <div key={event.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-deep-space-light border border-white/[0.1] flex items-center justify-center text-sm font-semibold text-neon-cyan">
                      '{event.year.slice(2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-white/[0.1] to-transparent mt-3" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <GlassCard className="mt-16 p-6 lg:p-8">
          <h3 className="text-xl font-bold mb-4 text-foreground">Research & Open Source</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We believe in transparency and collaboration. Our work is built on open-source 
            foundations and contributes back to the community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Conservation AI Tools',
                description: 'Leveraging SMART, Wildlife Insights, and custom ML models for species identification.'
              },
              {
                title: 'Cybersecurity Standards',
                description: 'Following NIST, OWASP, and ISO 27001 frameworks for security assessments.'
              },
              {
                title: 'Data Ethics',
                description: 'Committed to responsible AI and data privacy in all our solutions.'
              }
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default AboutSection;
