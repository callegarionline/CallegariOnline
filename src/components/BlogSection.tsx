import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/companyData';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight, X, Clock, Calendar } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2f5d8f] uppercase">
            <BookOpen className="w-4 h-4" />
            CONHECIMENTO & ARTIGOS
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
            Conhecimento técnico para decisões mais seguras.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Artigos técnicos e análises focadas na convergência entre o Direito Imobiliário/Processual e a Engenharia Legal.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
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
                  />
                  <div className="absolute top-3 left-3 bg-[#2f5d8f] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded uppercase shadow">
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-serif line-clamp-2 group-hover:text-[#2f5d8f] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#2f5d8f] hover:text-[#244973] uppercase tracking-wider py-2 border-t border-slate-100"
                >
                  <span>LER ARTIGO COMPLETO</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

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
              <span className="text-xs font-mono bg-[#2f5d8f] text-white font-bold px-2.5 py-1 rounded">
                {selectedPost.category}
              </span>
              <span className="text-xs text-slate-400">{selectedPost.date}</span>
              <span className="text-xs text-slate-400">• {selectedPost.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-6 leading-tight">
              {selectedPost.title}
            </h3>

            <div className="h-64 w-full rounded-xl overflow-hidden mb-6">
              <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-4 text-slate-700 text-sm leading-relaxed font-normal">
              {selectedPost.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-lg">
              <div>
                <div className="font-bold text-slate-900 text-xs">Precisa aplicar este conhecimento à sua demanda?</div>
                <div className="text-xs text-slate-600">A Callegari Engenharia está à disposição para análise técnica.</div>
              </div>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  const el = document.querySelector('#orcamento');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#2f5d8f] text-white text-xs font-bold px-4 py-2.5 rounded hover:bg-[#244973] uppercase tracking-wider shrink-0"
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
