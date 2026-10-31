import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/companyData';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight, X, Clock, Calendar, User, MessageCircle, AlertTriangle, ExternalLink } from 'lucide-react';

interface BlogSectionProps {
  onNavigateToArtigos?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigateToArtigos }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-[#2f5d8f] uppercase">
            <BookOpen className="w-4 h-4" />
            CONHECIMENTO & ARTIGOS
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            Conhecimento técnico para decisões mais seguras.
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Artigos técnicos e análises focadas na convergência entre o Direito Imobiliário/Processual e a Engenharia Legal.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Article Image */}
                <div className="h-48 w-full overflow-hidden relative bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#2f5d8f] text-white text-xs font-bold tracking-widest px-3 py-1.5 rounded uppercase shadow">
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#2f5d8f]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#2f5d8f]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif leading-snug group-hover:text-[#2f5d8f] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full inline-flex items-center justify-between text-sm font-bold text-[#2f5d8f] hover:text-[#244973] uppercase tracking-wider py-2.5 border-t border-slate-100 cursor-pointer"
                >
                  <span>LER ARTIGO COMPLETO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Link to independent Knowledge & Articles Page */}
        {onNavigateToArtigos && (
          <div className="mt-12 text-center">
            <button
              onClick={onNavigateToArtigos}
              className="inline-flex items-center gap-2.5 bg-[#2f5d8f] hover:bg-[#234870] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <BookOpen className="w-5 h-5 text-emerald-300" />
              <span>ACESSAR TODOS OS ARTIGOS & PUBLICAÇÕES</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}

      </div>

      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono bg-[#2f5d8f] text-white font-bold px-3 py-1 rounded">
                {selectedPost.category}
              </span>
              <span className="text-sm text-slate-500">{selectedPost.date}</span>
              <span className="text-sm text-slate-500">• {selectedPost.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4 leading-tight">
              {selectedPost.title}
            </h3>

            {/* Author */}
            {selectedPost.author && (
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl mb-6">
                <div className="w-8 h-8 rounded-full bg-[#2f5d8f]/10 flex items-center justify-center text-[#2f5d8f] shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <span>{selectedPost.author}</span>
              </div>
            )}

            <div className="h-64 w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
              <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
              {selectedPost.content.map((paragraph, pIdx) => {
                if (/^(📍|📊|⚖️|🛠️|🚫|❌|🏛️|📩|📚|💡|📈|🎯|🏢)/.test(paragraph)) {
                  return (
                    <h4
                      key={pIdx}
                      className="text-lg sm:text-xl font-bold text-slate-900 mt-6 pt-3 pb-1 border-b border-slate-100 flex items-center gap-2"
                    >
                      {paragraph}
                    </h4>
                  );
                }

                if (paragraph.startsWith('“') || paragraph.startsWith('"')) {
                  return (
                    <blockquote
                      key={pIdx}
                      className="border-l-4 border-[#c5a880] pl-4 py-3 my-4 italic text-slate-800 bg-amber-50/60 rounded-r-xl text-sm sm:text-base leading-relaxed shadow-xs"
                    >
                      {paragraph}
                    </blockquote>
                  );
                }

                if (paragraph.startsWith('Exemplo Prático de Mercado:')) {
                  const parts = paragraph.split('\n');
                  return (
                    <div key={pIdx} className="bg-slate-50 border-l-4 border-[#2f5d8f] p-4 rounded-r-xl my-4 space-y-1.5">
                      <div className="font-bold text-slate-900 text-sm sm:text-base">{parts[0]}</div>
                      {parts[1] && <p className="text-slate-700 text-sm sm:text-base">{parts.slice(1).join('\n')}</p>}
                    </div>
                  );
                }

                if (paragraph.startsWith('⚠️')) {
                  return (
                    <div key={pIdx} className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl my-4 text-sm sm:text-base flex items-start gap-2.5">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="font-medium">{paragraph}</div>
                    </div>
                  );
                }

                if (paragraph.startsWith('• ')) {
                  const [bulletTitle, ...bulletRest] = paragraph.replace('• ', '').split('\n');
                  return (
                    <div key={pIdx} className="flex items-start gap-2.5 pl-2 my-2 text-slate-700 text-sm sm:text-base">
                      <span className="w-2 h-2 rounded-full bg-[#2f5d8f] shrink-0 mt-2" />
                      <div className="leading-relaxed">
                        <strong className="text-slate-900 font-semibold">{bulletTitle}</strong>
                        {bulletRest.length > 0 && <p className="text-slate-600 mt-0.5">{bulletRest.join('\n')}</p>}
                      </div>
                    </div>
                  );
                }

                if (/^\d+\.\s/.test(paragraph)) {
                  const num = paragraph.match(/^\d+/)?.[0];
                  const text = paragraph.replace(/^\d+\.\s/, '');
                  return (
                    <div key={pIdx} className="flex items-start gap-2.5 pl-2 my-2 text-slate-700 text-sm sm:text-base">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {num}
                      </span>
                      <div className="leading-relaxed text-slate-800">{text}</div>
                    </div>
                  );
                }

                if ((paragraph.includes('7 vetores técnicos críticos') || paragraph === '[TABELA]') && selectedPost.table) {
                  return (
                    <React.Fragment key={pIdx}>
                      {paragraph !== '[TABELA]' && <p className="leading-relaxed">{paragraph}</p>}
                      <div className="my-5 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse text-sm sm:text-base">
                            <thead>
                              <tr className="bg-[#2f5d8f] text-white">
                                {selectedPost.table.headers.map((h, i) => (
                                  <th key={i} className="p-3.5 font-semibold tracking-wide">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {selectedPost.table.rows.map((row, rIdx) => (
                                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className={`p-3.5 align-top ${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}`}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                }

                return <p key={pIdx}>{paragraph}</p>;
              })}
            </div>

            {/* Direct WhatsApp Callout */}
            {selectedPost.whatsappUrl && (
              <div className="mt-8 p-5 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm sm:text-base text-emerald-950 flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <p className="text-emerald-900 font-medium leading-relaxed">
                    {selectedPost.whatsappLabel || 'Entre em contato com nossa equipe especializada e solicite uma análise preliminar da sua demanda.'}
                  </p>
                </div>
                <a
                  href={selectedPost.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>FALAR NO WHATSAPP</span>
                </a>
              </div>
            )}

            {/* Publicação Oficial na Biblioteca do IBAPE Nacional */}
            {selectedPost.ibapeUrl && (
              <div className="mt-6 p-5 bg-blue-50/70 border border-blue-200/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base shadow-xs">
                <div className="flex items-center gap-3 text-slate-800">
                  <div className="w-11 h-11 rounded-xl bg-[#2f5d8f] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm tracking-wider">
                    IBAPE
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm sm:text-base">Artigo Técnico Publicado no IBAPE Nacional</p>
                    <p className="text-slate-600 text-sm mt-0.5">Acesse o trabalho científico na íntegra na Biblioteca Técnica do Instituto Brasileiro de Avaliações e Perícias de Engenharia.</p>
                  </div>
                </div>
                <a
                  href={selectedPost.ibapeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2f5d8f] hover:bg-[#244973] text-white text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer"
                >
                  <span>ACESSAR NO IBAPE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* Referências Normativas e Legais */}
            {selectedPost.references && selectedPost.references.length > 0 && (
              <div className="mt-6 pt-5 border-t border-slate-200 bg-slate-50 p-5 rounded-xl">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  <BookOpen className="w-4 h-4 text-[#2f5d8f]" />
                  <span>Referências Normativas e Legais</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {selectedPost.references.map((ref, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[#2f5d8f] font-bold">•</span>
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-5 rounded-lg">
              <div>
                <div className="font-bold text-slate-900 text-sm sm:text-base">Precisa aplicar este conhecimento à sua demanda?</div>
                <div className="text-sm text-slate-600 mt-0.5">A Callegari Engenharia está à disposição para análise técnica.</div>
              </div>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  const el = document.querySelector('#orcamento');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#2f5d8f] text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-[#244973] uppercase tracking-wider shrink-0 cursor-pointer"
              >
                Solicitar Suporte
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
