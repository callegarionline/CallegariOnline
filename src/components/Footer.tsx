import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, Instagram, ShieldCheck, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-slate-950 text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-7 lg:col-span-8 space-y-4">
            <Logo variant="light" className="h-10" />
            
            <p className="text-sm text-slate-200 font-medium tracking-wide">
              Engenharia Legal | Avaliações | Perícias | Desapropriações | Servidões
            </p>

            <p className="text-sm text-slate-300 leading-relaxed max-w-lg font-normal">
              Soluções especializadas em engenharia de avaliações e perícias com foco na entrega de laudos precisos e suporte técnico para demandas judiciais e extrajudiciais.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-blue-200 bg-slate-900 border border-slate-700 px-3.5 py-2 font-mono rounded-md">
              <ShieldCheck className="w-4 h-4 text-[#60a5fa]" />
              <span>CERTIFICAÇÃO AAA EM ENGENHARIA DE AVALIAÇÕES</span>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6 md:pl-6 lg:pl-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#2f5d8f] text-white rounded-lg shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">WhatsApp Direct</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-[#60a5fa] transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#2f5d8f] text-white rounded-lg shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-0.5">E-mail Corporativo</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-bold text-white hover:text-[#60a5fa] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-300 block mb-3 font-mono">
                Redes Sociais
              </span>
              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram Oficial"
                  aria-label="Instagram da Callegari Engenharia"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#2f5d8f] hover:border-[#2f5d8f] transition-all duration-200 flex items-center justify-center"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={COMPANY_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn da Callegari Engenharia"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-[#2f5d8f] hover:border-[#2f5d8f] transition-all duration-200 flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp da Callegari Engenharia"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-300 hover:bg-[#2f5d8f] hover:border-[#2f5d8f] transition-all duration-200 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t-2 border-[#2f5d8f]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300 font-medium">
          <p>© 2026 Callegari Engenharia. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};
