import { Cloud, Terminal, Brain, Database, Box, Container } from 'lucide-react';

const TrustedBy = () => {
  const techs = [
    { name: 'AWS', icon: Cloud },
    { name: 'Python', icon: Terminal },
    { name: 'TensorFlow', icon: Brain },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Docker', icon: Box },
    { name: 'Kubernetes', icon: Container },
  ];

  return (
    <div className="w-full py-12 border-t border-white/[0.05]">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Built With Industry-Leading Technologies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 text-slate-500 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.5)] transition-all duration-300 cursor-default"
            >
              <tech.icon className="w-7 h-7 md:w-8 md:h-8" />
              <span className="text-xs font-mono tracking-tight">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
