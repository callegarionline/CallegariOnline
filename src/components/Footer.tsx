import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, Instagram, ShieldCheck } from 'lucide-react';
import seloCallegariImg from '../assets/images/selo_callegari.png';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-950 text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" className="h-10" />
            
            <p className="text-xs text-slate-300 font-medium tracking-wide">
              Engenharia Legal | Avaliações | Perícias | Desapropriações | Servidões
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-normal">
              Soluções especializadas em engenharia de avaliações e perícias com foco na entrega de laudos precisos e suporte técnico para demandas judiciais e extrajudiciais.
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] text-blue-200 bg-slate-900 border border-slate-700 px-3 py-1.5 font-mono rounded-md">
              <ShieldCheck className="w-4 h-4 text-[#60a5fa]" />
              <span>CERTIFICAÇÃO AAA EM ENGENHARIA DE AVALIAÇÕES</span>
            </div>
          </div>

          {/* Selo Oficial Anexado */}
          <div className="md:col-span-3 flex justify-center md:justify-start items-center">
            <img
              src={seloCallegariImg}
              alt="Selo Profissional Certificado AAA IBAPE Nacional - Engenharia de Avaliações"
              className="max-h-48 md:max-h-52 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== '/selo_callegari.png') {
                  target.src = '/selo_callegari.png';
                }
              }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Contact Direct - Highlighted Container */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#60a5fa] font-mono">
              CONTATO INSTITUCIONAL EM DESTAQUE
            </h4>
            
            <div className="bg-slate-900/90 border-2 border-slate-700/80 rounded-xl p-5 space-y-3.5 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#2f5d8f] text-white rounded-lg shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">WhatsApp Direct</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-[#60a5fa] transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#2f5d8f] text-white rounded-lg shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">E-mail Corporativo</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs font-bold text-white hover:text-[#60a5fa] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#2f5d8f] text-white rounded-lg shadow-sm">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Instagram Oficial</span>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white hover:text-[#60a5fa] transition-colors"
                  >
                    {COMPANY_INFO.instagram}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright - Brightened Line Above */}
        <div className="pt-6 border-t-2 border-[#2f5d8f]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300 font-medium">
          <p>© 2026 Callegari Engenharia. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Contato Direto</span>
              <span className="text-[12px] font-bold text-white">{COMPANY_INFO.phone}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
