export type Lang = "pt" | "en";

const en = {
  nav: {
    links: [
      { label: "About", href: "/#sobre" },
      { label: "Projects", href: "/#projetos" },
      { label: "Open Source", href: "/#opensource" },
      { label: "Contact", href: "/#contato" },
    ],
    switchLang: "Mudar para português",
    toggleTheme: "Toggle theme",
    menu: "Menu",
  },
  hero: {
    role: "Fullstack Developer",
    description:
      "Fullstack .NET developer — C# and ASP.NET Core on the back end, building scalable REST APIs with SQL Server and Entity Framework. React and TypeScript on the front end, covering the full flow from UI to API to database.",
    viewProjects: "View projects",
  },
  about: {
    label: "About",
    headline:
      "I've shipped for real clients, contributed to open source and built my own products end to end — with tests and CI from the first commit. The projects below are the proof.",
  },
  projects: {
    label: "Featured work",
    title: "Projects",
    viewProject: "View project",
    descriptions: {
      wilbor:
        "Website and admin dashboard for Wilbor, an art studio — live on the client's own domain. I build and maintain both the public portfolio and the content dashboard behind it.",
      trustFinance:
        "Personal-finance platform built end to end in .NET — ASP.NET Core REST API with SQL Server, automated tests and CI, docker-compose, and a React web client.",
      domainInspector:
        "Fullstack technical challenge, completed: a domain inspection tool with a C# back end and a web client.",
    },
    personal: {
      label: "Self-taught",
      title: "Personal projects",
      titles: {
        blog: "Blog CMS API",
        tasks: "Task Manager",
        auth: "SecureSign · Google OAuth",
      },
    },
    detail: {
      back: "← All projects",
      contextLabel: "Context",
      roleLabel: "What I did",
      stackLabel: "Stack",
      outcomeLabel: "Outcome",
      galleryLabel: "Screenshots",
      liveCta: "Visit live site ↗",
      codeCta: "View code ↗",
      contactTitle: "Want the deeper story?",
      contactBody:
        "I'm happy to walk through the decisions, trade-offs and code on a call.",
      contactCta: "Get in touch",
      cases: {
        wilbor: {
          context:
            "Wilbor is an art and skate-culture studio from Rio de Janeiro — video, murals, illustration and exhibitions since 1997. The studio needed its portfolio properly online and a way to manage that content without touching code.",
          role: [
            "Develop and maintain the public portfolio/blog with Next.js 15, React 19 and TypeScript",
            "Redesigned the admin dashboard: authenticated login, content cards, gallery and contact management",
            "Shipped production fixes end to end — image carousels, fullscreen views and sharing flows (9 merged PRs across both repos)",
          ],
          outcome:
            "The site runs in production on the studio's own domain (wilbor.studio), with content managed through the dashboard.",
        },
        trustFinance: {
          context:
            "A personal-finance platform — users, categories and transactions — that I build and maintain as if it were a production service, to keep my .NET stack sharp end to end.",
          role: [
            "REST API in ASP.NET Core (.NET 8) with SQL Server and Entity Framework",
            "Dedicated test project, gated by CI on GitHub Actions — build and tests run on every push",
            "docker-compose brings up SQL Server 2022 with a healthcheck: one command to run locally",
            "React (Vite) web client consuming the API",
          ],
          outcome:
            "The repo mirrors how I'd ship a real service — tested, containerized and CI-gated, not a tutorial project.",
        },
        domainInspector: {
          context:
            "A fullstack technical challenge from a hosting company's hiring process, completed: a web API that consolidates DNS and WHOIS information for any domain — name servers, A record and hosting data.",
          role: [
            "C# / ASP.NET Core back end querying DNS servers and the WHOIS protocol",
            "MySQL persistence with Entity Framework",
            "TTL-based caching: repeat lookups are served from the database while the TTL is valid, instead of hitting external services again",
            "Front end bundled with Webpack / Babel",
          ],
          outcome:
            "Delivered complete, designed around separation of concerns and testability.",
        },
      },
    },
  },
  opensource: {
    label: "Open source",
    title: "Contributions",
    lead: "For the past year I've been contributing to open-source web3 projects — community platforms, an onchain DAO and the tooling other DAOs launch from. Real repositories, real reviewers, real users: every item below is work that shipped to production through pull requests.",
    prLabel: "PR",
    prsLabel: "PRs",
    mergedLabel: "merged",
    mergedLabelOne: "merged",
    stackLabel: "Stack",
    visitSite: "Visit site",
    viewPrs: "See the PRs",
    allWork: "All my open source on GitHub ↗",
    experienceLabel: "What it taught me",
    experienceTitle: "Experience you don't get alone.",
    experienceBody:
      "Contributing to these codebases taught me things a personal project never would: reading someone else's architecture before touching it, shipping small reviewable PRs, and defending a decision in code review.",
    experience: [
      {
        title: "Working in codebases I didn't write",
        body: "Landing a change in an unfamiliar repo means reading the conventions first and keeping the diff small enough to review. Twenty-three merged PRs later, that's the habit.",
      },
      {
        title: "Web3 UX lives in the unhappy paths",
        body: "Wrong network, rejected signature, failed upload. Wiring wallets with wagmi / viem taught me that the transaction lifecycle — not the happy path — is where the work actually is.",
      },
      {
        title: "Async, in public, in English",
        body: "Open-source and DAO work happens across time zones: written proposals, review threads, and a milestone demo I presented to an international community.",
      },
    ],
    items: {
      skatehive: {
        role: "Contributor",
        summary:
          "International open-source platform connecting the skateboarding community through web3, built on Hive.",
        points: [
          "Built multi-account login — switch identities without re-authenticating",
          "Hardened the onchain swap: chain-id fix and graceful handling of rejected transactions",
          "Shipped a global command palette and guided onboarding for new users",
        ],
      },
      gnars: {
        role: "Contributor",
        summary:
          "Onchain skate DAO in the Nouns ecosystem, funding skaters and creators through a treasury governed onchain.",
        points: [
          "Built the send-NFTs proposal flow — multi-select treasury NFTs into one onchain proposal",
          "Improved proposal creation: Markdown descriptions, duplicate detection, inline validation",
          "Migrated the archive's broken images to IPFS / Pinata",
        ],
      },
      builderdao: {
        role: "Contributor",
        summary:
          "Builder Deploy Direct — a DAO-funded, no-code launcher that ships a Nouns Builder DAO frontend into the user's own GitHub and Vercel accounts.",
        points: [
          "Refined the milestone-1 frontend: connect dialogs, guided walkthrough, dark/light fixes",
          "End-to-end QA of the OAuth → fork → configure → deploy wizard",
          "Presented the milestone demo to the community, in English",
        ],
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Let's talk.",
    description:
      "Message me on LinkedIn or WhatsApp — that's where I reply. And if you like the work, let's connect on GitHub.",
    // TODO: trocar 55SEUNUMERO pelo número real (DDI+DDD+número, só dígitos)
    whatsappHref:
      "https://wa.me/55SEUNUMERO?text=Hi%20Matheus%2C%20I%20saw%20your%20portfolio!",
  },
  footer: {
    tagline: "Matheus Louzada — Brazil",
  },
};

export type Dictionary = typeof en;

const pt: Dictionary = {
  nav: {
    links: [
      { label: "Sobre", href: "/#sobre" },
      { label: "Projetos", href: "/#projetos" },
      { label: "Open Source", href: "/#opensource" },
      { label: "Contato", href: "/#contato" },
    ],
    switchLang: "Switch to English",
    toggleTheme: "Alternar tema",
    menu: "Menu",
  },
  hero: {
    role: "Desenvolvedor Fullstack",
    description:
      "Fullstack .NET com C# e ASP.NET Core no back-end — APIs REST escaláveis com SQL Server e Entity Framework. React e TypeScript no front-end, cobrindo o fluxo completo da interface à API e ao banco.",
    viewProjects: "Ver projetos",
  },
  about: {
    label: "Sobre",
    headline:
      "Já entreguei pra cliente real, contribuo com open source e construo produtos próprios de ponta a ponta — com testes e CI desde o primeiro commit. Os projetos abaixo são a prova.",
  },
  projects: {
    label: "Trabalho em destaque",
    title: "Projetos",
    viewProject: "Ver projeto",
    descriptions: {
      wilbor:
        "Site e dashboard administrativo do Wilbor, estúdio de arte — no ar no domínio do próprio cliente. Desenvolvo e mantenho o portfólio público e o painel de conteúdo por trás dele.",
      trustFinance:
        "Plataforma de finanças pessoais construída de ponta a ponta em .NET — API REST em ASP.NET Core com SQL Server, testes automatizados e CI, docker-compose, e cliente web em React.",
      domainInspector:
        "Desafio técnico fullstack, finalizado: ferramenta de inspeção de domínios com back-end em C# e cliente web.",
    },
    personal: {
      label: "Autodidata",
      title: "Projetos autorais",
      titles: {
        blog: "API de Blog (CMS)",
        tasks: "Gestão de Tarefas",
        auth: "SecureSign · Google OAuth",
      },
    },
    detail: {
      back: "← Todos os projetos",
      contextLabel: "Contexto",
      roleLabel: "O que eu fiz",
      stackLabel: "Stack",
      outcomeLabel: "Resultado",
      galleryLabel: "Screenshots",
      liveCta: "Ver site no ar ↗",
      codeCta: "Ver código ↗",
      contactTitle: "Quer a história completa?",
      contactBody:
        "Posso destrinchar as decisões, trade-offs e o código numa conversa.",
      contactCta: "Entrar em contato",
      cases: {
        wilbor: {
          context:
            "O Wilbor é um estúdio de arte e cultura do skate do Rio de Janeiro — vídeo, murais, ilustração e exposições desde 1997. O estúdio precisava do portfólio bem apresentado online e de um jeito de gerenciar esse conteúdo sem mexer em código.",
          role: [
            "Desenvolvo e mantenho o portfólio/blog público com Next.js 15, React 19 e TypeScript",
            "Redesenhei o dashboard administrativo: login autenticado, cards de conteúdo, galeria e gestão de contatos",
            "Correções em produção de ponta a ponta — carrosséis de imagem, tela cheia e fluxos de compartilhamento (9 PRs mergeados nos dois repos)",
          ],
          outcome:
            "O site roda em produção no domínio do próprio estúdio (wilbor.studio), com o conteúdo gerenciado pelo dashboard.",
        },
        trustFinance: {
          context:
            "Plataforma de finanças pessoais — usuários, categorias e transações — que eu construo e mantenho como se fosse um serviço em produção, pra manter minha stack .NET afiada de ponta a ponta.",
          role: [
            "API REST em ASP.NET Core (.NET 8) com SQL Server e Entity Framework",
            "Projeto de testes dedicado, travado por CI no GitHub Actions — build e testes rodam a cada push",
            "docker-compose sobe o SQL Server 2022 com healthcheck: um comando pra rodar local",
            "Cliente web em React (Vite) consumindo a API",
          ],
          outcome:
            "O repo espelha como eu entregaria um serviço real — testado, containerizado e com CI, não um projeto de tutorial.",
        },
        domainInspector: {
          context:
            "Desafio técnico fullstack de um processo seletivo (empresa de hospedagem), finalizado: uma API web que consolida informações de DNS e WHOIS de qualquer domínio — name servers, registro A e dados de hospedagem.",
          role: [
            "Back-end em C# / ASP.NET Core consultando servidores DNS e o protocolo WHOIS",
            "Persistência em MySQL com Entity Framework",
            "Cache com TTL: consultas repetidas são servidas do banco enquanto o TTL vale, sem bater de novo nos serviços externos",
            "Front-end empacotado com Webpack / Babel",
          ],
          outcome:
            "Entregue completo, desenhado em torno de separação de responsabilidades e testabilidade.",
        },
      },
    },
  },
  opensource: {
    label: "Open source",
    title: "Contribuições",
    lead: "No último ano venho contribuindo com projetos open-source de web3 — plataformas de comunidade, uma DAO onchain e a ferramenta que outras DAOs usam pra nascer. Repositório real, revisor real, usuário real: tudo aqui embaixo foi pra produção via pull request.",
    prLabel: "PR",
    prsLabel: "PRs",
    mergedLabel: "mergeados",
    mergedLabelOne: "mergeado",
    stackLabel: "Stack",
    visitSite: "Ver site",
    viewPrs: "Ver os PRs",
    allWork: "Todo meu open source no GitHub ↗",
    experienceLabel: "O que eu ganhei com isso",
    experienceTitle: "Experiência que sozinho não se ganha.",
    experienceBody:
      "Contribuir com essas bases me ensinou coisas que projeto pessoal nenhum ensina: ler a arquitetura que outra pessoa escreveu antes de mexer, entregar PRs pequenos e revisáveis, e defender uma decisão em code review.",
    experience: [
      {
        title: "Mexer em código que não é meu",
        body: "Entregar numa base desconhecida exige ler as convenções antes e manter o diff pequeno o suficiente pra ser revisado. Vinte e três PRs mergeados depois, virou hábito.",
      },
      {
        title: "UX web3 mora nos unhappy paths",
        body: "Rede errada, assinatura rejeitada, upload falho. Integrar carteiras com wagmi / viem me mostrou que o trabalho de verdade está no ciclo de vida da transação, não no caminho feliz.",
      },
      {
        title: "Async, em público, em inglês",
        body: "Open source e DAO acontecem entre fusos: proposta escrita, thread de review, e uma demo de milestone que apresentei pra uma comunidade internacional.",
      },
    ],
    items: {
      skatehive: {
        role: "Contribuidor",
        summary:
          "Plataforma open-source internacional que conecta a comunidade do skate via web3, construída sobre a Hive.",
        points: [
          "Login multi-conta — trocar de identidade sem reautenticar",
          "Deixei o swap onchain mais robusto: correção de chain-id e tratamento de transação rejeitada",
          "Command palette global e onboarding guiado pra novos usuários",
        ],
      },
      gnars: {
        role: "Contribuidor",
        summary:
          "DAO de skate onchain no ecossistema Nouns, que financia skatistas e criadores por uma tesouraria governada onchain.",
        points: [
          "Fluxo de envio de NFTs em propostas — multi-seleção da tesouraria numa proposta onchain",
          "Melhorias na criação de propostas: Markdown, detecção de duplicadas e validação inline",
          "Migrei as imagens quebradas do arquivo pra IPFS / Pinata",
        ],
      },
      builderdao: {
        role: "Contribuidor",
        summary:
          "Builder Deploy Direct — launcher no-code financiado pela DAO que publica um frontend de Nouns Builder direto nas contas GitHub e Vercel do usuário.",
        points: [
          "Refinei o frontend da milestone 1: connect dialogs, walkthrough guiado, ajustes de dark/light",
          "QA end-to-end do wizard OAuth → fork → configuração → deploy",
          "Apresentei a demo da milestone pra comunidade, em inglês",
        ],
      },
    },
  },
  contact: {
    label: "Contato",
    title: "Vamos conversar.",
    description:
      "Me manda uma mensagem no LinkedIn ou no WhatsApp — respondo por lá. E se curtir o trabalho, bora trocar um follow no GitHub.",
    // TODO: trocar 55SEUNUMERO pelo número real (DDI+DDD+número, só dígitos)
    whatsappHref:
      "https://wa.me/55SEUNUMERO?text=Ol%C3%A1%20Matheus%2C%20vi%20seu%20portf%C3%B3lio!",
  },
  footer: {
    tagline: "Matheus Louzada — Brasil",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { pt, en };
