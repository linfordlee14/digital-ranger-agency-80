const TrustedBy = () => {
  const logos = [
    { name: 'AWS', text: 'AWS' },
    { name: 'Python', text: 'Python' },
    { name: 'TensorFlow', text: 'TensorFlow' },
    { name: 'PostgreSQL', text: 'PostgreSQL' },
    { name: 'Docker', text: 'Docker' },
    { name: 'Kubernetes', text: 'Kubernetes' },
  ];

  return (
    <div className="w-full py-12 border-t border-white/[0.05]">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          Built With Industry-Leading Technologies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300"
            >
              <span className="font-mono text-lg md:text-xl font-semibold tracking-tight">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
