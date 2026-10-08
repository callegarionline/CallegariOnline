import React from 'react';
import { UserCheck, Building, Handshake, ArrowRight } from 'lucide-react';
import audienceAdvogados from '../assets/images/audience_advogados_1786538469371.jpg';
import audienceEscritorios from '../assets/images/audience_escritorios_1786538485171.jpg';
import audienceParceiros from '../assets/images/audience_parceiros_1786538499733.jpg';

interface TargetAudienceSectionProps {
  onOpenBudgetModal?: () => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({ onOpenBudgetModal }) => {
  const targetGroups = [
    {
      title: 'Advogados',
      description: 'Acompanhamento de vistorias, elaboração de quesitos, análise de laudos periciais e produção de laudos e pareceres técnicos para instruir petições iniciais.',
      icon: UserCheck,
      badge: 'Contencioso Cível',
      image: audienceAdvogados
    },
    {
      title: 'Escritórios de Advocacia',
      description: 'Parcerias de longo prazo para reforçar as teses jurídicas com apoio técnico em demandas imobiliárias e de direito administrativo/tributário',
      icon: Building,
      badge: 'Parceria Estratégica',
      image: audienceEscritorios
    },
    {
      title: 'Empresas & Proprietários',
      description: 'Avaliação patrimonial justa de ativos imobiliários, contestação de impostos (ITBI/IPTU) e renegociação de contratos com fundamentação científica.',
      icon: Handshake,
      badge: 'Proteção de Ativos',
      image: audienceParceiros
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
            PÚBLICO-ALVO
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            Suporte técnico especializado para quem precisa fundamentar, contestar e decidir com segurança.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Soluções técnicas sob medida para demandas judiciais e consultivas de alta complexidade.
          </p>
        </div>

        {/* 3 Audience Cards - High Visual Impact with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targetGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#2f5d8f]"
              >
                <div>
                  {/* Top Image Banner with Overlay Badge */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <div className="p-2.5 bg-[#2f5d8f] text-white rounded-lg shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {group.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-xl font-extrabold text-white font-serif">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-3">
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <a
                    href="#orcamento"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#orcamento');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      if (onOpenBudgetModal) onOpenBudgetModal();
                    }}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-[#2f5d8f] hover:text-[#244973] uppercase tracking-wider py-2 group-hover:underline"
                  >
                    <span>Solicitar Análise de Demanda</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
