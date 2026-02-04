import { useCountUp } from '@/hooks/use-count-up';
import { GlassCard } from '@/components/ui/glass-card';

interface MetricProps {
  value: number;
  suffix: string;
  label: string;
}

const Metric = ({ value, suffix, label }: MetricProps) => {
  const { ref, count } = useCountUp({ end: value, suffix, duration: 2500 });

  return (
    <div ref={ref} className="text-center px-4 md:px-8 py-6">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-bio mb-2">
        {count}
      </div>
      <div className="text-sm md:text-base text-muted-foreground">{label}</div>
    </div>
  );
};

const MetricsBar = () => {
  const metrics = [
    { value: 99.9, suffix: '%', label: 'Uptime Guaranteed' },
    { value: 50, suffix: 'K+', label: 'Threats Blocked' },
    { value: 340, suffix: '+', label: 'Protected Species' },
  ];

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <GlassCard variant="glow" className="p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {metrics.map((metric, index) => (
              <Metric
                key={index}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default MetricsBar;
