import { 
  Shield, 
  Bug, 
  Eye, 
  Server,
  Bird,
  MapPin,
  BarChart3,
  Brain,
  Database,
  LineChart,
  Zap,
  Lock
} from 'lucide-react';

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: 'Cybersecurity Services',
      icon: Shield,
      color: 'cyber-green',
      description: 'Protecting your digital assets with white-hat expertise',
      services: [
        {
          icon: Bug,
          name: 'Ethical Hacking & Penetration Testing',
          description: 'Identify vulnerabilities before malicious actors do. We simulate real-world attacks to strengthen your defenses.',
        },
        {
          icon: Eye,
          name: 'Security Monitoring & Threat Detection',
          description: '24/7 surveillance of your systems with AI-powered anomaly detection and rapid incident response.',
        },
        {
          icon: Server,
          name: 'Security Audits & Compliance',
          description: 'Comprehensive assessments to ensure your infrastructure meets industry standards and regulations.',
        },
        {
          icon: Lock,
          name: 'Security Training & Awareness',
          description: 'Empower your team to recognize and prevent social engineering attacks and security breaches.',
        },
      ],
    },
    {
      title: 'Conservation Technology',
      icon: Bird,
      color: 'earth-amber',
      description: 'AI-powered solutions protecting African wildlife',
      services: [
        {
          icon: Bird,
          name: 'AI Wildlife Monitoring',
          description: 'Computer vision and acoustic sensors to track and identify species in real-time across vast territories.',
        },
        {
          icon: MapPin,
          name: 'Anti-Poaching Intelligence',
          description: 'Predictive analytics to anticipate poaching activities and optimize ranger patrol routes.',
        },
        {
          icon: BarChart3,
          name: 'Ecosystem Analytics',
          description: 'Track population trends, migration patterns, and habitat health with comprehensive dashboards.',
        },
        {
          icon: Zap,
          name: 'IoT Sensor Networks',
          description: 'Deploy smart sensors for environmental monitoring, water quality, and wildlife movement tracking.',
        },
      ],
    },
    {
      title: 'Data Analytics & AI',
      icon: Brain,
      color: 'cyber-teal',
      description: 'Transforming data into actionable intelligence',
      services: [
        {
          icon: Brain,
          name: 'Machine Learning Solutions',
          description: 'Custom AI models for threat prediction, pattern recognition, and automated decision-making.',
        },
        {
          icon: Database,
          name: 'Big Data Infrastructure',
          description: 'Scalable data pipelines and storage solutions for handling massive datasets efficiently.',
        },
        {
          icon: LineChart,
          name: 'Business Intelligence',
          description: 'Interactive dashboards and reports that turn complex data into clear, actionable insights.',
        },
        {
          icon: Server,
          name: 'Cloud Architecture',
          description: 'Secure, scalable cloud solutions optimized for performance and cost-efficiency.',
        },
      ],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block font-mono text-sm text-cyber-green mb-4 px-3 py-1 rounded border border-terminal-border bg-terminal-bg/50">
            {'>'} SERVICES_CATALOG
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What We <span className="text-gradient-cyber">Protect</span> &{' '}
            <span className="text-gradient-earth">Preserve</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From enterprise networks to endangered ecosystems, our services are designed 
            to defend, analyze, and empower.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.services.map((service, index) => (
                  <div
                    key={service.name}
                    className="terminal-card p-6 group hover:border-cyber-green/30 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <div className={`w-10 h-10 rounded bg-${category.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-5 h-5 text-${category.color}`} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{service.name}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
