import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  UserCheck,
  Briefcase,
  Globe,
  Award,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  onOpenBudgetModal?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Sobre', href: '#quem-somos', icon: UserCheck },
    { name: 'Serviços', href: '#servicos', icon: Briefcase },
    { name: 'Atuação', href: '#atuacao-nacional', icon: Globe },
    { name: 'Portfólio', href: '#portfolio', icon: Award },
    { name: 'Blog', href: '#blog', icon: BookOpen },
    { name: 'Contato', href: '#contato', icon: Phone, isHighlight: true },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Contact Strip */}
      <div
        className={`bg-[#2f5d8f] text-white text-xs px-4 hidden md:block border-b border-blue-400/20 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-300" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-blue-300/60">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-blue-200 transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-200" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="text-[11px] font-mono text-blue-100/90 tracking-wide uppercase">
            <span>Responsável Técnica: {COMPANY_INFO.responsiblePerson}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 bg-white ${
          isScrolled
            ? 'shadow-md py-2 sm:py-2.5 border-b border-slate-200/90 backdrop-blur-md bg-white/95'
            : 'py-5 sm:py-6 lg:py-6 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="focus:outline-none flex items-center shrink-0">
            <Logo className={`${isScrolled ? 'h-9 sm:h-10 lg:h-11' : 'h-13 sm:h-15 lg:h-16'} transition-all duration-300`} />
          </a>

          {/* Desktop Single-Level Navigation Aligned Right */}
          <div className="hidden lg:flex items-center gap-6 text-base font-semibold text-slate-700 ml-auto">
            {menuItems.map((item) => {
              const ItemIcon = item.icon;
              if (item.isHighlight) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="bg-[#2f5d8f] hover:bg-[#234870] text-white px-5 py-2.5 rounded-md font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <ItemIcon className="w-4 h-4 text-emerald-300" />
                    <span>{item.name}</span>
                  </a>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="hover:text-[#2f5d8f] transition-colors py-2 flex items-center gap-2 relative group"
                >
                  <ItemIcon className="w-4 h-4 text-[#2f5d8f]" />
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2f5d8f] transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, '#contato')}
              className="bg-[#2f5d8f] text-white text-xs font-semibold px-3 py-2 rounded transition-colors mr-1"
            >
              CONTATO
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#2f5d8f] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`flex items-center gap-3 font-bold text-base py-2.5 border-b border-slate-100 ${
                      item.isHighlight
                        ? 'text-[#2f5d8f] bg-blue-50/80 px-3 rounded-lg border-blue-100'
                        : 'text-slate-800 hover:text-[#2f5d8f]'
                    }`}
                  >
                    <ItemIcon className={`w-5 h-5 ${item.isHighlight ? 'text-[#2f5d8f]' : 'text-[#2f5d8f]'}`} />
                    <span>{item.name}</span>
                  </a>
                );
              })}

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-[#2f5d8f] text-[#2f5d8f] font-semibold text-sm py-2.5 rounded-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

