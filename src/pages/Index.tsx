import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Linfy Tech Solutions | Conservation Tech & Cybersecurity Agency</title>
        <meta 
          name="description" 
          content="Linfy Tech Solutions combines cutting-edge cybersecurity with AI-powered conservation technology to protect digital infrastructure and endangered wildlife across Africa." 
        />
        <meta name="keywords" content="cybersecurity, conservation technology, AI wildlife monitoring, ethical hacking, anti-poaching, Africa, data analytics" />
        <meta property="og:title" content="Linfy Tech Solutions | Digital Rangers" />
        <meta property="og:description" content="Securing Nature through Code. Empowering Africa through Data." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://linfytech.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <MissionSection />
          <ServicesSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
