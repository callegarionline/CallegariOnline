import React, { useState } from 'react';
import camilaAssetImg from '../assets/images/camila_callegari.jpg';
import { COMPANY_INFO } from '../data/companyData';

// Helper para converter qualquer link do Google Drive para URL de visualização direta
function resolvePhotoUrl(): string {
  const driveUrl = COMPANY_INFO.camilaPhotoDirectUrl || COMPANY_INFO.camilaPhotoDriveUrl;
  if (driveUrl) {
    if (driveUrl.includes('lh3.googleusercontent.com/d/')) return driveUrl;
    const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/) || driveUrl.match(/id=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`;
    }
    return driveUrl;
  }
  return '/camila_callegari.jpg';
}

export const CamilaCallegariSection: React.FC = () => {
  // Ordem de carregamento: Link direto do Drive (se houver) -> /camila_callegari.jpg -> /camila_callegari.png -> asset empacotado
  const [imgSrc, setImgSrc] = useState<string>(() => resolvePhotoUrl());
  // Estado para o selo oficial Callegari posicionado ao lado do título
  const [sealSrc, setSealSrc] = useState<string>('/selo_callegari.png');

  const handleImageError = () => {
    if (imgSrc.startsWith('https://lh3.googleusercontent.com') || imgSrc.includes('drive.google.com')) {
      setImgSrc('/camila_callegari.jpg');
    } else if (imgSrc === '/camila_callegari.jpg') {
      setImgSrc('/camila_callegari.png');
    } else if (imgSrc !== camilaAssetImg) {
      setImgSrc(camilaAssetImg);
    }
  };

  return (
    <section id="sobre-camila" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Título principal à esquerda e Selo Callegari no lado direito */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
          <div className="max-w-2xl">
            <span className="text-xs font-bold font-mono tracking-widest text-[#2f5d8f] uppercase">
              CAMILA CALLEGARI
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif leading-tight mt-2">
              A Paixão Pela Engenharia Legal e o Propósito da Precisão
            </h2>
            <p className="text-base font-semibold text-slate-600 mt-2">
              CEO, Perita Judicial e Engenheira de Avaliações
            </p>
          </div>

          {/* Imagem do Selo Callegari posicionada no lado direito do título */}
          <div className="shrink-0 flex items-center justify-start sm:justify-end">
            <div className="relative p-2 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/60 border border-slate-200/70 shadow-sm">
              <img
                src={sealSrc}
                onError={() => {
                  if (sealSrc === '/selo_callegari.png') {
                    setSealSrc('/selo_callegari-1.png');
                  } else if (sealSrc !== COMPANY_INFO.sealDirectUrl) {
                    setSealSrc(COMPANY_INFO.sealDirectUrl);
                  }
                }}
                alt="Selo Callegari Engenharia"
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Layout Limpo em 2 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Coluna da Imagem: Limpa, sem sobreposições poluídas */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50">
              <img
                src={imgSrc}
                onError={handleImageError}
                alt="Camila Callegari - CEO, Perita Judicial e Engenheira de Avaliações"
                className="w-full max-h-[580px] object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Legenda institucional sutil abaixo da foto */}
            <div className="mt-4 text-center sm:text-left">
              <h3 className="text-sm font-bold text-slate-900">
                Camila Callegari
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Certificação IBAPE Nacional – Nível AAA | CREA-ES
              </p>
            </div>
          </div>

          {/* Coluna do Texto: Formatação Editorial Fluida e Simples */}
          <div className="lg:col-span-7 space-y-8 text-slate-700 text-base leading-relaxed">
            
            {/* Bloco 1: Jornada */}
            <div className="space-y-4">
              <p>
                Minha jornada na Engenharia Civil começou de forma inspiradora. Embora meu primeiro movimento no vestibular tenha sido em direção à Arquitetura, foi ainda durante as etapas de seleção que percebi onde meu perfil analítico verdadeiramente ressoava: na exatidão, no rigor e na fundamentação da Engenharia Civil. Direcionei meus estudos para a <strong className="text-slate-900 font-semibold">Universidade Federal do Espírito Santo (UFES)</strong>, onde me graduei em 2013.
              </p>
              <p>
                Foi logo no primeiro estágio da faculdade que tive meu contato divisor de águas com a área de <strong className="text-slate-900 font-semibold">Avaliações e Perícias de Engenharia</strong>. Ali, descobri a fascinante aplicação da engenharia como ferramenta essencial para a solução de litígios, conflitos patrimoniais e decisões judiciais complexas. A identificação foi imediata.
              </p>
              <p>
                Buscando uma formação completa, também fiz questão de vivenciar a realidade de obras e canteiros de execução. Entender a física das edificações, a patologia das construções e os sistemas construtivos <em>in loco</em> deu-me a bagagem prática necessária para enxergar o que muitos laudos superficiais deixam passar.
              </p>
            </div>

            {/* Bloco 2: Trajetória Acadêmica e Autoridade Técnica */}
            <div className="pt-2">
              <h3 className="text-lg font-bold text-slate-900 font-serif mb-3">
                Trajetória Acadêmica e Autoridade Técnica
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Para transformar a vocação em excelência probatória, construí uma sólida trajetória acadêmica e de especialização contínua:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Graduação em Engenharia Civil pela Universidade Federal do Espírito Santo (UFES);</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Pós-Graduação em Auditoria, Perícias e Avaliações de Imóveis pelo Instituto IPOG;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Mestrado Internacional em Engenharia de Avaliações de Ativos pela Universitat Politècnica de València (UPV - Espanha);</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Certificação IBAPE Nacional em Engenharia de Avaliações – Nível AAA;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Docente e Ministrante em treinamentos de Avaliação Imobiliária e Inferência Estatística para órgãos públicos (como SEFAZ/ES e SEMOBI) e pelo IBAPE em diversos estados.</span>
                </li>
              </ul>
            </div>

            {/* Bloco 3: Atuação Institucional e Liderança no Setor */}
            <div className="pt-2">
              <h3 className="text-lg font-bold text-slate-900 font-serif mb-3">
                Atuação Institucional e Liderança no Setor
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                Acredito que a evolução da engenharia legal passa pelo fortalecimento das instituições e da normalização técnica no Brasil. Por isso, mantenho uma presença ativa no ecossistema de perícias do país:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Diretora de Projetos Especiais / Eventos do IBAPE Nacional;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Ex-Diretora Técnica do IBAPE-ES;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Inspetora do CREA-ES;</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                  <span>Autora e parecerista de artigos técnicos e trabalhos científicos aprovados no Congresso Brasileiro de Engenharia de Avaliações e Perícias (COBREAP).</span>
                </li>
              </ul>
            </div>

            {/* Bloco 4: A Callegari Engenharia */}
            <div className="pt-2 space-y-3">
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                A Callegari Engenharia
              </h3>
              <p>
                Fundada em 2014, a Callegari Engenharia nasce da premissa de que um laudo técnico não é apenas um documento — é a base de segurança para uma tomada de decisão crítica.
              </p>
              <p>
                À frente do escritório, atuo como Perita Judicial, Assistente Técnica e Consultora para grandes corporações, concessionárias de energia, instituições financeiras, órgãos públicos e bancas jurídicas de todo o país. Unimos a experiência prática de campo à inferência estatística avançada e ao cumprimento rigoroso das normas da ABNT (NBR 14653 e NBR 13752).
              </p>
            </div>

            {/* Bloco 5: Citação / Missão em Estilo Editorial Limpo */}
            <div className="pt-2">
              <blockquote className="border-l-3 border-[#2f5d8f] pl-5 py-2 my-2 bg-slate-50 rounded-r-xl">
                <p className="text-base sm:text-lg italic font-serif text-slate-800 leading-relaxed">
                  &ldquo;Nossa missão é traduzir a complexidade técnica da engenharia na clareza e na blindagem probatória que o seu Direito e o seu patrimônio exigem.&rdquo;
                </p>
                <cite className="block mt-2 text-xs sm:text-sm font-bold text-[#2f5d8f] not-italic">
                  — Camila Callegari
                </cite>
              </blockquote>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
