import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.rawPhone}?text=${encodeURIComponent(
    COMPANY_INFO.defaultWhatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Tooltip Badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-3.5 py-2 rounded-lg shadow-xl text-xs font-semibold animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 ml-1"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <span>Fale direto com a equipe técnica</span>
          <div className="w-2 h-2 bg-white border-r border-b border-slate-200 rotate-45 absolute -right-1 top-1/2 -translate-y-1/2" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 relative group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Falar pelo WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-300 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
        <MessageSquare className="w-7 h-7 fill-white stroke-emerald-500" />
      </a>
    </div>
  );
};
