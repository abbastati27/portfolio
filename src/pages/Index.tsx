import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abbas Tati | AI Engineer & Data Scientist</title>
        <meta
          name="description"
          content="Abbas Tati - AI Engineer specializing in Machine Learning, Deep Learning, NLP, and Full-Stack Development. Explore my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Abbas Tati, AI Engineer, Data Scientist, Machine Learning, Deep Learning, NLP, LLM, Python, Portfolio, GitHub"
        />
        <meta name="author" content="Abbas Tati" />
        <link rel="canonical" href="https://abbastati.dev" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
