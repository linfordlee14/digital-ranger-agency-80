import { useState } from 'react';
import { Send, MapPin, Mail, Linkedin, Github, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GlassCard } from '@/components/ui/glass-card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      if (error) throw error;

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-deep-space-light/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-bio-green/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-bio-green" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-bio">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to secure your infrastructure or contribute to conservation tech? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <GlassCard className="p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white/[0.02] border-white/[0.1] focus:border-neon-cyan/50 focus:ring-neon-cyan/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-white/[0.02] border-white/[0.1] focus:border-neon-cyan/50 focus:ring-neon-cyan/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="bg-white/[0.02] border-white/[0.1] focus:border-neon-cyan/50 focus:ring-neon-cyan/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  required
                  className="bg-white/[0.02] border-white/[0.1] focus:border-neon-cyan/50 focus:ring-neon-cyan/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Card */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-bio-green/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-bio-green" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Africa-based, Globally Connected</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:hello@linfytech.xyz" className="text-sm text-neon-cyan hover:underline">
                      hello@linfytech.xyz
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Follow Our Work</h3>
              <div className="flex gap-3">
                <Button variant="glass" size="lg" asChild>
                  <a href="https://github.com/linfordlee14" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <a href="https://linkedin.com/in/linfordlee14" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </GlassCard>

            {/* Quick Info */}
            <GlassCard className="p-6" variant="glow">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-bio-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Response Time</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We typically respond within 24 hours. For urgent security matters, 
                    please indicate in your subject line.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
