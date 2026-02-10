import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MetricsBar from '@/components/MetricsBar';
import MissionSection from '@/components/MissionSection';
import BentoGrid from '@/components/BentoGrid';
import AIChatWidget from '@/components/AIChatWidget';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Linfy Tech Solutions | Cybersecurity & Conservation Technology</title>
        <meta 
          name="description" 
          content="Advanced Cybersecurity, AI Analytics, and Conservation Tech for a resilient world. Protecting data and wildlife across Africa." 
        />
        <meta name="keywords" content="cybersecurity, conservation technology, AI analytics, wildlife protection, ethical hacking, Africa" />
        <meta property="og:title" content="Linfy Tech Solutions | Cybersecurity & Conservation Technology" />
        <meta property="og:description" content="Advanced Cybersecurity, AI Analytics, and Conservation Tech for a resilient world." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://linfytech.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <MetricsBar />
          <MissionSection />
          <BentoGrid />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <AIChatWidget />
      </div>
    </>
  );
};

export default Index;
