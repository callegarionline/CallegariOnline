import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthorityBlock } from './components/AuthorityBlock';
import { AboutSection } from './components/AboutSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ServicesSection } from './components/ServicesSection';
import { NationalCoverageSection } from './components/NationalCoverageSection';
import { BlogSection } from './components/BlogSection';
import { ConversionCTA } from './components/ConversionCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DemandEstimatorModal } from './components/DemandEstimatorModal';
import { BudgetPage } from './pages/BudgetPage';
import { SegurancaJuridicaPage } from './pages/SegurancaJuridicaPage';
import { ArtigosPage } from './pages/ArtigosPage';
import { motion } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'orcamento' | 'seguranca-juridica' | 'artigos'>('home');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  // Sync hash routing if user opens /#orcamento, /#seguranca-juridica or /#artigos directly
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#orcamento') {
        setCurrentView('orcamento');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#seguranca-juridica')) {
        setCurrentView('seguranca-juridica');
      } else if (hash.startsWith('#artigos') || hash.startsWith('#conhecimento')) {
        setCurrentView('artigos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentView('home');
      } else {
        // Any anchor on Home like #servicos, #atuacao-nacional, #contato
        if (currentView !== 'home') {
          setCurrentView('home');
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

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

  const handleNavigate = (view: 'home' | 'orcamento' | 'seguranca-juridica' | 'artigos', targetId?: string) => {
    setCurrentView(view);
    if (view === 'orcamento') {
      window.location.hash = '#orcamento';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'seguranca-juridica') {
      window.location.hash = targetId ? `#seguranca-juridica-${targetId}` : '#seguranca-juridica';
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (view === 'artigos') {
      window.location.hash = '#artigos';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = targetId ? `#${targetId}` : '#home';
      if (targetId) {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const headerOffset = 90;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2f5d8f] selection:text-white relative">
      
      {/* Fixed Sticky Navigation Header */}
      <Header
        onOpenBudgetModal={handleOpenBudget}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* View Switcher: Home vs Independent Internal Pages */}
      {currentView === 'orcamento' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <BudgetPage onBackToHome={handleBackToHome} />
        </motion.div>
      ) : currentView === 'seguranca-juridica' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SegurancaJuridicaPage
            onBackToHome={handleBackToHome}
            onOpenBudgetModal={handleOpenBudget}
          />
        </motion.div>
      ) : currentView === 'artigos' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArtigosPage
            onBackToHome={handleBackToHome}
            onOpenBudgetModal={handleOpenBudget}
          />
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

          {/* 3. Quem Somos / Segurança Jurídica (About) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <AboutSection onNavigateToSeguranca={() => handleNavigate('seguranca-juridica')} />
          </motion.div>

          {/* 4. Para Quem Trabalhamos (Target Audience) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <TargetAudienceSection onOpenBudgetModal={handleOpenBudget} />
          </motion.div>

          {/* 5. Serviços (Services) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <ServicesSection onOpenBudgetModal={handleOpenBudget} />
          </motion.div>

          {/* 6. Atuação Nacional (National Coverage) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <NationalCoverageSection />
          </motion.div>

          {/* 7. Blog / Artigos */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <BlogSection onNavigateToArtigos={() => handleNavigate('artigos')} />
          </motion.div>

          {/* 9. CTA de Conversão */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <ConversionCTA onOpenBudgetModal={handleOpenBudget} />
          </motion.div>
        </main>
      )}

      {/* Footer (Preserved on all views) */}
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

