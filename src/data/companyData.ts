import { ServiceItem, CaseStudy, Testimonial, BlogPost, RegionCoverage } from '../types';

export const COMPANY_INFO = {
  name: 'Callegari Engenharia',
  tagline: 'Engenharia Legal, Avaliações e Perícias',
  yearsInMarket: 12,
  responsiblePerson: 'Camila Callegari',
  phone: '(27) 98118-8930',
  rawPhone: '5527981188930',
  email: 'contato@callegariengenharia.com.br',
  instagram: '@callegariengenharia',
  instagramUrl: 'https://instagram.com/callegariengenharia',
  location: 'Vitória - ES | Atuação em Todo o Brasil',
  defaultWhatsappMessage: 'Olá! Gostaria de solicitar informações sobre os serviços da Callegari Engenharia.',
  certificationName: 'Certificação AA em Engenharia de Avaliações e Perícias',
  certificationBadge: 'CERTIFICAÇÃO AA',
  certificationDescription: 'Acreditação de nível de excelência técnica técnica máxima para laudos de avaliação imobiliária e perícias judiciais conforme normas ABNT (NBR 14.653).',
  officialLogoUrl: 'https://lh3.googleusercontent.com/d/1Xd1iK-AM0P7s9kfeVSSv_wN3ARnErLBu',
  faviconUrl: 'https://lh3.googleusercontent.com/d/11veDIWuPs17o-5LmNYwhCXD8JBhXaOiN',
  officialLogoDriveUrl: 'https://drive.google.com/file/d/1Xd1iK-AM0P7s9kfeVSSv_wN3ARnErLBu/view?usp=drive_link',
  faviconDriveUrl: 'https://drive.google.com/file/d/11veDIWuPs17o-5LmNYwhCXD8JBhXaOiN/view?usp=drive_link',
  watermarkUrl: 'https://drive.google.com/file/d/17D_hXxHOE7rKwoSh38-ApIhfbrBKqulG/view?usp=drive_link',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'laudos-periciais',
    number: '01',
    title: 'Laudos Periciais',
    shortDescription: 'Elaboração de laudos técnicos com fundamentação, precisão e clareza para suporte a processos judiciais e extrajudiciais.',
    fullDescription: 'Desenvolvimento de laudos periciais rigorosamente fundamentados nas normas da ABNT e na legislação vigente. Traduzimos termos e anomalias de engenharia em pareceres técnicos cristalinos, objetivos e irrefutáveis para instrução processual.',
    applications: [
      'Pareceres técnicos para processos judiciais',
      'Vistorias cautelares de vizinhança e pré-obra',
      'Identificação e nexo causal de patologias construtivas',
      'Produção antecipada de provas'
    ],
    iconName: 'FileText'
  },
  {
    id: 'engenharia-avaliacoes',
    number: '02',
    title: 'Engenharia de Avaliações',
    shortDescription: 'Avaliação técnica de imóveis e bens, considerando critérios técnicos e metodologias adequadas a cada demanda.',
    fullDescription: 'Determinação precisa do valor de mercado de imóveis urbanos, rurais, industriais e complexos empresariais empregando inferência estatística (Método Comparativo Direto) e tratamento científico conforme a NBR 14.653.',
    applications: [
      'Avaliações imobiliárias para partilhas e inventários',
      'Garantias bancárias e reavaliações patrimoniais',
      'Determinação de valor de locação e renovatórias',
      'Avaliação de complexos industriais e rurais'
    ],
    iconName: 'Building2'
  },
  {
    id: 'pericias-engenharia',
    number: '03',
    title: 'Perícias de Engenharia',
    shortDescription: 'Análises técnicas especializadas para identificação, avaliação e esclarecimento de questões relacionadas à engenharia.',
    fullDescription: 'Inspeções e auditorias detalhadas para elucidar causas de sinistros, colapsos estruturais, vícios oculta e divergências contratuais em obras públicas ou privadas.',
    applications: [
      'Apuração de patologias em edificações',
      'Inspeção predial e recebimento de obras',
      'Auditoria técnica em contratos de construção',
      'Análise de cumprimento de especificações normativas'
    ],
    iconName: 'Search'
  },
  {
    id: 'desapropriacoes',
    number: '04',
    title: 'Desapropriações',
    shortDescription: 'Suporte técnico especializado em processos e demandas envolvendo desapropriação.',
    fullDescription: 'Atuação na determinação da justa indenização em processos expropriatórios promovidos pelo Poder Público ou concessionárias, garantindo o correto ressarcimento de imóveis e benfeitorias.',
    applications: [
      'Ações expropriatórias promovidas por entes públicos',
      'Fixação de valor justo de indenização imobiliária',
      'Avaliação de benfeitorias reparáveis e irreparáveis',
      'Contestação técnica de laudos periciais oficiais'
    ],
    iconName: 'Scale'
  },
  {
    id: 'servidoes',
    number: '05',
    title: 'Servidões',
    shortDescription: 'Avaliações e análises técnicas relacionadas à implantação e instituição de servidões.',
    fullDescription: 'Cálculo técnico de indenização por limitação administrativa ou instituição de servidões de passagem (linhas de transmissão, minerodutos, rodovias e adutoras), avaliando a depreciação do remanescente do imóvel.',
    applications: [
      'Servidões administrativas de passagem elétrica e dutos',
      'Cálculo do coeficiente de depreciação do imóvel serviente',
      'Análise do impacto técnico e restrição de uso do solo',
      'Laudos de indenização justa para proprietários e concessionárias'
    ],
    iconName: 'Compass'
  },
  {
    id: 'assistencia-tecnica',
    number: '06',
    title: 'Assistência Técnica para Advogados',
    shortDescription: 'Suporte técnico especializado para advogados e escritórios na interpretação, análise e desenvolvimento de estratégias relacionadas às questões de engenharia.',
    fullDescription: 'Acompanhamento pericial completo desde a elaboração de quesitos estratégicos, participação na diligência de campo com o perito judicial, até a emissão de parecer técnico convergente ou divergente fundamentado.',
    applications: [
      'Formulação de quesitos iniciais e complementares estratégicos',
      'Acompanhamento presencial de diligências periciais',
      'Elaboração de Parecer Técnico Crítico ao laudo judicial',
      'Reuniões alinhamento técnico-jurídico com a equipe de advogados'
    ],
    iconName: 'Briefcase'
  }
];

export const DIFFERENTIALS = [
  {
    title: 'Atendimento personalizado',
    description: 'Cada demanda é analisada individualmente com total dedicação e estudo aprofundado do caso.'
  },
  {
    title: 'Visão técnica e estratégica',
    description: 'Compreensão apurada da questão técnica perfeitamente alinhada ao contexto jurídico processual.'
  },
  {
    title: 'Precisão e Fundamentação',
    description: 'Informações técnicas apresentadas com clareza cristalina, rigor normativo ABNT e objetividade.'
  },
  {
    title: 'Solução sob medida',
    description: 'O trabalho é desenvolvido rigorosamente de acordo com as particularidades de cada demanda.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Você apresenta a demanda',
    description: 'Envie as informações e documentos iniciais do caso via formulário, e-mail ou WhatsApp.'
  },
  {
    number: '02',
    title: 'Analisamos a necessidade',
    description: 'Nossa equipe técnica avalia criteriosamente o contexto jurídico-técnico da questão.'
  },
  {
    number: '03',
    title: 'Definimos a solução',
    description: 'Indicamos o serviço técnico, o plano de trabalho e a metodologia mais adequada.'
  },
  {
    number: '04',
    title: 'Entregamos o resultado',
    description: 'Produzimos o laudo ou parecer técnico com extrema precisão, clareza e responsabilidade.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    title: 'Revisão Indenizatória em Ação Expropriatória',
    type: 'Desapropriação / Avaliação',
    area: 'Direito Administrativo & Imobiliário',
    challenge: 'Avaliação inicial do órgão expropriante apresentou subavaliação expressiva de imóvel de alto valor com benfeitorias não computadas.',
    solution: 'Aplicação do Método Comparativo Direto de Dados de Mercado e Método de Custo de Recomposição para benfeitorias especiais com inferência estatística.',
    result: 'O parecer técnico assistencial fundamentou a decisão judicial, resultando na adequação do valor indenizatório ao valor real de mercado.',
    badge: 'CASO REALIZADO'
  },
  {
    id: 'case-02',
    title: 'Servidão de Passagem de Linha de Transmissão',
    type: 'Servidões Administrativas',
    area: 'Direito de Energia & Infraestrutura',
    challenge: 'Determinação do real impacto e desvalorização no remanescente de propriedade rural após seccionamento por faixa de servidão de alta tensão.',
    solution: 'Estudo do coeficiente de desvalorização considerando zoneamento, restrições agrícolas, riscos e incômodos permanentes.',
    result: 'Elaboração de laudo de avaliação de servidão aceito e homologado extrajudicialmente pelas partes, acelerando o acordo.',
    badge: 'ESTUDO DE CASO'
  },
  {
    id: 'case-03',
    title: 'Perícia Técnica em Ação Renovatória de Aluguel',
    type: 'Engenharia de Avaliações',
    area: 'Direito Imobiliário & Empresarial',
    challenge: 'Divergência significativa entre o valor pleiteado pelo locador e o valor praticado no polo comercial de alta densidade.',
    solution: 'Pesquisa amostragem de dados comparativos rigorosa tratada por regressão linear conforme NBR 14.653-2.',
    result: 'Determinação exata do valor locativo justo, amparando a tese do escritório parceiro e homologando o aluguel razoável.',
    badge: 'PARCERIA JURÍDICA'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'A Callegari Engenharia demonstrou uma clareza técnica exemplar no parecer assistencial de uma ação judicial de grande complexidade. A fundamentação impecável foi determinante para a tese da nossa defesa.',
    name: 'Dr. Roberto Mendonça',
    role: 'Sócio Fundador',
    organization: 'Mendonça & Associados Advocacia',
    initials: 'RM'
  },
  {
    id: 'test-2',
    quote: 'Trabalhar com a Camila Callegari e sua equipe nos traz absoluta tranquilidade. Eles entendem a urgência e a linguagem do meio jurídico, entregando pareceres precisos e quesitos altamente estratégicos.',
    name: 'Dra. Patricia Alencar',
    role: 'Advogada Especialista em Direito Imobiliário',
    organization: 'Alencar Advocacia Cível',
    initials: 'PA'
  },
  {
    id: 'test-3',
    quote: 'Excelente suporte em demandas de engenharia de avaliações e desapropriações. Agilidade na entrega dos laudos e extrema precisão nos cálculos das indenizações.',
    name: 'Dr. Carlos Eduardo Rocha',
    role: 'Coordenador de Contencioso Cível',
    organization: 'Rocha & Varejão Advogados',
    initials: 'CR'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'artigo-1',
    title: 'A importância da formulação estratégica de quesitos na Perícia Judicial',
    category: 'Engenharia Legal',
    readTime: '5 min de leitura',
    date: '10 Ago 2026',
    summary: 'Como os quesitos bem elaborados pelo assistente técnico orientam o perito judicial e evitam laudos omissos ou tendenciosos no processo.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    content: [
      'Na produção da prova pericial de engenharia, a elaboração dos quesitos é uma das etapas mais decisivas para o sucesso processual da demanda.',
      'Muitas vezes, quesitos genéricos deixam margem para respostas superficiais do perito do juízo. Por outro lado, quesitos técnicos bem articulados direcionam a perícia para os pontos essenciais da lide.',
      'O assistente técnico especializado atua lado a lado com o advogado, traduzindo as teses jurídicas em questionamentos normatizados da ABNT, exigindo fundamentação sólida do perito e blindando o processo contra nulidades.'
    ]
  },
  {
    id: 'artigo-2',
    title: 'NBR 14.653: Critérios fundamentais na avaliação imobiliária de alta precisão',
    category: 'Avaliações',
    readTime: '6 min de leitura',
    date: '28 Jul 2026',
    summary: 'Conheça os graus de fundamentação e precisão estipulados pela norma brasileira para laudos imobiliários com validade jurídica.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    content: [
      'A avaliação de um imóvel para fins judiciais ou garantes bancárias não é mera estimativa de valor. Trata-se de um estudo científico regulamentado pela NBR 14.653.',
      'A norma classifica os laudos em Graus de Fundamentação e Precisão (I, II e III). O Grau III representa o nível mais elevado de inferência estatística e coleta de dados comparativos.',
      'Garantir que um laudo atinja o grau adequado é a segurança de que o valor determinado resistirá a impugnações e questionamentos em juízo.'
    ]
  },
  {
    id: 'artigo-3',
    title: 'Indenização Justa em Desapropriações e Servidões Administrativas',
    category: 'Desapropriações',
    readTime: '7 min de leitura',
    date: '15 Jul 2026',
    summary: 'Entenda os conceitos de prejuízo efetivo, depreciação do remanescente e lucros cessantes na instituição de servidões e desapropriações.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    content: [
      'A Constituição Federal garante que a desapropriação por utilidade pública deve ser precedida de justa e prévia indenização em dinheiro.',
      'Entretanto, a fixação desse valor frequentemente omite a depreciação do imóvel remanescente ou prejuízos decorrentes do seccionamento da área por faixas de servidão.',
      'A perícia de engenharia avalia detalhadamente o dano direto e indireto, garantindo que o proprietário ou expropriado receba o ressarcimento exato do impacto patrimonial.'
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
