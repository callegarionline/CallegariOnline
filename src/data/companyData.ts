import { ServiceItem, CaseStudy, Testimonial, BlogPost, RegionCoverage } from '../types';

export const COMPANY_INFO = {
  name: 'Callegari Engenharia',
  tagline: 'Assistência Técnica Judicial, Laudos Periciais de Avaliação Imobiliária e Engenharia Legal',
  yearsInMarket: 12,
  responsiblePerson: 'Callegari Engenharia',
  phone: '(27) 98118-8930',
  rawPhone: '5527981188930',
  email: 'contato@callegariengenharia.com.br',
  instagram: '@callegariengenharia',
  instagramUrl: 'https://instagram.com/callegariengenharia',
  location: 'Vitória - ES | Atuação Pericial em Todo o Brasil',
  defaultWhatsappMessage: 'Olá! Preciso de suporte técnico para uma demanda de Assistência Técnica Judicial / Laudo de Avaliação Imobiliária.',
  certificationName: 'Certificação AA em Engenharia de Avaliações e Perícias',
  certificationBadge: 'CERTIFICAÇÃO AA',
  certificationDescription: 'Acreditação técnica de nível máximo para laudos de avaliação imobiliária e perícias judiciais conforme normas ABNT NBR 14.653.',
  officialLogoUrl: 'https://lh3.googleusercontent.com/d/1Xd1iK-AM0P7s9kfeVSSv_wN3ARnErLBu',
  faviconUrl: 'https://lh3.googleusercontent.com/d/11veDIWuPs17o-5LmNYwhCXD8JBhXaOiN',
  officialLogoDriveUrl: 'https://drive.google.com/file/d/1Xd1iK-AM0P7s9kfeVSSv_wN3ARnErLBu/view?usp=drive_link',
  faviconDriveUrl: 'https://drive.google.com/file/d/11veDIWuPs17o-5LmNYwhCXD8JBhXaOiN/view?usp=drive_link',
  watermarkUrl: 'https://drive.google.com/file/d/17D_hXxHOE7rKwoSh38-ApIhfbrBKqulG/view?usp=drive_link',
  sealDriveUrl: 'https://drive.google.com/file/d/17D_hXxHOE7rKwoSh38-ApIhfbrBKqulG/view?usp=drive_link',
  sealDirectUrl: 'https://lh3.googleusercontent.com/d/17D_hXxHOE7rKwoSh38-ApIhfbrBKqulG',
  sealFallbackUrl: 'https://drive.google.com/uc?export=view&id=17D_hXxHOE7rKwoSh38-ApIhfbrBKqulG',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'desapropriacoes',
    number: '01',
    title: 'Desapropriações',
    shortDescription: 'Apuração do justo valor de indenização, mensuração de prejuízos efetivos e análise do impacto na área remanescente.',
    fullDescription: 'Defesa técnica do valor indenizatório contra ofertas públicas subavaliadas em processos expropriatórios. Avaliamos terrenos, benfeitorias reprodutíveis, lucros cessantes e prejuízos no remanescente, apresentando pareceres periciais que combatem laudos oficiais subdimensionados.',
    applications: [
      'Apuração do justo valor de indenização prévia e definitiva',
      'Mensuração de prejuízos efetivos e lucros cessantes',
      'Análise de desvalorização e impacto na área remanescente',
      'Assistência técnica em ações expropriatórias e desapropriação indireta'
    ],
    iconName: 'FileText'
  },
  {
    id: 'servidoes-administrativas',
    number: '02',
    title: 'Servidões Administrativas',
    shortDescription: 'Cálculo de depreciação e determinação de coeficientes de indenização para linhas de transmissão, gasodutos e infraestrutura.',
    fullDescription: 'Determinação precisa do impacto econômico causado pela instituição de servidões administrativas. Calculamos o coeficiente de desvalorização do imóvel serviente decorrente de restrições de uso, periculosidade e seccionamento territorial.',
    applications: [
      'Cálculo de coeficientes de indenização para linhas de transmissão',
      'Faixas de servidão para gasodutos, minerodutos e adutoras',
      'Determinação de depreciação econômica e restrição de uso',
      'Pareceres técnicos para acordos e defesas judiciais'
    ],
    iconName: 'Compass'
  },
  {
    id: 'contestacao-tributaria',
    number: '03',
    title: 'Contestação Tributária (ITBI / IPTU / ITCMD)',
    shortDescription: 'Identificação de superavaliações fiscais e revisão de bases de cálculo com fundamentação estatística aceita pelos tribunais e Fisco.',
    fullDescription: 'Elaboramos laudos periciais de avaliação imobiliária de acordo com as normas ABNT NBR 14.653 e jurisprudência consolidada (Tema 1.113 do STJ) para afastar bases de cálculo fictícias ou abusivas fixadas pelo Fisco.',
    applications: [
      'Identificação de superavaliações e pautas fiscais arbitrárias',
      'Revisão administrativa e judicial da base de cálculo do ITBI',
      'Contestação de IPTU abusivo e reavaliação cadastral municipal',
      'Laudos para defesa e apuração do justo valor em ITCMD'
    ],
    iconName: 'Scale'
  },
  {
    id: 'assistencia-tecnica-judicial',
    number: '04',
    title: 'Assistência Técnica Judicial',
    shortDescription: 'Acompanhamento de vistorias, elaboração de quesitos, impugnação de laudos desfavoráveis e pareceres pré-constituídos.',
    fullDescription: 'Atuação pericial estratégica em todas as fases do processo judicial. Formulamos quesitos assertivos, participamos das vistorias de campo e elaboramos pareceres técnicos divergentes para embasar as manifestações e teses dos advogados.',
    applications: [
      'Acompanhamento presencial de vistorias e diligências periciais',
      'Elaboração de quesitos estratégicos, suplementares e elucidativos',
      'Impugnação fundamentada de laudos periciais judiciais desfavoráveis',
      'Pareceres técnicos pré-constituídos para instrução da petição inicial'
    ],
    iconName: 'Briefcase'
  }
];

export const DIFFERENTIALS = [
  {
    title: 'Foco na Solução do Problema',
    description: 'Não entregamos laudos genéricos. Desenvolvemos teses técnicas sob medida para vencer a lide e dar segurança à decisão.'
  },
  {
    title: 'Alinhamento Técnico-Jurídico',
    description: 'Falamos a linguagem do Direito e traduzimos a complexidade da Engenharia em argumentos processuais claros e irrefutáveis.'
  },
  {
    title: 'Blindagem contra Impugnações',
    description: 'Laudos 100% aderentes à ABNT NBR 14.653 e com ART no CREA, garantindo peso probatório incontestável no processo.'
  },
  {
    title: 'Agilidade & Suporte Direto',
    description: 'Atendimento consultivo direto com a engenheira responsável para cumprir prazos judiciais com rigor e presteza.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Apresente seu caso ou processo',
    description: 'Envie os detalhes da lide, autos processuais ou endereço do imóvel para análise prévia sem compromisso.'
  },
  {
    number: '02',
    title: 'Diagnóstico e estratégia técnica',
    description: 'Identificamos as normas ABNT aplicáveis, os pontos críticos da prova pericial e o escopo exato do trabalho.'
  },
  {
    number: '03',
    title: 'Vistoria e perícia rigorosa',
    description: 'Realizamos a diligência técnica no local com equipamentos de precisão e coleta de dados científicos de mercado.'
  },
  {
    number: '04',
    title: 'Entrega do Laudo ou Parecer',
    description: 'Você recebe um documento pericial robusto, claro e com ART registrado no CREA, pronto para instruir ou vencer a causa.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    title: 'Revisão Indenizatória em Ação Expropriatória',
    type: 'Desapropriação / Avaliação Imobiliária',
    area: 'Direito Administrativo & Imobiliário',
    challenge: 'Avaliação inicial do órgão expropriante apresentou subavaliação expressiva de imóvel de alto valor com benfeitorias não computadas.',
    solution: 'Aplicação do Método Comparativo Direto de Dados de Mercado e Método de Custo de Recomposição para benfeitorias especiais com inferência estatística ABNT.',
    result: 'O parecer técnico assistencial fundamentou a decisão judicial, resultando na adequação do valor indenizatório ao valor real de mercado.',
    badge: 'RESULTADO COMPROVADO'
  },
  {
    id: 'case-02',
    title: 'Contestação de Base de Cálculo de ITBI',
    type: 'Contestação de ITBI / Avaliação ABNT',
    area: 'Direito Tributário Imobiliário',
    challenge: 'Fisco municipal arbitrou valor venal de referência 45% superior ao real valor de mercado praticado na compra e venda do imóvel corporativo.',
    solution: 'Elaboração de Laudo Pericial de Avaliação Imobiliária com tratamento estatístico por regressão linear conforme NBR 14.653-2.',
    result: 'Homologação judicial da base de cálculo real, gerando expressiva economia tributária e repetição do valor recolhido a maior.',
    badge: 'ECONOMIA TRIBUTÁRIA'
  },
  {
    id: 'case-03',
    title: 'Assistência Técnica em Ação Renovatória de Aluguel',
    type: 'Assistência Técnica Judicial',
    area: 'Direito Imobiliário & Empresarial',
    challenge: 'Divergência significativa entre o valor pleiteado pelo locador e o valor praticado no polo comercial de alta densidade.',
    solution: 'Formulação de quesitos estratégicos e parecer técnico crítico demonstrando desvios na amostragem adotada pelo laudo do juízo.',
    result: 'Determinação exata do valor locativo justo, amparando a tese do advogado e fixando aluguel compatível com a realidade de mercado.',
    badge: 'DEFESA TÉCNICA'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'A Callegari Engenharia demonstrou uma clareza técnica exemplar no parecer de assistência técnica judicial. A fundamentação impecável foi o ponto central para vencer a impugnação do laudo pericial.',
    name: 'Dr. Roberto Mendonça',
    role: 'Sócio Fundador',
    organization: 'Mendonça & Associados Advocacia',
    initials: 'RM'
  },
  {
    id: 'test-2',
    quote: 'Trabalhar com a Callegari Engenharia nos traz absoluta segurança. Eles entendem a urgência dos prazos processuais e a linguagem do Direito, entregando pareceres e quesitos altamente estratégicos.',
    name: 'Dra. Patricia Alencar',
    role: 'Advogada Especialista em Direito Imobiliário',
    organization: 'Alencar Advocacia Cível',
    initials: 'PA'
  },
  {
    id: 'test-3',
    quote: 'Excelente suporte em laudos periciais de avaliação imobiliária e contestação de tributos. Agilidade na entrega e extrema precisão técnica em todo o Brasil.',
    name: 'Dr. Carlos Eduardo Rocha',
    role: 'Coordenador de Contencioso Cível',
    organization: 'Rocha & Varejão Advogados',
    initials: 'CR'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'artigo-1',
    title: 'Assistência Técnica Judicial: Como a formulação estratégica de quesitos decide a perícia',
    category: 'Assistência Técnica Judicial',
    readTime: '5 min de leitura',
    date: '10 Ago 2026',
    summary: 'Descubra como os quesitos elaborados pelo assistente técnico orientam o perito judicial, fecham brechas e evitam laudos omissos ou tendenciosos no processo.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    content: [
      'Na produção da prova pericial de engenharia, a elaboração dos quesitos é uma das etapas mais decisivas para o sucesso processual da demanda.',
      'Muitas vezes, quesitos genéricos deixam margem para respostas superficiais do perito do juízo. Por outro lado, quesitos técnicos bem articulados direcionam a perícia para os pontos essenciais da lide.',
      'O assistente técnico especializado atua lado a lado com o advogado, traduzindo as teses jurídicas em questionamentos normatizados da ABNT, exigindo fundamentação sólida do perito e blindando o processo contra nulidades.'
    ]
  },
  {
    id: 'artigo-2',
    title: 'Laudo Pericial de Avaliação Imobiliária (NBR 14.653): Segurança em inventários e partilhas',
    category: 'Avaliação Imobiliária',
    readTime: '6 min de leitura',
    date: '28 Jul 2026',
    summary: 'Conheça os graus de fundamentação e precisão estipulados pela ABNT para laudos imobiliários com validade jurídica incontestável.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    content: [
      'A avaliação de um imóvel para fins judiciais ou garantes bancárias não é mera estimativa de valor. Trata-se de um estudo científico regulamentado pela NBR 14.653.',
      'A norma classifica os laudos em Graus de Fundamentação e Precisão (I, II e III). O Grau III representa o nível mais elevado de inferência estatística e coleta de dados comparativos.',
      'Garantir que um laudo atinja o grau adequado é a segurança de que o valor determinado resistirá a impugnações e questionamentos em juízo.'
    ]
  },
  {
    id: 'artigo-3',
    title: 'Contestação de ITBI e IPTU: Como laudos periciais reduzem impostos abusivos',
    category: 'Contestação de ITBI/IPTU',
    readTime: '7 min de leitura',
    date: '15 Jul 2026',
    summary: 'Entenda como o Tema 1.113 do STJ garante o direito à revisão da base de cálculo do ITBI e como o laudo técnico viabiliza a economia tributária.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    content: [
      'O Superior Tribunal de Justiça consolidou o entendimento de que o valor venal de referência municipal não pode ser arbitrado unilateralmente pelo Fisco para cobrança de ITBI.',
      'Com o laudo técnico pericial fundamentado na NBR 14.653, o contribuinte comprova documentalmente o valor real da operação imobiliária.',
      'Essa prova pericial é o instrumento indispensável para impugnar cobranças indevidas tanto na esfera administrativa quanto judicialmente.'
    ]
  }
];

export const NATIONAL_COVERAGE_REGIONS: RegionCoverage[] = [
  {
    region: 'Região Sudeste',
    states: ['ES', 'SP', 'RJ', 'MG'],
    description: 'Sede administrativa em Vitória - ES com pronta capacidade de atuação em São Paulo, Rio de Janeiro e Minas Gerais.',
    highlightCities: ['Vitória', 'Vila Velha', 'Serra', 'São Paulo', 'Rio de Janeiro', 'Belo Horizonte']
  },
  {
    region: 'Região Sul',
    states: ['PR', 'SC', 'RS'],
    description: 'Atendimento especializado para perícias rurais, industriais e demandas de concessionárias nas capitais e interior.',
    highlightCities: ['Curitiba', 'Florianópolis', 'Porto Alegre']
  },
  {
    region: 'Região Centro-Oeste',
    states: ['DF', 'GO', 'MT', 'MS'],
    description: 'Suporte a tribunal superior em Brasília, avaliações de agronegócio e servidões de infraestrutura.',
    highlightCities: ['Brasília', 'Goiânia', 'Cuiabá', 'Campo Grande']
  },
  {
    region: 'Regiões Nordeste & Norte',
    states: ['BA', 'PE', 'CE', 'MA', 'PA', 'AM', 'Outros'],
    description: 'Atuação remota e presencial em perícias estratégicas, parques eólicos, mineração e projetos de grande porte.',
    highlightCities: ['Salvador', 'Recife', 'Fortaleza', 'Belém', 'Manaus']
  }
];

