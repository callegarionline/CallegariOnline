import React from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
            PROVA SOCIAL
            <span className="w-6 h-0.5 bg-[#2f5d8f]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            A confiança de quem precisa de precisão técnica.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Depoimentos de advogados e escritórios parceiros que contam com o suporte da Callegari Engenharia para instruir e defender suas teses.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#2f5d8f]/20 mb-4" />

              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2f5d8f] text-white flex items-center justify-center font-bold text-xs font-serif shrink-0">
                  {test.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-base font-serif">{test.name}</div>
                  <div className="text-sm text-[#2f5d8f] font-semibold">{test.role}</div>
                  <div className="text-xs text-slate-500 font-medium">{test.organization}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
