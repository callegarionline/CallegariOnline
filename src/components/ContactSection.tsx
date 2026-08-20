import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, Instagram, MessageSquare, MapPin, UserCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(
    COMPANY_INFO.defaultWhatsappMessage
  )}`;

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
            CANAL DIRETO
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            Vamos conversar sobre sua demanda?
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Estamos à disposição para atender escritórios de advocacia, empresas e parceiros estratégicos com agilidade e confidencialidade.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Main Contact Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 mb-6">
                <div className="p-2 bg-[#2f5d8f] text-white rounded">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase">Responsável pelo Projeto</div>
                  <div className="text-lg font-bold font-serif text-slate-900">
                    {COMPANY_INFO.responsiblePerson}
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">WhatsApp / Telefone</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-[#2f5d8f] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">E-mail Institucional</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-bold text-slate-900 hover:text-[#2f5d8f] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Instagram className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">Instagram</span>
                    <a
                      href={COMPANY_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-slate-900 hover:text-[#2f5d8f] transition-colors"
                    >
                      {COMPANY_INFO.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-[#2f5d8f] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold uppercase text-slate-400 block">Localização & Atuação</span>
                    <span className="font-semibold text-slate-800">{COMPANY_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#2f5d8f] hover:bg-[#244973] text-white font-bold text-sm tracking-wider uppercase px-6 py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-5 h-5 text-emerald-300" />
                <span>FALAR NO WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Quick Direct Message Visual Panel */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono text-[#60a5fa] uppercase tracking-wider">
                ATENDIMENTO AGILIZADO PARA ADVOGADOS
              </span>

              <h3 className="text-2xl font-bold font-serif leading-tight">
                Análise técnica preliminar para instrução da sua petição.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Analisamos prazos judiciais urgentes, intimações de laudos periciais desfavoráveis e necessidades imediatas de quesitação.
              </p>

              <div className="p-4 bg-slate-950/80 rounded-lg border border-slate-800 space-y-2 text-xs font-mono text-slate-300">
                <div className="text-emerald-400 font-bold">✓ Prazos Prioritários</div>
                <div className="text-emerald-400 font-bold">✓ Sigilo Profissional Garantido</div>
                <div className="text-emerald-400 font-bold">✓ Atendimento em Todo o Brasil</div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 relative z-10">
              <p className="text-[11px] text-slate-400">
                Horário de Atendimento: Segunda a Sexta, das 08h às 18h.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
