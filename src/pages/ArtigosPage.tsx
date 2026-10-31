import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../data/companyData';
import { BlogPost } from '../types';
import {
  BookOpen,
  ArrowLeft,
  Calendar,
  Clock,
  ArrowRight,
  X,
  Search,
  Filter,
  ChevronDown,
  MessageSquare,
  User,
  MessageCircle,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';

interface ArtigosPageProps {
  onBackToHome: () => void;
  onOpenBudgetModal: () => void;
}

export const ArtigosPage: React.FC<ArtigosPageProps> = ({
  onBackToHome,
  onOpenBudgetModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // 4 colunas x 4 linhas = 16 artigos iniciais
  const INITIAL_BATCH = 16;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_BATCH);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Atualização dinâmica de SEO (Title e Meta Description) quando um artigo estiver aberto
  useEffect(() => {
    if (selectedPost) {
      if (selectedPost.metaTitle) {
        document.title = `${selectedPost.metaTitle} | Callegari Engenharia`;
      } else {
        document.title = `${selectedPost.title} | Callegari Engenharia`;
      }
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && selectedPost.metaDescription) {
        metaDesc.setAttribute('content', selectedPost.metaDescription);
      }
    } else {
      document.title = 'Artigos & Publicações Técnicas | Callegari Engenharia';
    }
  }, [selectedPost]);

  // Categorias estritas solicitadas: Assistência Técnica Judicial, Desapropriação, Inspeção Predial, Direito Societário, Avaliação Locativa e Avaliação Imobiliária
  const ALLOWED_CATEGORIES = [
    'Assistência Técnica Judicial',
    'Desapropriação',
    'Inspeção Predial',
    'Direito Societário',
    'Avaliação Locativa',
    'Avaliação Imobiliária'
  ];

  // Unique categories list respeitando estritamente o filtro
  const categories = ['Todos', ...ALLOWED_CATEGORIES.filter((cat) => BLOG_POSTS.some((p) => p.category === cat))];

  // Filtered posts based on allowed categories, active category and search
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const isAllowed = ALLOWED_CATEGORIES.includes(post.category);
    if (!isAllowed) return false;

    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Current slice of posts to display
  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + INITIAL_BATCH);
  };

  return (
    <div className="pt-32 sm:pt-40 lg:pt-44 pb-20 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb & Back Button */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2f5d8f] hover:text-[#234870] uppercase tracking-wider bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Principal</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span className="hover:underline cursor-pointer" onClick={onBackToHome}>
              Home
            </span>
            <span>/</span>
            <span className="text-[#2f5d8f] font-bold">Conhecimento & Artigos</span>
          </div>
        </div>

        {/* Top Hero Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-2xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#2f5d8f] text-white text-xs font-bold tracking-widest px-3.5 py-1.5 rounded-full uppercase">
              <BookOpen className="w-4 h-4 text-emerald-300" />
              <span>CONHECIMENTO & ARTIGOS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight">
              Artigos Técnicos e Fundamentação em Engenharia Legal
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Acervo completo de publicações, análises jurisprudenciais, normas técnicas da ABNT e metodologias de avaliação e perícia judicial para embasar decisões com total rigor técnico.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400 font-mono">
              <span>{BLOG_POSTS.length} ARTIGOS PUBLICADOS</span>
              <span>•</span>
              <span>ATUALIZAÇÃO CONSTANTE</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white rounded-2xl p-6 mb-10 shadow-sm border border-slate-200 space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(INITIAL_BATCH);
                }}
                placeholder="Buscar por tema, norma ou palavra-chave..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f5d8f] focus:bg-white transition-all text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs text-slate-500 font-medium">
              Exibindo <span className="font-bold text-[#2f5d8f]">{displayedPosts.length}</span> de{' '}
              <span className="font-bold text-slate-800">{filteredPosts.length}</span> artigos encontrados
            </div>
          </div>

          {/* Categories Pill List */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5" />
              Categorias:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(INITIAL_BATCH);
                }}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2f5d8f] text-white font-bold shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 COLUMNS X 4 ROWS GRID (16 INITIAL ITEMS) */}
        {displayedPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="h-44 w-full overflow-hidden relative bg-slate-100">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#2f5d8f] text-white text-xs font-bold tracking-wider px-2.5 py-1 rounded shadow max-w-[85%] truncate">
                      {post.category}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2f5d8f]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#2f5d8f]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-slate-900 font-serif leading-snug group-hover:text-[#2f5d8f] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                      {post.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full inline-flex items-center justify-between text-sm font-bold text-[#2f5d8f] hover:text-[#244973] uppercase tracking-wider py-2.5 border-t border-slate-100 cursor-pointer group-hover:border-blue-100"
                  >
                    <span>LER ARTIGO</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">Nenhum artigo encontrado</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Não encontramos nenhum artigo com os termos pesquisados. Tente alterar o termo ou selecionar outra categoria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#2f5d8f] hover:underline"
            >
              Limpar filtros e ver todos
            </button>
          </div>
        )}

        {/* "MOSTRAR MAIS" BUTTON IF HAS MORE THAN INITIAL BATCH */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-3 bg-[#2f5d8f] hover:bg-[#234870] text-white text-sm sm:text-base font-bold uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>MOSTRAR MAIS ARTIGOS</span>
              <span className="bg-blue-800/60 px-2.5 py-1 rounded text-xs font-mono">
                +{filteredPosts.length - visibleCount} restantes
              </span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}

        {/* Bottom CTA Block */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serif">
              Precisa de fundamentação técnica para a sua demanda?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Nossa equipe atua em assistência técnica judicial, perícias e avaliações de alta complexidade em todo o território nacional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenBudgetModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2f5d8f] hover:bg-[#234870] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow transition-all cursor-pointer"
            >
              <span>SOLICITAR ANÁLISE PRÉVIA</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center text-slate-300 hover:text-white text-xs font-semibold px-4 py-3.5 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Voltar à Home
            </button>
          </div>
        </div>

      </div>

      {/* Full Article Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-10 relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-mono bg-[#2f5d8f] text-white font-bold px-2.5 py-1 rounded">
                {selectedPost.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedPost.date}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4 leading-tight">
              {selectedPost.title}
            </h2>

            {/* Author Byline */}
            {selectedPost.author && (
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl mb-6">
                <div className="w-7 h-7 rounded-full bg-[#2f5d8f]/10 flex items-center justify-center text-[#2f5d8f] shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <span>{selectedPost.author}</span>
              </div>
            )}

            <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
              {selectedPost.content.map((paragraph, pIdx) => {
                // Seção com Emoji / Cabeçalho
                if (/^(📍|📊|⚖️|🛠️|🚫|❌|🏛️|📩|📚|💡|📈|🎯|🏢)/.test(paragraph)) {
                  return (
                    <h3
                      key={pIdx}
                      className="text-lg sm:text-xl font-bold text-slate-900 mt-6 pt-3 pb-1 border-b border-slate-100 flex items-center gap-2"
                    >
                      {paragraph}
                    </h3>
                  );
                }

                // Citações em destaque
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

                // Exemplo Prático de Mercado
                if (paragraph.startsWith('Exemplo Prático de Mercado:')) {
                  const parts = paragraph.split('\n');
                  const header = parts[0];
                  const body = parts.slice(1).join('\n');
                  return (
                    <div key={pIdx} className="bg-slate-50 border-l-4 border-[#2f5d8f] p-4 rounded-r-xl my-4 space-y-1.5">
                      <div className="font-bold text-slate-900 text-sm sm:text-base">{header}</div>
                      {body && <p className="text-slate-700 text-sm sm:text-base">{body}</p>}
                    </div>
                  );
                }

                // Alerta Técnico
                if (paragraph.startsWith('⚠️')) {
                  return (
                    <div key={pIdx} className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl my-4 text-sm sm:text-base flex items-start gap-2.5">
                      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="font-medium">{paragraph}</div>
                    </div>
                  );
                }

                // Lista com bullet
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

                // Lista numerada
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

                // Tabela (seja diagnóstica ou estatística)
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

                return (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Chamada para Contato via WhatsApp */}
            {selectedPost.whatsappUrl && (
              <div className="mt-8 p-5 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-emerald-950 flex items-center gap-2.5">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-lg shadow-sm transition-all shrink-0 cursor-pointer"
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

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-5 rounded-xl">
              <div>
                <div className="font-bold text-slate-900 text-sm sm:text-base">Precisa aplicar este conhecimento à sua demanda jurídica ou patrimonial?</div>
                <div className="text-sm text-slate-600 mt-0.5">A Callegari Engenharia oferece pareceres e laudos sob medida.</div>
              </div>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  onOpenBudgetModal();
                }}
                className="bg-[#2f5d8f] text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-[#244973] uppercase tracking-wider shrink-0 cursor-pointer"
              >
                Solicitar Suporte
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
