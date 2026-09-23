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
  BookOpen,
  Instagram,
  Linkedin
} from 'lucide-react';

interface HeaderProps {
  onOpenBudgetModal?: () => void;
  currentView?: 'home' | 'orcamento' | 'seguranca-juridica' | 'artigos';
  onNavigate?: (view: 'home' | 'orcamento' | 'seguranca-juridica' | 'artigos', targetId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView = 'home',
  onNavigate,
}) => {
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
    { name: 'Sobre', href: '#seguranca-juridica', icon: UserCheck },
    { name: 'Serviços', href: '#servicos', icon: Briefcase },
    { name: 'Atuação', href: '#atuacao-nacional', icon: Globe },
    { name: 'Portfólio', href: '#portfolio', icon: Award },
    { name: 'Artigos', href: '#artigos', icon: BookOpen },
    { name: 'Contato', href: '#contato', icon: Phone, isHighlight: true },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '#home';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '#quem-somos' || href === '#seguranca-juridica') {
      if (onNavigate) {
        onNavigate('seguranca-juridica');
      } else {
        window.location.hash = '#seguranca-juridica';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '#portfolio') {
      if (onNavigate) {
        onNavigate('seguranca-juridica', 'portfolio');
      } else {
        window.location.hash = '#seguranca-juridica-portfolio';
      }
      return;
    }

    if (href === '#artigos' || href === '#blog') {
      if (onNavigate) {
        onNavigate('artigos');
      } else {
        window.location.hash = '#artigos';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // For sections on Home page
    if (currentView !== 'home') {
      if (onNavigate) {
        onNavigate('home', href.replace('#', ''));
      } else {
        window.location.hash = href;
      }
      return;
    }

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
        className={`bg-[#2f5d8f] text-white text-xs hidden md:block border-b border-blue-400/20 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center font-medium">
          {/* Contact Direct */}
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

          {/* Social Media Icons on the Right */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-blue-200/80 mr-1 font-normal hidden lg:inline">Redes Sociais:</span>
            
            {/* Instagram */}
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Oficial"
              aria-label="Instagram da Callegari Engenharia"
              className="p-1.5 rounded-md text-blue-100 hover:text-white hover:bg-white/15 transition-all duration-200 flex items-center justify-center"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>

            {/* LinkedIn */}
            <a
              href={COMPANY_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn da Callegari Engenharia"
              className="p-1.5 rounded-md text-blue-100 hover:text-white hover:bg-white/15 transition-all duration-200 flex items-center justify-center"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              aria-label="WhatsApp da Callegari Engenharia"
              className="p-1.5 rounded-md text-blue-100 hover:text-emerald-300 hover:bg-white/15 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>

            {/* Google Meu Negócio */}
            <a
              href={COMPANY_INFO.googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Google Meu Negócio"
              aria-label="Google Meu Negócio da Callegari Engenharia"
              className="p-1.5 rounded-md text-blue-100 hover:text-white hover:bg-white/15 transition-all duration-200 flex items-center justify-center"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#93c5fd" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#86efac" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#fde047" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#fca5a5" />
              </svg>
            </a>
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

                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-3 pt-3 border-t border-slate-100">
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram Oficial"
                    className="p-2 rounded-full bg-slate-100 text-slate-700 hover:text-[#2f5d8f] hover:bg-blue-50 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="p-2 rounded-full bg-slate-100 text-slate-700 hover:text-[#2f5d8f] hover:bg-blue-50 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    className="p-2 rounded-full bg-slate-100 text-emerald-600 hover:bg-emerald-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                  <a
                    href={COMPANY_INFO.googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google Meu Negócio"
                    className="p-2 rounded-full bg-slate-100 text-slate-700 hover:text-[#2f5d8f] hover:bg-blue-50 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

