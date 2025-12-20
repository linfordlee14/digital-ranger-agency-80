import { Github, Linkedin, Terminal, Shield, TreePine, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const skills = [
    { icon: Shield, label: 'Ethical Hacking', color: 'cyber-green' },
    { icon: Database, label: 'Data Analytics', color: 'cyber-teal' },
    { icon: TreePine, label: 'Conservation Tech', color: 'earth-amber' },
    { icon: Terminal, label: 'Full-Stack Dev', color: 'foreground' },
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
    <section id="about" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block font-mono text-sm text-cyber-green mb-4 px-3 py-1 rounded border border-terminal-border bg-terminal-bg/50">
            {'>'} ABOUT_US
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the <span className="text-gradient-cyber">Digital Ranger</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Profile */}
          <div className="terminal-card p-6 lg:p-8">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-earth-amber" />
              <div className="w-3 h-3 rounded-full bg-cyber-green" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">founder.profile</span>
            </div>

            {/* Profile Header */}
            <div className="flex items-start gap-6 mb-6">
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-cyber-green/20 to-earth-amber/20 border border-terminal-border flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-3xl font-bold text-cyber-green">LM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Linford Musiyambodza</h3>
                <p className="text-cyber-green font-mono text-sm mb-3">Founder & Lead Digital Ranger</p>
                <div className="flex gap-2">
                  <Button variant="terminal" size="sm" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="terminal" size="sm" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground mb-6">
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
                  className={`flex items-center gap-2 px-3 py-2 rounded bg-${skill.color}/5 border border-${skill.color}/20`}
                >
                  <skill.icon className={`w-4 h-4 text-${skill.color}`} />
                  <span className="text-sm text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-foreground">The Journey</h3>
            <div className="space-y-6">
              {timeline.map((event, index) => (
                <div key={event.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-terminal-bg border border-terminal-border flex items-center justify-center font-mono text-sm text-cyber-green">
                      {event.year.slice(2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-20">
          <div className="terminal-card p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-earth-amber" />
              <div className="w-3 h-3 rounded-full bg-cyber-green" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">resources.md</span>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">Research & Open Source</h3>
            <p className="text-muted-foreground mb-6">
              We believe in transparency and collaboration. Our work is built on open-source 
              foundations and contributes back to the community.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded bg-terminal-bg border border-terminal-border">
                <h4 className="font-semibold text-foreground mb-2">Conservation AI Tools</h4>
                <p className="text-sm text-muted-foreground">
                  Leveraging SMART, Wildlife Insights, and custom ML models for species identification.
                </p>
              </div>
              <div className="p-4 rounded bg-terminal-bg border border-terminal-border">
                <h4 className="font-semibold text-foreground mb-2">Cybersecurity Standards</h4>
                <p className="text-sm text-muted-foreground">
                  Following NIST, OWASP, and ISO 27001 frameworks for security assessments.
                </p>
              </div>
              <div className="p-4 rounded bg-terminal-bg border border-terminal-border">
                <h4 className="font-semibold text-foreground mb-2">Data Ethics</h4>
                <p className="text-sm text-muted-foreground">
                  Committed to responsible AI and data privacy in all our solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
