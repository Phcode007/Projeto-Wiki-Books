let dados = [
  {
    titulo: "1984",
    autor: "George Orwell",
    descricao:
      "1984 é um romance distópico de George Orwell que retrata um futuro sombrio e totalitário. A história se passa em uma Londres futurista, agora parte da Oceânia, um Estado totalitário onde a vigilância é constante e a liberdade individual é completamente suprimida.",
    link: "https://pt.wikipedia.org/wiki/1984_(livro)",
    tags: "futuro distópico romance suspense George Orwell",
    linkof: "https://www.amazon.com.br/1984-George-Orwell/dp/6589678006",
  },
  {
    titulo: "Do mil ao milhão",
    autor: "Thiago Nigro",
    descricao:
      "Do Mil ao Milhão é um guia prático de educação financeira escrito por Thiago Nigro, mais conhecido como Primo Rico. O livro tem como objetivo principal ensinar as pessoas a alcançarem a liberdade financeira, mesmo começando com pouco dinheiro.",
    link: "https://www.mobills.com.br/blog/educacao-financeira/resumo-livro-do-mil-ao-milhao/",
    tags: "educação financeira finanças Thiago Nigro Primo Rico",
    linkof:
      "https://www.amazon.com.br/Mil-Milhão-Sem-Cortar-Cafezinho/dp/8595083274",
  },
  {
    titulo: "O poder da Autorresponsabilidade",
    autor: "Paulo Vieira",
    descricao:
      "O Poder da Autorresponsabilidade é um livro escrito por Paulo Vieira que tem como objetivo central promover uma transformação pessoal profunda. A obra incentiva os leitores a assumirem o controle de suas vidas, abandonando a postura de vítimas e passando a acreditar no próprio potencial.",
    link: "https://www.donosdamidia.com.br/resumo-do-livro-o-poder-da-autorresponsabilidade/",
    tags: "transformação performance Paulo Vieira autoajuda desenvolvimento pessoal",
    linkof:
      "https://www.amazon.com.br/poder-autorresponsabilidade-ferramenta-comprovada-performance/dp/8545202210",
  },
  {
    titulo: "Memórias de um sargento de milícias",
    autor: "Manuel Antônio de Almeida",
    descricao:
      "A história gira em torno de Leonardo, um menino malandro e esperto que, ao longo da narrativa, se transforma em um sargento das milícias. O romance acompanha suas aventuras e desventuras, desde a infância até a vida adulta, retratando o cotidiano da cidade, os costumes da época e os tipos sociais que a povoavam.",
    link: "https://brasilescola.uol.com.br/literatura/memorias-de-um-sargento-de-milicias.htm",
    tags: "romance literatura clássica literatura brasileira romantismo",
    linkof:
      "https://www.amazon.com.br/Memórias-Sargento-Milícias-Manuel-Almeida/dp/8544001661",
  },
  {
    titulo: "O poder da Ação",
    autor: "Paulo Vieira",
    descricao:
      "O Poder da Ação, de Paulo Vieira, é um guia prático que busca despertar no leitor a importância de transformar ideias em ações concretas. O autor, um renomado coach, propõe um método eficaz para superar a procrastinação e alcançar resultados significativos em todas as áreas da vida.",
    link: "https://montecarloalimentos.com.br/blog/o-poder-da-acao/",
    tags: "performance transformação ação Paulo Vieira autoajuda produtividade",
    linkof: "https://www.amazon.com.br/poder-ação-Paulo-Vieira/dp/854520034X",
  },
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    descricao:
      "Orgulho e Preconceito, de Jane Austen, é um clássico da literatura inglesa que narra a história de amor entre Elizabeth Bennet, uma jovem inteligente e espirituosa, e Fitzwilliam Darcy, um homem rico e orgulhoso.",
    link: "https://pt.wikipedia.org/wiki/Orgulho_e_Preconceito",
    tags: "romance literatura inglesa Jane Austen literatura clássica",
    linkof:
      "https://www.amazon.com.br/Orgulho-Preconceito-especial-marcador-páginas/dp/6587817149",
  },
  {
    titulo: "A Moreninha",
    autor: "Joaquim Manuel de Macedo",
    descricao:
      "A Moreninha, de Joaquim Manuel de Macedo, é um clássico da literatura brasileira que narra a história de amor entre Augusto e Carolina, conhecida como Moreninha. O romance retrata o cotidiano da sociedade carioca do século XIX.",
    link: "https://pt.wikipedia.org/wiki/A_Moreninha",
    tags: "romance literatura brasileira literatura clássica Joaquim Manuel de Macedo romantismo",
    linkof:
      "https://www.amazon.com.br/Moreninha-Joaquim-Manuel-Macedo/dp/8535918561",
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    descricao:
      "Fábula política escrita por George Orwell, A Revolução dos Bichos narra a história de uma revolução em uma granja, onde os animais se rebelam contra seus opressores humanos. A narrativa serve como uma alegoria crítica aos regimes totalitários do século XX.",
    link: "https://www.todamateria.com.br/a-revolucao-dos-bichos/",
    tags: "fábula política literatura clássica George Orwell distopia",
    linkof:
      "https://www.amazon.com.br/Revolução-dos-Bichos-George-Orwell/dp/8535914040",
  },
  {
    titulo: "O Alienista",
    autor: "Machado de Assis",
    descricao:
      "Em 'O Alienista', Machado de Assis satiriza a sociedade brasileira através da história de um médico que decide isolar todos os considerados loucos da cidade. A obra explora temas como a loucura, a razão e o poder, com a ironia e o humor característicos do autor.",
    link: "https://pt.wikipedia.org/wiki/O_Alienista",
    tags: "realismo literatura brasileira Machado de Assis sátira loucura razão poder",
    linkof: "https://www.amazon.com.br/Alienista-Machado-Assis/dp/8544001408",
  },
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    descricao:
      "Em 'Dom Casmurro', Machado de Assis narra a história de Bento Santiago, um homem atormentado pela dúvida sobre a fidelidade de sua esposa, Capitu. Através de um narrador em primeira pessoa, a obra explora temas como ciúme, traição, memória e a construção da identidade.",
    link: "https://guiadoestudante.abril.com.br/estudo/dom-casmurro-resumo-obra-de-machado-de-assis",
    tags: "realismo literatura brasileira Machado de Assis ciúme traição Capitu",
    linkof:
      "https://www.amazon.com.br/Dom-Casmurro-Machado-Assis/dp/8544001559",
  },
  {
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    descricao:
      "Em 'Memórias Póstumas de Brás Cubas', Machado de Assis revoluciona a narrativa ao contar a história de sua vida já após a morte. Brás Cubas, um homem acomodado e crítico da sociedade, reflete sobre suas escolhas e fracassos, inaugurando o Realismo no Brasil com sua ironia e pessimismo.",
    link: "https://www.todamateria.com.br/resumo-e-analise-de-memorias-postumas-de-bras-cubas/",
    tags: "realismo literatura brasileira Machado de Assis ironia pessimismo narrador não confiável",
    linkof:
      "https://www.amazon.com.br/Memorias-Postumas-De-Bras-Cubas-Via/dp/8567097183",
  },
  {
    titulo: "Vidas Secas",
    autor: "Graciliano Ramos",
    descricao:
      "Em 'Vidas Secas', Graciliano Ramos retrata a dura realidade de uma família de retirantes nordestinos em busca de sobrevivência em um sertão árido. A obra explora temas como a seca, a miséria, a esperança e a luta pela sobrevivência, com uma linguagem simples e direta.",
    link: "https://pt.wikipedia.org/wiki/Vidas_Secas",
    tags: "regionalismo literatura brasileira Graciliano Ramos seca miséria sertão",
    linkof:
      "https://www.amazon.com.br/Vidas-Secas-Graciliano-Ramos/dp/8501012351",
  },
  {
    titulo: "Alguma Poesia",
    autor: "Carlos Drummond de Andrade",
    descricao:
      "Publicado em 1930, 'Alguma Poesia' marca a estreia de Carlos Drummond de Andrade e se tornou um clássico da literatura brasileira. A obra apresenta um retrato íntimo e reflexivo do poeta, abordando temas como a vida cotidiana, a passagem do tempo, a solidão e a busca por identidade. Com uma linguagem simples e direta, Drummond explora a condição humana de forma universal.",
    link: "https://guiadoestudante.abril.com.br/estudo/alguma-poesia-resumo-e-analise-da-obra-de-carlos-drummond-de-andrade",
    tags: "modernismo literatura brasileira Carlos Drummond de Andrade poesia brasileira",
    linkof:
      "https://www.amazon.com.br/Alguma-poesia-Carlos-Drummond-Andrade/dp/6555874619",
  },
  {
    titulo: "Iracema",
    autor: "José de Alencar",
    descricao:
      "Iracema, a virgem dos lábios de mel, é um romance indianista que narra a história de amor entre a índia tabajara e o português Martim Soares Moreno. A obra, marcada pela linguagem poética e pela idealização do índio, retrata o encontro entre duas culturas e a formação do povo brasileiro. Através de um enredo envolvente e descrições exuberantes da natureza, Alencar constrói um mito de fundação da nação brasileira.",
    link: "https://www.todamateria.com.br/iracema/",
    tags: "romantismo romance literatura brasileira José de Alencar indianismo mito de fundação",
    linkof: "https://www.amazon.com.br/Iracema-José-Alencar/dp/8578885252",
  },
  {
    titulo: "Método Financeiro do Primo Rico",
    autor: "Thiago Nigro",
    descricao:
      "O 'Método Financeiro do Primo Rico' é um guia prático para quem deseja organizar suas finanças, investir de forma inteligente e alcançar a liberdade financeira. Através da metodologia ARCA, o autor Thiago Nigro apresenta um passo a passo para conquistar seus objetivos financeiros, ensinando a gastar bem, investir melhor e gerar mais renda.",
    link: "https://pt.wikipedia.org/wiki/Thiago_Nigro",
    tags: "finanças pessoais investimento educação financeira Thiago Nigro Primo Rico",
    linkof:
      "https://loja.literarebooks.com.br/autoajuda/metodo-financeiro-do-primo-rico",
  },
  {
    titulo: "Pai Rico, Pai Pobre",
    autor: "Robert T. Kiyosaki",
    descricao:
      "Pai Rico, Pai Pobre é um guia financeiro que ensina a diferença entre trabalhar pelo dinheiro e fazer com que o dinheiro trabalhe para você. Através da história de dois pais com visões opostas sobre dinheiro, o livro explora conceitos como ativos e passivos, fluxo de caixa e a importância da educação financeira. Kiyosaki desafia os leitores a pensarem de forma diferente sobre o dinheiro e a construir riqueza a longo prazo.",
    link: "https://pt.wikipedia.org/wiki/Pai_Rico,_Pai_Pobre",
    tags: "finanças pessoais investimento educação financeira Robert Kiyosaki",
    linkof: "https://www.amazon.com.br/Pai-rico-pai-pobre-anos/dp/8550801488",
  },
  {
    titulo: "E o Vento Levou",
    autor: "Margaret Mitchell",
    descricao:
      "Um romance épico que retrata a vida de Scarlett O'Hara, uma jovem mimada que precisa aprender a sobreviver em meio à Guerra Civil Americana. A história explora temas como amor, ambição, perda e a força do caráter humano.",
    link: "https://pt.wikipedia.org/wiki/E_o_vento_levou",
    tags: "romance histórico guerra civil americana sul dos estados unidos Scarlett O'Hara",
    linkof:
      "https://www.amazon.com.br/vento-levou-Margaret-Mitchell/dp/8501087300",
  },
  {
    titulo: "Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    descricao:
      "Um romance gótico que narra a história de amor turbulento entre Catherine Earnshaw e Heathcliff, ambientado nas vastas paisagens da Inglaterra. A obra explora temas como paixão, vingança e a natureza humana.",
    link: "https://pt.wikipedia.org/wiki/Morro_dos_Ventos_Uivantes",
    tags: "romance gótico paixão vingança literatura inglesa Emily Brontë",
    linkof:
      "https://www.amazon.com.br/Morro-dos-Ventos-Uivantes-Emily-Bronte/dp/8535914406",
  },
  {
    titulo: "Psicologia Financeira",
    autor: "Morgan Housel",
    descricao:
      "Um guia prático que explora a influência da psicologia nas decisões financeiras. O livro aborda temas como aversão à perda, viés de confirmação e como controlar as emoções para alcançar a liberdade financeira.",
    link: "https://pt.wikipedia.org/wiki/Morgan_Housel",
    tags: "finanças pessoais psicologia investimento comportamento financeiro Morgan Housel",
    linkof:
      "https://www.amazon.com.br/Psicologia-Financeira-Morgan-Housel/dp/8595088497",
  },
  {
    titulo: "A Bíblia",
    autor: "Diversos autores",
    descricao:
      "A sagrada escritura para diversas religiões abraâmicas, contendo narrativas históricas, poesias, profecias e ensinamentos morais. É considerada uma das obras mais influentes da história da humanidade.",
    link: "https://pt.wikipedia.org/wiki/Bíblia",
    tags: "religião cristianismo judaísmo islamismo livro sagrado",
    linkof:
      "https://www.amazon.com.br/Bíblia-Sagrada-Almeida-Revista-Atualizada/dp/8535905066",
  },
  {
    titulo: "As 48 Leis do Poder",
    autor: "Robert Greene",
    descricao:
      "Um livro que explora as leis do poder e da manipulação, baseado em estudos históricos e exemplos da vida real. O autor apresenta 48 leis que podem ser utilizadas para alcançar o sucesso e o domínio em diversas áreas da vida.",
    link: "https://pt.wikipedia.org/wiki/As_48_Leis_do_Poder",
    tags: "autoajuda poder manipulação estratégia Robert Greene",
    linkof:
      "https://www.amazon.com.br/48-leis-poder-Robert-Greene/dp/8535910867",
  },
  {
    titulo: "O Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
    descricao:
      "Uma épica fantasia que narra a história de um hobbit chamado Frodo Bolseiro e sua jornada para destruir o Um Anel, uma poderosa arma capaz de dominar a Terra Média.",
    link: "https://pt.wikipedia.org/wiki/O_Senhor_dos_Anéis",
    tags: "fantasia épica hobbit anel único terra média J. R. R. Tolkien",
    linkof:
      "https://www.amazon.com.br/senhor-aneis-trilogia-J-R-R-Tolkien/dp/8535914773",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    descricao:
      "Um romance distópico que retrata um futuro onde livros são proibidos e queimados por bombeiros. A história acompanha Guy Montag, um bombeiro que começa a questionar o mundo ao seu redor e a importância da literatura.",
    link: "https://pt.wikipedia.org/wiki/Fahrenheit_451",
    tags: "distopia futuro livros proibidos censura sociedade Ray Bradbury",
    linkof:
      "https://www.amazon.com.br/Fahrenheit-451-Ray-Bradbury/dp/8535914544",
  },
  {
    titulo: "Tal'Dorei Renascido",
    autor: "Matthew Mercer e Equipe Critical Role",
    descricao:
      "Um cenário de campanha para Dungeons & Dragons que explora o reino de Tal'Dorei após a Calamidade. Os jogadores assumem o papel de heróis que moldarão o futuro deste mundo em recuperação.",
    link: "https://criticalrole.com/taldoreirising/",
    tags: "D&D RPG fantasia Exandria Critical Role Matthew Mercer",
    linkof:
      "https://www.amazon.com/Tals-Dorei-Campaign-Setting-Reborn/dp/1506725724",
  },
];
