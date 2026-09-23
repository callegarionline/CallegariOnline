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
  linkedinUrl: 'https://www.linkedin.com/company/callegari-engenharia',
  googleBusinessUrl: 'https://maps.google.com/?q=Callegari+Engenharia+Vit%C3%B3ria+ES',
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
  // Foto oficial exata de Camila Callegari (pode ser link direto do Google Drive ou caminho local)
  camilaPhotoDriveUrl: '',
  camilaPhotoDirectUrl: '',
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
    id: 'demarcacao-terrenos-marinha-conceicao-da-barra',
    title: 'Demarcação de Terrenos de Marinha em Conceição da Barra: Seu Imóvel Pode Estar Sendo Cobrado Indevidamente?',
    author: 'Por Camila Callegari | Engenheira Civil, Mestre em Engenharia de Avaliações e CEO da Callegari Engenharia',
    metaTitle: 'Terrenos de Marinha em Conceição da Barra: Cobrança Indevida e Fragilidades da SPU',
    metaDescription: 'Descubra as falhas técnicas e cartográficas na demarcação de terrenos de marinha pela SPU em Conceição da Barra/ES e como contestar taxas indevidas.',
    category: 'Assistência Técnica Judicial',
    readTime: '6 min de leitura',
    date: '20 Set 2026',
    summary: 'Estudo técnico detalhado revela que o método da SPU para definir os limites da União em Conceição da Barra/ES possui falhas graves, ignorando a erosão costeira e usando dados cartográficos defasados.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Você já se perguntou se as taxas de foro e laudêmio cobradas sobre o seu imóvel no litoral são realmente legítimas? A demarcação dos Terrenos de Marinha pela Superintendência do Patrimônio da União (SPU) tem gerado insegurança jurídica e fortes controvérsias em todo o Brasil.',
      'Um estudo técnico detalhado sobre o município de Conceição da Barra/ES revela que o método utilizado para definir os limites da União possui falhas graves, ignorando a erosão costeira e utilizando dados cartográficos desatualizados.',
      'Compreenda as fragilidades técnicas desse processo administrativo e descubra como elas impactam diretamente a propriedade imobiliária na região.',
      '📍 O que é a LPM/1831 e Como Funciona a Demarcação?',
      'A legislação brasileira define como terrenos de marinha a faixa de 33 metros contados a partir da Linha de Preamar Médio de 1831 (LPM/1831), ou seja, a média das marés altas do ano de 1831.',
      'Regimes de Posse e Cobranças Gerais:',
      '• Regime de Ocupação: O cidadão detém apenas o uso temporário e paga uma taxa anual (foro) à União.',
      '• Regime de Aforamento: O ocupante detém um direito de uso de longo prazo (até 50 anos) e paga o laudêmio no momento da transferência ou concessão.',
      '• Terreno Alodial: Propriamente dito, a terra de propriedade privada, sem vínculos ou obrigações com a União.',
      '📍 As Fragilidades do Processo Administrativo em Conceição da Barra/ES',
      'No processo administrativo nº 04947.201124/2015-76, promovido pela SPU/ES, a comissão demarcatória cobriu a orla da Praia Central até a divisa com a Bahia. O exame detalhado do processo revela pontos críticos que comprometem a precisão do traçado:',
      '1. Distância Temporal dos Dados Utilizados: Para tentar reproduzir a maré alta de 1831, a SPU utilizou fotos aéreas das décadas de 1955, 1970 e restituições cartográficas de 1996 e 2014. O hiato de mais de um século entre a norma legal e os dados empregados reduz drasticamente a precisão histórica das linhas demarcadas.',
      '2. Dados Maregráficos Distantes: A cota básica aplicada ao estuário do Rio Itaúnas baseou-se em estudos da Estação Maregráfica da Ilha do Urubu, em Vitória/ES, a mais de 250 km de distância de Conceição da Barra.',
      '3. Ocultação do Avanço do Mar e Erosão Costeira: O litoral norte do Espírito Santo é historicamente afetado por intensa erosão costeira. Fotos de satélite históricas demonstram que em locais como a Praia de Guaxindiba, a distância da praia foi reduzida pela metade nos últimos 20 anos.',
      'Se o mar avançou dezenas de metros nas últimas décadas, a linha de maré alta de 1831 hoje encontra-se, na verdade, submersa sob o oceano.',
      '“Considerando o decurso do tempo e os fatores climáticos, as linhas de preamar média de 1831 estão, na sua maioria, debaixo d\'água ao longo da costa brasileira.”\n— Dr. Obede Pereira de Lima, Engenheiro Cartógrafo e Doutor pela UFSC.',
      '⚖️ Decisões Judiciais e Tendências Legislativas',
      'A contestação da metodologia da SPU não ocorre apenas na engenharia, mas também no âmbito jurídico e legislativo:',
      '• Decisões na Justiça Federal: Em Pernambuco (Processo 0021238-84.2007.4.05.8300), a Justiça Federal considerou ilegais as cobranças de foro e laudêmio em áreas onde a maré tomou o terreno, decretando que as áreas originais de 1831 estão submersas.',
      '• Propostas no Congresso: Propostas como a PEC 39/2011 e a PEC 3/2022 discutem a extinção do instituto dos terrenos de marinha ou a transferência do domínio pleno aos ocupantes particulares.',
      '🏛️ O Impacto Direto para Proprietários e Investidores',
      'A adoção de critérios genéricos e dados defasados por parte da SPU gera insegurança jurídica e custos indevidos a proprietários e municípios. Contextos territoriais dinâmicos exigem perícias técnicas multidisciplinares e análises de dinâmica costeira específicas antes de qualquer cobrança patrimonial.',
      'Precisa de avaliação técnica ou pericial sobre o seu imóvel em área litorânea?\nA equipe da Callegari Engenharia conta com especialistas em perícias imobiliárias e análise de demarcações territoriais.'
    ],
    whatsappUrl: 'https://wa.me/5527981188930?text=Ol%C3%A1%2C%20Callegari%20Engenharia%21%20Li%20o%20artigo%20sobre%20Terrenos%20de%20Marinha%20em%20Concei%C3%A7%C3%A3o%20da%20Barra%20e%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20t%C3%A9cnica%20das%20taxas%20patrimoniais%20do%20meu%20im%C3%B3vel.',
    whatsappLabel: 'Entre em contato com nossos especialistas e faça uma avaliação técnica das suas taxas patrimoniais via WhatsApp.',
    ibapeUrl: 'https://biblioteca.ibape-nacional.com.br/analise-tecnica-do-processo-de-demarcacao-da-linha-preamar-medio-de-1831-estudo-de-caso-do-municipio-de-conceicao-da-barra-es/',
    references: [
      'IBAPE Nacional: Análise Técnica do Processo de Demarcação da Linha Preamar Médio de 1831 – Estudo de Caso do Município de Conceição da Barra/ES.',
      'Decreto-Lei nº 9.760/1946 e Lei nº 9.636/1998 (Regime Jurídico dos Terrenos de Marinha e LPM/1831).',
      'Processo Administrativo SPU/ES nº 04947.201124/2015-76.',
      'Justiça Federal - TRF5 - Ação Ordinária Processo nº 0021238-84.2007.4.05.8300.'
    ]
  },
  {
    id: 'precificacao-alugueis-comerciais-modelo-mrlr',
    title: 'Como Precificar Aluguéis Comerciais em Cidades de Pequeno e Médio Porte: O Modelo MRLR',
    author: 'Por Camila Callegari | Engenheira Civil, Mestre em Engenharia de Avaliações e CEO da Callegari Engenharia',
    metaTitle: 'Como Precificar Aluguéis Comerciais: Modelo MRLR da Callegari Engenharia',
    metaDescription: 'Conheça o Modelo de Regressão Linear Regional (MRLR) desenvolvido pela Callegari Engenharia para avaliação precisa de aluguéis comerciais no interior conforme a NBR 14653.',
    category: 'Avaliação Locativa',
    readTime: '7 min de leitura',
    date: '20 Set 2026',
    summary: 'Desenvolvido e validado pela Callegari Engenharia, o Modelo de Regressão Linear Regional (MRLR) combina variáveis físicas e socioeconômicas para precificar aluguéis comerciais com Grau III de fundamentação.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Precificar aluguéis comerciais fora das grandes metrópoles sempre foi um dos maiores desafios da Engenharia de Avaliações. Em municípios de pequeno e médio porte, a escassez de dados comparáveis e a alta subjetividade dos proprietários costumam comprometer a precisão dos laudos.',
      'Para superar essa limitação, a Callegari Engenharia desenvolveu e validou o Modelo de Regressão Linear Regional (MRLR). Essa metodologia combina variáveis físicas do imóvel a dados socioeconômicos do município, garantindo avaliações científicas, precisas e aderentes às normas da ABNT (NBR 14653).',
      '📍 O Desafio da Avaliação Imobiliária no Interior',
      'No Brasil, cerca de 88% dos municípios possuem menos de 50.000 habitantes (IBGE). Nesses locais, o mercado de locação comercial apresenta características específicas que dificultam a avaliação pelo Método Comparativo Direto convencional:',
      '• Baixa rotatividade e sigilo: Poucas ofertas públicas disponíveis e valores efetivos de transação raramente divulgados.',
      '• Subjetividade de preços: Imóveis adaptados de antigas residências com aluguéis definidos sem critério técnico.',
      '• Ausência de gestão imobiliária profissional: Pouca presença de imobiliárias especializadas para balizar o mercado local.',
      'Esse cenário cria insegurança para agências bancárias, investidores, órgãos públicos e empresas que precisam fundamentar tecnicamente seus contratos de locação.',
      '💡 A Solução: O que é o Modelo de Regressão Linear Regional (MRLR)?',
      'O MRLR é uma abordagem estatística que expande a coleta de dados para além das fronteiras de um único município. Ao cruzar informações de uma região homogênea, o modelo utiliza duas categorias de variáveis para prever o valor justo do metro quadrado (R$/m²):',
      '1. Variáveis Endógenas (Características do Imóvel): Atributos intrínsecos e extrínsecos do bem avaliado como Área Total (m²), Padrão Construtivo (classificação do acabamento e estado de conservação em Baixo, Normal ou Alto) e Localização (nível de fluxo de pedestres e veículos em Baixo/Médio ou Alto fluxo).',
      '2. Variáveis Exógenas (Indicadores Regionais): Dados econômicos da cidade onde o imóvel está inserido, incluindo Porte do Município (classificação populacional segundo o IBGE), PIB Municipal (força econômica e capacidade de geração de riqueza local) e Fator Econômico (indicador binário para municípios com destaques econômicos regionais, como polo industrial de granito ou cooperativas agrícolas).',
      '📊 Estudo de Caso: Validação no Estado do Espírito Santo',
      'O modelo foi testado e validado a partir de uma amostra de 348 dados imobiliários distribuídos em 27 municípios capixabas (incluindo Aracruz, Cachoeiro de Itapemirim, Colatina, Guarapari, Linhares e São Mateus).',
      '📈 Desempenho Estatístico do Modelo',
      'O tratamento dos dados via inferência estatística atingiu o Grau III de Fundamentação da NBR 14653-2, com excelentes indicadores de precisão:',
      '[TABELA]',
      '🎯 Testes Práticos: Margem de Erro Inferior a 3%',
      'Para comprovar a eficácia da fórmula em cenários reais, o modelo foi confrontado com ofertas ativas de mercado em diferentes regiões do Espírito Santo:',
      '• Guaçuí (Pequeno Porte): Valor Anunciado: R$ 900,00/mês | Projeção pelo MRLR: R$ 884,44/mês (Diferença: < 2%)',
      '• Guarapari (Médio/Grande Porte Turístico): Valor Anunciado: R$ 1.000,00/mês | Projeção pelo MRLR: R$ 979,47/mês (Diferença: < 3%)',
      '• Aracruz (Polo Industrial): Valor Anunciado: R$ 1.100,00/mês | Projeção pelo MRLR: R$ 1.077,45/mês (Diferença: < 3%)',
      '🏛️ Aplicações Práticas para Negócios e Laudos Judiciais',
      'A metodologia MRLR desenvolvida pela Callegari Engenharia oferece uma base sólida para a tomada de decisão estratégica em diversos cenários:',
      '• Ações Renovatórias e Revisionais de Aluguel: Fundamentação jurídica robusta para instrução de processos judiciais.',
      '• Gestão de Carteiras Imobiliárias: Precificação padronizada para redes bancárias, farmácias e varejistas com presença multimunicipal.',
      '• Avaliação de Ativos Públicos: Subsidiação técnica para processos de locação ou alienação por órgãos governamentais.',
      'Precisa de uma avaliação imobiliária precisa e fundamentada?\nA Callegari Engenharia é especialista na elaboração de laudos de avaliação patrimonial com rigor científico e conformidade normativa.'
    ],
    table: {
      headers: ['Indicador Estatístico', 'Resultado Obtido', 'Significado Prático'],
      rows: [
        ['Coeficiente de Determinação (R²)', '86,33%', 'O modelo explica 86,33% das variações de preço do mercado.'],
        ['Estatística F (Anova)', '325,90', 'Rejeição da hipótese nula com significância de 0,01%.'],
        ['Significância dos Regressores', '< 10%', 'Todas as variáveis selecionadas são estatisticamente relevantes.']
      ]
    },
    whatsappUrl: 'https://wa.me/5527981188930?text=Ol%C3%A1%2C%20Callegari%20Engenharia%21%20Li%20o%20artigo%20sobre%20o%20Modelo%20MRLR%20para%20Alugu%C3%A9is%20Comerciais%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20avalia%C3%A7%C3%A3o%20locativa.',
    whatsappLabel: 'Entre em contato com nossos especialistas e solicite um orçamento para avaliação locativa via WhatsApp.',
    ibapeUrl: 'https://biblioteca.ibape-nacional.com.br/modelo-de-regressao-linear-regional-mrlr-para-imoveis-comerciais-em-municipios-de-pequeno-e-medio-porte-um-estudo-de-caso/',
    references: [
      'IBAPE Nacional: Modelo de Regressão Linear Regional (MRLR) para Imóveis Comerciais em Municípios de Pequeno e Médio Porte: Um Estudo de Caso.',
      'ABNT NBR 14653-2: Avaliação de Bens – Parte 2: Imóveis Urbanos (Procedimentos e Inferência Estatística).',
      'IBGE: Censo Demográfico e Estatísticas Regionais do Brasil.',
      'Lei Federal nº 8.245/1991 (Lei de Locações Urbanas / Lei do Inquilinato).'
    ]
  },
  {
    id: 'desapropriacao-parcial-remanescente',
    title: 'Desapropriação Parcial: Como Calcular o Prejuízo no Imóvel Remanescente',
    author: 'Por Camila Callegari | Engenheira Civil, Mestre em Engenharia de Avaliações e CEO da Callegari Engenharia',
    metaTitle: 'Desapropriação Parcial: Como Calcular o Prejuízo no Imóvel Remanescente',
    metaDescription: 'A desapropriação parcial vai além da área atingida. Veja como a NBR 14653 e a análise do remanescente garantem a justa indenização. Por Camila Callegari.',
    category: 'Desapropriação',
    readTime: '7 min de leitura',
    date: '20 Set 2026',
    summary: 'A desapropriação parcial vai além da área atingida. Veja como a NBR 14653 e a análise do remanescente garantem a justa indenização. Por Camila Callegari.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    content: [
      'Nas ações e processos administrativos de desapropriação parcial, um dos erros mais comuns e onerosos é calcular a indenização simplesmente multiplicando os metros quadrados desapropriados pelo valor unitário médio do imóvel.',
      'A retirada de uma parcela do terreno não afeta apenas o espaço físico retirado: ela altera drasticamente a geometria, o acesso, a topografia, o potencial construtivo e a vocação econômica de tudo o que permanece com o proprietário.',
      'Quando essas alterações geram desvalorização, limitação de uso ou perda de liquidez na área restante, o prejuízo ao imóvel remanescente precisa ser identificado, fundamentado e mensurado por meio de rigorosa perícia de engenharia legal.',
      '📍 O Impacto Oculto da Desapropriação Parcial na Área Restante',
      'A desapropriação parcial ocorre quando o poder público ou concessionária expropria apenas uma fração da propriedade. Embora o proprietário preserve a posse do remanescente, este raramente mantém as mesmas características funcionais ou mercadológicas de antes da intervenção.',
      'Exemplo Prático de Mercado: Imagine uma gleba urbana com ampla testada para a avenida principal, topografia plana e alto potencial para incorporação imobiliária. Se o ato expropriatório atingir justamente essa faixa frontal para o alargamento da via, o remanescente poderá ficar restrito aos fundos do terreno, com topografia acidentada e acesso por um corredor estreito.',
      'A área restante pode ser fisicamente grande, mas seu valor de mercado, apelo comercial e liquidez despencaram. Avaliar esse imóvel apenas pela métrica "preço/m² original" resultará em uma indenização manifestamente injusta.',
      '📊 Matriz de Diagnóstico Pericial: O Que Deve Ser Analisado no Remanescente?',
      'A norma ABNT NBR 14653 estabelece que, nas avaliações para desapropriação parcial, o perito ou assistente técnico examine detalhadamente todas as variáveis que possam alterar a funcionalidade da propriedade.',
      'Abaixo estão os 7 vetores técnicos críticos de vistoria e análise documental:',
      '⚖️ A Parcela Atingida x O Valor Unitário Médio: A Armadilha da Média',
      'Não se deve presumir que todos os metros quadrados de uma mesma propriedade tenham valor idêntico. Em uma mesma gleba, a porção voltada para a rua concentra melhor acessibilidade, infraestrutura e aproveitamento construtivo, enquanto os fundos podem apresentar restrições ambientais ou declividade acentuada.',
      'Se a desapropriação atinge a porção mais nobre da gleba, a aplicação do valor médio do imóvel primitivo subavalia a parcela desapropriada e ignora o dano ao remanescente. O estudo de mercado deve isolar o valor real da fração atingida e quantificar exatamente o impacto sofrido pela área que restou.',
      '🛠️ Metodologias Avaliatórias Recomendadas pela Engenharia de Avaliações',
      'Para mensurar o efetivo impacto econômico, a engenharia de avaliações aplica duas metodologias consagradas:',
      '• Critério "Antes e Depois" (Before and After): Avalia-se o valor total do imóvel em sua condição original e, em seguida, o valor do imóvel remanescente após o ato expropriatório (ambos na mesma data-base). A diferença matemática direta reflete a perda patrimonial global.',
      '• Avaliação Direta com Reflexos no Remanescente: Calcula-se o valor real da parcela desapropriada somado às perdas específicas do remanescente (desvalorização funcional, custos de readequação e benfeitorias atingidas).',
      '⚠️ Atenção Técnica: Ambas as abordagens exigem extremo rigor normativo para evitar a dupla contagem ou o uso de "fatores de depreciação arbitrários" sem respaldo estatístico de mercado.',
      '🚫 Quando o Remanescente Perde a Viabilidade Econômica (Desapropriação Total)',
      'Existem cenários em que o remanescente permanece fisicamente no local, mas perde completamente seu conteúdo econômico ou utilidade prática. Isso ocorre quando a área restante:',
      '• Fica isolada sem acesso à via pública;',
      '• Fica abaixo da dimensão do lote mínimo exigido pela legislação urbanística do município;',
      '• Torna-se inviável do ponto de vista de custos para readequação estrutural ou de terraplenagem.',
      'Nesses casos, devidamente comprovados por laudo de engenharia, recomenda-se tecnicamente a extensão da desapropriação (transformação de parcial em total), garantindo a indenização integral do patrimônio afetado.',
      '❌ Os 5 Erros Mais Comuns Que Subestimam a Indenização Expropriatória',
      '1. Avaliar apenas os metros quadrados atingidos, ignorando a nova geometria do imóvel;',
      '2. Omitir impactos topográficos e restrições urbanísticas/ambientais geradas pela intervenção;',
      '3. Não quantificar os custos de recomposição (muros, acessos, cercas, drenagem);',
      '4. Utilizar dados de mercado genéricos sem o devido tratamento por inferência estatística;',
      '5. Aplicar "descontos empíricos" sem fundamentação na NBR 14653.',
      '🏛️ A Importância Estratégica do Parecer Técnico de Engenharia',
      'Garantir a justa indenização constitucional (Art. 5º, XXIV da CF/88) em desapropriações parciais requer uma leitura integrada da matrícula do imóvel, dados cadastrais, topografia, legislação urbanística e pesquisa de mercado.',
      'Um parecer técnico elaborado por especialista em Engenharia Legal fornece a blindagem probatória necessária para instruir negociações administrativas, fundamentar petições em ações judiciais ou impugnar laudos periciais incompletos.',
      'A Callegari Engenharia é especializada na elaboração de laudos periciais, pareceres técnicos e assistência técnica judicial em desapropriações e perícias imobiliárias em todo o Brasil.'
    ],
    table: {
      headers: ['Vetor de Análise', 'Pergunta Técnica Essencial do Parecer'],
      rows: [
        ['Forma e Geometria', 'A nova configuração cria recortes residuais, "dentes" na planta ou faixas estreitas inaproveitáveis?'],
        ['Testada e Acessibilidade', 'A frente comercial/urbana foi reduzida ou o novo acesso exige consumo de área útil?'],
        ['Topografia e Solo', 'A intervenção retirou a porção plana e deixou as áreas acidentadas ou de aterro/contenção complexa?'],
        ['Zoneamento e Restrições', 'O remanescente passou a sofrer com recuos obrigatórios, faixas não edificáveis ou restrições ambientais?'],
        ['Potencial Construtivo', 'Os parâmetros urbanísticos do município (COAP, taxa de ocupação e coeficiente de aproveitamento) ainda são viáveis?'],
        ['Vocação Econômica', 'O imóvel perdeu sua destinação mais provável (comercial, industrial, residencial ou rural)?'],
        ['Benfeitorias e Adaptações', 'Houve impacto em muros, portões, acessos, edificações ou redes de drenagem exigindo recomposição?']
      ]
    },
    whatsappUrl: 'https://wa.me/5527981188930?text=Ol%C3%A1%2C%20Camila%20Callegari%21%20Li%20o%20artigo%20sobre%20Desapropria%C3%A7%C3%A3o%20Parcial%20e%20Remanescente%20e%20gostaria%20de%20uma%20an%C3%A1lise%20preliminar%20da%20minha%20demanda.',
    whatsappLabel: 'Entre em contato com a nossa equipe especializada e solicite uma análise preliminar da sua demanda via WhatsApp',
    references: [
      'Constituição da República Federativa do Brasil de 1988 (Art. 5º, XXIV).',
      'ABNT NBR 14653-1: Procedimentos Gerais de Avaliação de Bens.',
      'ABNT NBR 14653-2: Avaliação de Imóveis Urbanos.',
      'ABNT NBR 14653-3: Avaliação de Imóveis Rurais.'
    ]
  },
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

