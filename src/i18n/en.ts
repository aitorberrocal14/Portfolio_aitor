export const en = {
  meta: {
    role: 'Sociologist · Social researcher · Applied AI work · Digital product builder',
    tagline:
      'Rigorous social research, applied AI integration and the ability to ship LLM-powered products in production.',
    keywords:
      'sociologist, social research, AI research, AI policy, AI governance, AI safety, prompt engineering, LLMs, digital methods, think tank, Bilbao, Aitor Berrocal, Bercay Studio, TÖCA, Mozkor',
  },
  nav: {
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    experience: 'Experience',
    tools: 'Tools',
    education: 'Education',
    contact: 'Contact',
    cta: 'Get in touch',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    downloadCv: 'Download CV',
  },
  hero: {
    availability: 'Available for work',
    titleA: 'I study society.',
    titleB: 'I work',
    titleC: 'with AI.',
    lead: [
      { kind: 'name', value: 'Aitor Berrocal Lorda' },
      { kind: 'text', value: ' — sociologist and social researcher, with applied AI knowledge and hands-on experience building digital products with LLMs. I combine ' },
      { kind: 'em', value: 'methodological rigor' },
      { kind: 'text', value: ' and ' },
      { kind: 'em', value: 'shipping ability' },
      { kind: 'text', value: '.' },
    ],
    ctaPrimary: 'See projects',
    ctaSecondary: 'Get in touch',
  },
  about: {
    number: '01',
    kicker: 'About',
    title: 'Social research, AI and product.',
    description:
      'Three sides that reinforce each other: the sociologist’s lens, applied AI judgment, and real-world building practice.',
    paragraphs: [
      "I'm a **sociologist trained in social research**, with a Master's in applied research methods (UPV/EHU) and hands-on experience in quantitative, qualitative and mixed methods. Author of a Master's Thesis on the _resignification of spaces_ at the Faculty of Social Sciences.",
      'I work with AI in an applied way: prompt engineering, LLM integration (Claude, OpenAI, Gemini) and practical evaluation of outputs. I follow the AI safety and governance field as an active reader.',
      "And I build: **TÖCA, Mozkor and other products** with AI under my own brand [Bercay Studio](https://bercay.studio). Real products, in production, with real users.",
      "My professional interest sits at the intersection of **social science, digital methods and AI**, and in how people relate to AI systems in their everyday life.",
    ],
    cards: [
      { k: 'A', title: 'Research', body: 'Mixed methods, fieldwork, analysis and reporting with academic rigor.' },
      { k: 'B', title: 'Work with AI', body: 'Prompt engineering, LLM integration and practical output evaluation.' },
      { k: 'C', title: 'Build', body: 'Full-stack web products with AI in production: Next.js, Supabase, Stripe.' },
    ],
    photoBadgeNow: 'Bilbao · 2026',
    cvLabel: 'Download CV (PDF)',
  },
  services: {
    number: '02',
    kicker: 'Areas of work',
    title: 'What I work on.',
    description:
      'My work moves between three areas that overlap more than they seem to: social research, applied AI work, and digital product building. They are not separate buckets — most projects pull on two or three of them at once.',
    items: [
      {
        number: '01',
        title: 'Social research',
        description:
          "Designing and running studies with quantitative, qualitative and mixed methods. I trained as a sociologist at UPV/EHU, with a Master's focused on applied research tools and a qualitative thesis on the resignification of university spaces. I'm particularly interested in research projects where the digital or AI is part of what we want to understand.",
        deliverables: [],
      },
      {
        number: '02',
        title: 'Applied AI work',
        description:
          "Integrating language models into real products, prompt engineering, practical evaluation of outputs, and following the AI safety and governance field as an active reader. I work daily with Claude, OpenAI and Gemini, and I'm especially interested in how AI products can be designed to make sense and remain sustainable beyond the hype.",
        deliverables: [],
      },
      {
        number: '03',
        title: 'Digital product',
        description:
          'Building full-stack web products with AI in production. Under Bercay Studio I have built and shipped TÖCA and Mozkor, owning the full cycle: architecture, LLM integration, payments, deployment and maintenance. The experience of actually building gives me the grounded perspective I bring to research on AI.',
        deliverables: [],
      },
    ],
  },
  projects: {
    number: '03',
    kicker: 'Selected work',
    title: 'Projects that bridge research and technology.',
    description:
      'What I build at Bercay Studio and what I research across academic and applied settings.',
    softwareKicker: '— Branch 01',
    softwareTitle: 'Software & AI',
    researchKicker: '— Branch 02',
    researchTitle: 'Social research',
    countLabel: (n: number) => `${n} project${n === 1 ? '' : 's'}`,
    openLabel: 'Open',
    visitLabel: 'Visit site',
    noUrlLabel: 'No link',
    items: [
      {
        id: 'toca',
        title: 'TÖCA',
        subtitle: 'AI training · HYROX & CrossFit',
        description:
          'An app that generates personalized training plans with AI for HYROX and CrossFit athletes. End-to-end: idea, technical design, full-stack development, launch and maintenance.',
        tags: ['Next.js', 'Supabase', 'Stripe', 'LLMs', 'TypeScript'],
        highlights: [
          'Personalized plans generated with AI',
          'Auth, Stripe payments and subscriptions',
          'Deployed on Vercel with serverless architecture',
        ],
        cover: { tagline: 'Your HYROX plan, in seconds.', urlLabel: 'toca-app.bercay.studio' },
      },
      {
        id: 'mozkor',
        title: 'Mozkor',
        subtitle: 'Drinks tracker',
        description:
          'Full-stack drinks-tracking app built single-handedly, with a relational database, authentication and a production deploy.',
        tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
        highlights: [
          'Relational data model in PostgreSQL',
          'Auth and storage with Supabase',
          'Clean UI built with Next.js + TypeScript',
        ],
        cover: { tagline: 'Track. Understand. Decide.', urlLabel: 'mozkor-app.bercay.studio' },
      },
      {
        id: 'bercay',
        title: 'Bercay Studio',
        subtitle: 'Umbrella brand for personal projects',
        description:
          'The brand under which I build and ship both personal and client projects across digital product and research. Web, identity and end-to-end ownership: design, development, deployment and business model.',
        tags: ['Astro', 'Branding', 'Product', 'Strategy'],
        highlights: ['Own brand and identity', 'Website as a project hub', 'Associated client proposals'],
        cover: { tagline: 'Research + Product Studio.', urlLabel: 'bercay.studio' },
      },
      {
        id: 'tfm',
        title: 'Resignification of spaces',
        subtitle: "Master's Thesis · Social Sciences · UPV/EHU",
        description:
          'A study of the Reframing and Reconfiguration of Spaces project at the Faculty of Social Sciences and Communication of UPV/EHU, in collaboration with Innok Lab and Campus Bizia Lab.',
        tags: ['Emotional mapping', 'Interviews', 'Observation', 'Visual analysis'],
        highlights: [
          'Emotional mapping as the central technique',
          'In-depth interviews and observation',
          "Analysis of the study's photographic material",
        ],
        cover: { tagline: 'How a faculty is inhabited.', urlLabel: 'UPV/EHU · 2025' },
      },
      {
        id: 'turismo-bilbao',
        title: 'Tourism distribution in Bilbao',
        subtitle: 'Bilbao Ekintza · Tourism Promotion Officer',
        description:
          'Research and data analysis on the distribution of tourist accommodation in Bilbao (hotels, guesthouses, short-term rentals, hostels and apartments). Mapping and dashboards to support decision-making.',
        tags: ['QGIS', 'Power BI', 'Excel', 'Cartography'],
        highlights: [
          'Mapping of tourist accommodation',
          'Interactive dashboards and reports in Power BI',
          'Spatial visualizations with QGIS',
        ],
        cover: { tagline: 'Bilbao tourism, in data.', urlLabel: 'Bilbao Ekintza' },
      },
    ],
  },
  experience: {
    number: '04',
    kicker: 'Career',
    title: 'Career path.',
    items: [
      {
        period: 'Nov. 2025 — present',
        role: 'Tourism Promotion Officer',
        org: 'Bilbao Ekintza · Employment Plan Grant',
        description:
          "Research and data analysis on Bilbao's tourism sector. Mapping and visualizations with QGIS, Power BI and Excel to support decision-making in tourism promotion.",
      },
      {
        period: '2026 — present',
        role: 'Founder',
        org: 'Bercay Studio · Own brand',
        description:
          'Own brand under which I develop AI-powered digital products and applied social research projects, available for research and consulting services. TÖCA and Mozkor as current products in production. End-to-end ownership: design, development, deployment, marketing and business model.',
      },
      {
        period: 'Oct. 2024 — Oct. 2025',
        role: "Research intern (Master's Thesis)",
        org: 'Innok Lab · UPV/EHU',
        description:
          "Developed my Master's Thesis on the resignification of spaces at the Faculty of Social Sciences, in collaboration with Campus Bizia Lab. Emotional mapping, interviews, observation and visual analysis.",
      },
      {
        period: '2023 — 2025',
        role: 'Group leader / Youth educator',
        org: 'BIRA Education and Sport',
        description: 'Coordinated youth groups and supported socio-educational activities.',
      },
    ],
  },
  tools: {
    number: '05',
    kicker: 'Tools',
    title: 'Toolbox.',
    description: 'What I use day to day to research, analyze and build.',
    groups: [
      { label: 'Data analysis', items: ['SPSS', 'Jamovi', 'Excel'] },
      { label: 'Visualization & mapping', items: ['Power BI', 'QGIS'] },
      { label: 'Qualitative', items: ['Whisper', 'Otter.ai'] },
      { label: 'Development', items: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel', 'Stripe'] },
      { label: 'AI', items: ['Claude', 'ChatGPT', 'Gemini', 'Prompt engineering', 'LLM integration', 'Output evaluation'] },
      { label: 'Productivity', items: ['Notion', 'Trello', 'Slack', 'MS Teams'] },
    ],
  },
  education: {
    number: '06',
    kicker: 'Education',
    title: 'Credentials.',
    description: 'Academic background in sociology, applied certifications and language competence.',
    items: [
      {
        period: 'Oct. 2024 — Oct. 2025',
        title: "Master's Degree in Models and Research Areas in Social Sciences",
        org: 'Euskal Herriko Unibertsitatea · UPV/EHU',
      },
      {
        period: 'Sept. 2018 — Sept. 2024',
        title: "Bachelor's Degree in Sociology",
        org: 'Euskal Herriko Unibertsitatea · UPV/EHU',
        note: 'Specialization in Processes, Networks and Social Structures',
      },
      {
        period: '2015 — 2017',
        title: 'High School',
        org: 'Colegio Calasancio Escolapios · Bilbao',
      },
    ],
    certificationsLabel: 'Certifications',
    certifications: [
      'Big Data Analysis on Social Networks — UPV/EHU (2024)',
      'Occupational Risk Prevention (2023)',
      'Food Handler Certificate (2024)',
      'Driving licence B',
    ],
    languagesLabel: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Basque', level: 'Advanced · B2 (2025)' },
      { name: 'English', level: 'Advanced · B2 (2016)' },
    ],
  },
  contact: {
    number: '07',
    kicker: 'Contact',
    title: "Let's build",
    titleItalic: 'together',
    description:
      "If you have a project in mind — research, AI product, or both — tell me about it. I usually reply within 24 hours.",
    labels: {
      location: 'Location',
      availability: 'Availability',
      availabilityValue: 'Freelance · collaborations',
      languages: 'Languages',
    },
  },
  footer: {
    tagline: 'Social research + AI product.',
    rights: 'All rights reserved.',
    builtWith: 'Built with Astro, Tailwind and a lot of Fraunces.',
  },
  projectsData: {
    online: 'Online',
    livePreview: 'Live preview',
  },
} as const;
