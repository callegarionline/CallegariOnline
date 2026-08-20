import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthorityBlock } from './components/AuthorityBlock';
import { AboutSection } from './components/AboutSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { NationalCoverageSection } from './components/NationalCoverageSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ConversionCTA } from './components/ConversionCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DemandEstimatorModal } from './components/DemandEstimatorModal';
import { BudgetPage } from './pages/BudgetPage';
import { motion } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'orcamento'>('home');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  // Sync hash routing if user opens /#orcamento directly
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#orcamento') {
        setCurrentView('orcamento');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#home' || window.location.hash === '') {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBudget = () => {
    setCurrentView('orcamento');
    window.location.hash = '#orcamento';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2f5d8f] selection:text-white relative">
      
      {/* Fixed Sticky Navigation Header */}
      <Header onOpenBudgetModal={handleOpenBudget} />

      {/* View Switcher: Home vs Independent Internal Budget Page */}
      {currentView === 'orcamento' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <BudgetPage onBackToHome={handleBackToHome} />
        </motion.div>
      ) : (
        <main>
          {/* 1. Hero Section */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Hero onOpenBudgetModal={handleOpenBudget} />
          </motion.div>

          {/* 2. Authority Block */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <AuthorityBlock />
          </motion.div>

          {/* 3. Quem Somos (About) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <AboutSection />
          </motion.div>

          {/* 4. Para Quem Trabalhamos (Target Audience) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <TargetAudienceSection onOpenBudgetModal={handleOpenBudget} />
          </motion.div>

          {/* 5. Serviços (Services) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <ServicesSection onOpenBudgetModal={handleOpenBudget} />
          </motion.div>

          {/* 6. Diferencial (Differentials) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <DifferentialsSection />
          </motion.div>

          {/* 7. Como Funciona (How It Works) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <HowItWorksSection onOpenBudgetModal={handleOpenBudget} />
          </motion.div>

          {/* 8. Atuação Nacional (National Coverage) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <NationalCoverageSection />
          </motion.div>

          {/* 9. Portfólio / Cases */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <PortfolioSection onOpenBudgetModal={handleOpenBudget} />
          </motion.div>

          {/* 10. Prova Social (Testimonials) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <TestimonialsSection />
          </motion.div>

          {/* 11. Blog / Artigos */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <BlogSection />
          </motion.div>

          {/* 12. CTA de Conversão */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <ConversionCTA onOpenBudgetModal={handleOpenBudget} />
          </motion.div>

          {/* 13. Contato (Camila Callegari, WhatsApp, Email) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <ContactSection />
          </motion.div>
        </main>
      )}

      {/* Footer (Preserved on both views) */}
      <Footer />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Interactive Demand Scope Estimator Modal */}
      <DemandEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSelectBudget={handleOpenBudget}
      />

    </div>
  );
}

