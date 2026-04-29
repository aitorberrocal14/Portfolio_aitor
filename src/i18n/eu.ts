// Euskara: lehenengo zirriborro errebisatu hartuta. Astiro berrikusi.
export const eu = {
  meta: {
    role: 'Soziologoa · Gizarte ikertzailea · AArekin lan aplikatua · Produktu digitalen sortzailea',
    tagline:
      'Gizarte ikerketa zorrotza, AAren integrazio aplikatua eta LLMekin produktuak ekoizpenean ateratzeko gaitasuna.',
    keywords:
      'soziologoa, gizarte ikerketa, AI research, AI policy, AI governance, AI safety, prompt engineering, LLM, metodo digitalak, think tank, Bilbo, Aitor Berrocal, Bercay Studio, TÖCA, Mozkor',
  },
  nav: {
    about: 'Niri buruz',
    services: 'Lan-arloak',
    projects: 'Proiektuak',
    experience: 'Esperientzia',
    tools: 'Tresnak',
    education: 'Ikasketak',
    contact: 'Kontaktua',
    notes: 'Oharrak',
    cta: 'Hitz egin dezagun',
    skipToContent: 'Edukira jauzi',
    openMenu: 'Menua ireki',
    closeMenu: 'Menua itxi',
    downloadCv: 'CV deskargatu',
  },
  hero: {
    availability: 'Lan egiteko prest',
    titleA: 'Gizartea ikertu eta',
    titleB: 'AArekin',
    titleC: 'lan egiten dut.',
    lead: [
      { kind: 'name', value: 'Aitor Berrocal Lorda' },
      { kind: 'text', value: ' naiz. Soziologoa eta gizarte ikertzailea, AAren ezagutza aplikatua duena eta LLMekin produktu digitalak eraikitzen dituena. ' },
      { kind: 'em', value: 'Zorroztasun metodologikoa' },
      { kind: 'text', value: ' eta ' },
      { kind: 'em', value: 'exekutatzeko gaitasuna' },
      { kind: 'text', value: ' uztartzen ditut.' },
    ],
    ctaPrimary: 'Proiektuak ikusi',
    ctaSecondary: 'Hitz egin dezagun',
  },
  about: {
    number: '01',
    kicker: 'Niri buruz',
    title: 'Gizarte ikerketa, AA eta produktua.',
    description:
      'Elkar indartzen duten hiru alderdi: soziologoaren begirada, AAri buruzko irizpide aplikatua eta produktua eraikitzeko praktika.',
    paragraphs: [
      '**Gizarte ikerketan trebatutako soziologoa** naiz, ikerketa aplikatuko tresnetan masterra eginda (EHU) eta metodologia kuantitatibo, kualitatibo eta mistoetan eskarmentuduna. Gizarte Zientzien Fakultateko _espazioen esanahi-berritzeari_ buruzko TFMaren egilea.',
      'AArekin modu aplikatuan lan egiten dut: prompt engineering, LLMen integrazioa (Claude, OpenAI, Gemini) eta outputen ebaluazio praktikoa. AI safety eta governance arloen jarraipena egiten dut irakurle aktibo gisa.',
      'Eta eraikitzen dut: **TÖCA, Mozkor eta beste produktu batzuk** AArekin, [Bercay Studio](https://bercay.studio) marka propioaren azpian. Benetako produktuak, ekoizpenean, benetako erabiltzaileekin.',
      'Nire interes profesionala **gizarte zientzien, metodo digitalen eta AAren** elkargunean dago, eta pertsonek egunerokoan AA sistemekin nola harremanetan jartzen diren ikertzeko.',
    ],
    cards: [
      { k: 'A', title: 'Ikertu', body: 'Metodo mistoak, landa-lana, analisia eta txostenak zorroztasun akademikoz.' },
      { k: 'B', title: 'AArekin lan egin', body: 'Prompt engineering, LLMen integrazioa eta outputen ebaluazio praktikoa.' },
      { k: 'C', title: 'Eraiki', body: 'AArekin web produktu full-stack ekoizpenean: Next.js, Supabase, Stripe.' },
    ],
    photoBadgeNow: 'Bilbo · 2026',
    cvLabel: 'CV deskargatu (PDF)',
  },
  services: {
    number: '02',
    kicker: 'Lan-arloak',
    title: 'Zertan lan egiten dudan.',
    description:
      'Nire lana hiru arlotan mugitzen da, eta dirudien baino gehiago elkartzen dira: gizarte ikerketa, AArekin lan aplikatua eta produktu digitalen sorrera. Ez dira konpartimentu itxiak: proiektu gehienek bietan edo hiruretan eragiten dute.',
    items: [
      {
        number: '01',
        title: 'Gizarte ikerketa',
        description:
          'Metodologia kuantitatibo, kualitatibo eta mistoekin azterlanak diseinatu eta gauzatzea. EHUn soziologo gisa formatu nintzen, ikerketa aplikatuko tresnetan masterra eginda eta unibertsitate-espazioen esanahi-berritzeari buruzko TFM kualitatibo bat. Bereziki interesatzen zaizkit digitalak edo AAk parte hartzen duten fenomenoak ikertzeko proiektuak.',
        deliverables: [],
      },
      {
        number: '02',
        title: 'AArekin lan aplikatua',
        description:
          'Hizkuntza-ereduen integrazioa benetako produktuetan, prompt engineering, outputen ebaluazio praktikoa eta AI safety eta governance arloen jarraipena irakurle aktibo gisa. Egunero Claude, OpenAI eta Geminirekin lan egiten dut, eta bereziki interesatzen zait nola diseinatu zentzuzko AA produktuak, hype-tik harago iraunkorrak izan daitezen.',
        deliverables: [],
      },
      {
        number: '03',
        title: 'Produktu digitala',
        description:
          'AArekin web produktu full-stack ekoizpenean garatzea. Bercay Studioren azpian TÖCA eta Mozkor eraiki eta abiarazi ditut, ziklo osoa kudeatuta: arkitektura, LLMen integrazioa, ordainketak, hedapena eta mantentzea. Eraikitzeko esperientziak ematen dit AAri buruzko ikerketa lurretik egiteko irizpidea.',
        deliverables: [],
      },
    ],
  },
  projects: {
    number: '03',
    kicker: 'Aukeratutako lanak',
    title: 'Ikerketa eta teknologia elkartzen dituzten proiektuak.',
    description:
      'Bercay Studio markaren azpian eraikitzen dudana eta esparru akademiko eta aplikatuetan ikertzen dudana.',
    softwareKicker: '— Adarra 01',
    softwareTitle: 'Software & AA',
    researchKicker: '— Adarra 02',
    researchTitle: 'Gizarte ikerketa',
    countLabel: (n: number) => `${n} proiektu`,
    openLabel: 'Ireki',
    visitLabel: 'Webgunea bisitatu',
    noUrlLabel: 'Esteka gabe',
    notesCta: 'Nire oharrak eta idatziak →',
    items: [
      {
        id: 'toca',
        title: 'TÖCA',
        subtitle: 'Entrenamendua AArekin · HYROX & CrossFit',
        description:
          'HYROX eta CrossFit kirolarientzat AAren bidez entrenamendu plan pertsonalizatuak sortzen dituen aplikazioa. Ziklo osoa: ideia, diseinu teknikoa, garapen full-stack, abiarazpena eta mantentzea.',
        tags: ['Next.js', 'Supabase', 'Stripe', 'LLMs', 'TypeScript'],
        highlights: [
          'AAren bidez sortutako plan pertsonalizatuak',
          'Autentifikazioa, Stripe ordainketak eta harpidetzak',
          'Vercel-en hedatua, arkitektura serverless',
        ],
        cover: { tagline: 'Zure HYROX plana, segundutan.', urlLabel: 'toca-app.bercay.studio' },
      },
      {
        id: 'mozkor',
        title: 'Mozkor',
        subtitle: 'Edari trackerra',
        description:
          'Edarien jarraipenerako eta kudeaketarako aplikazioa, modu autonomoan full-stack garatua, datu-base erlazional, autentifikazio eta produkzio-hedapenarekin.',
        tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
        highlights: [
          'Datu eredu erlazionala PostgreSQLn',
          'Autentifikazioa eta biltegiratzea Supabaserekin',
          'UI zaindua Next.js + TypeScripten',
        ],
        cover: { tagline: 'Jarraitu. Ulertu. Erabaki.', urlLabel: 'mozkor-app.bercay.studio' },
      },
      {
        id: 'bercay',
        title: 'Bercay Studio',
        subtitle: 'Proiektu propioen marka aterkia',
        description:
          'Produktu digitalean eta ikerketan proiektu propioak eta komertzialak garatzen eta aurkezten ditudan marka. Webgunea, identitatea eta kudeaketa integrala: diseinua, garapena, hedapena eta negozio eredua.',
        tags: ['Astro', 'Branding', 'Produktua', 'Estrategia'],
        highlights: [
          'Marka eta identitate propioa',
          'Webgunea proiektuen hub gisa',
          'Lotutako proposamen komertzialak',
        ],
        cover: { tagline: 'Research + Product Studio.', urlLabel: 'bercay.studio' },
      },
      {
        id: 'tfm',
        title: 'Espazioen esanahi-berritzea',
        subtitle: 'MAL · Gizarte Zientzietako Masterra · UPV/EHU',
        description:
          'EHUko Gizarte Zientzien eta Komunikazioaren Fakultateko Espazioak esanahi berritzeko eta Birkonfiguratzeko Proiektuaren analisia, Innok Lab eta Campus Bizia Lab taldeekin elkarlanean.',
        tags: ['Kartografia emozionala', 'Elkarrizketak', 'Behaketa', 'Analisi bisuala'],
        highlights: [
          'Kartografia emozionala teknika nagusi gisa',
          'Sakoneko elkarrizketak eta behaketa',
          'Azterlanaren material fotografikoaren analisia',
        ],
        cover: { tagline: 'Nola bizitzen den fakultate bat.', urlLabel: 'UPV/EHU · 2025' },
      },
      {
        id: 'turismo-bilbao',
        title: 'Bilboko turismo banaketa',
        subtitle: 'Bilbao Ekintza · Turismo Sustapeneko Teknikaria',
        description:
          'Bilboko establezimendu turistikoen banaketari buruzko ikerketa eta datu analisia (hotelak, ostatuak, ETB, aterpetxeak, apartamentuak). Erabakiak hartzen laguntzeko kartografiak eta dashboardak.',
        tags: ['QGIS', 'Power BI', 'Excel', 'Kartografia'],
        highlights: [
          'Establezimendu turistikoen mapaketa',
          'Power BIn dashboard eta txosten interaktiboak',
          'Lurralde bistaratzeak QGISekin',
        ],
        cover: { tagline: 'Bilboko turismoa, datuetan.', urlLabel: 'Bilbao Ekintza' },
      },
    ],
  },
  experience: {
    number: '04',
    kicker: 'Ibilbidea',
    title: 'Non aritu naizen lanean.',
    items: [
      {
        period: '2025eko aza. — gaur arte',
        role: 'Turismo Sustapeneko Teknikaria',
        org: 'Bilbao Ekintza · Enplegu Plan Beka',
        description:
          'Bilboko sektore turistikoaren ikerketa eta datu analisia. QGIS, Power BI eta Excelekin kartografiak eta bistaratzeak, turismo sustapenean erabakiak hartzen laguntzeko.',
      },
      {
        period: '2026 — gaur arte',
        role: 'Sortzailea',
        org: 'Bercay Studio · Marka propioa',
        description:
          'Marka propioa, AArekin produktu digitalak eta gizarte ikerketa aplikatuko proiektuak garatzen ditudana, ikerketa eta aholkularitza zerbitzuetarako prest. TÖCA eta Mozkor egungo produktu gisa, ekoizpenean. Kudeaketa integrala: diseinua, garapena, hedapena, marketina eta negozio eredua.',
      },
      {
        period: '2024ko urr. — 2025eko urr.',
        role: 'Ikertzaile praktiketan (MAL)',
        org: 'Innok Lab · UPV/EHU',
        description:
          'Gizarte Zientzien Fakultateko espazioen esanahi-berritzeari buruzko Master Amaierako Lanaren garapena, Campus Bizia Labekin elkarlanean. Kartografia emozionala, elkarrizketak, behaketa eta analisi bisuala.',
      },
      {
        period: '2023 — 2025',
        role: 'Arduradun / Hezitzaile sozioedukatzailea',
        org: 'BIRA Hezkuntza eta Kirola',
        description: 'Gazte taldeen koordinazioa eta jarduera sozio-hezitzaileetan laguntzea.',
      },
    ],
  },
  tools: {
    number: '05',
    kicker: 'Tresnak',
    title: 'Lan tresnak.',
    description: 'Egunerokoan ikertu, aztertu eta eraikitzeko erabiltzen dudana.',
    groups: [
      { label: 'Datuen analisia', items: ['SPSS', 'Jamovi', 'Excel'] },
      { label: 'Bistaratzea eta kartografia', items: ['Power BI', 'QGIS'] },
      { label: 'Kualitatiboa', items: ['Whisper', 'Otter.ai'] },
      { label: 'Garapena', items: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel', 'Stripe'] },
      { label: 'AA', items: ['Claude', 'ChatGPT', 'Gemini', 'Prompt engineering', 'LLMen integrazioa', 'Outputen ebaluazioa'] },
      { label: 'Kudeaketa', items: ['Notion', 'Trello', 'Slack', 'MS Teams'] },
    ],
  },
  education: {
    number: '06',
    kicker: 'Ikasketak',
    title: 'Egiaztagiriak.',
    description: 'Soziologiako prestakuntza akademikoa, ziurtagiri aplikatuak eta hizkuntza gaitasuna.',
    items: [
      {
        period: '2024ko urr. — 2025eko urr.',
        title: 'Gizarte Zientzietako Ikerketa Eredu eta Arloen Masterra',
        org: 'Euskal Herriko Unibertsitatea · UPV/EHU',
      },
      {
        period: '2018ko ira. — 2024ko ira.',
        title: 'Soziologia Gradua',
        org: 'Euskal Herriko Unibertsitatea · UPV/EHU',
        note: 'Prozesu, Sare eta Egitura Sozialen Aipamena',
      },
      {
        period: '2015 — 2017',
        title: 'Batxilergoa',
        org: 'Calasancio Eskolapioak Ikastetxea · Bilbo',
      },
    ],
    certificationsLabel: 'Ziurtagiriak',
    certifications: [
      'Sare Sozialetako Big Data Analisia — UPV/EHU (2024)',
      'Lan Arriskuen Prebentzioa (2023)',
      'Elikagaien Manipulatzailea (2024)',
      'B motako gidabaimena',
    ],
    languagesLabel: 'Hizkuntzak',
    languages: [
      { name: 'Gaztelania', level: 'Ama-hizkuntza' },
      { name: 'Euskara', level: 'Aurreratua · B2 (2025)' },
      { name: 'Ingelesa', level: 'Aurreratua · B2 (2016)' },
    ],
  },
  contact: {
    number: '07',
    kicker: 'Kontaktua',
    title: 'Egin dezagun zerbait',
    titleItalic: 'elkarrekin',
    description:
      'Buruan proiekturen bat baduzu —ikerketa, AArekin produktua edo biak— kontatu iezadazu. Normalean 24 ordu baino lehen erantzuten dut.',
    labels: {
      location: 'Kokapena',
      availability: 'Eskuragarritasuna',
      availabilityValue: 'Freelance · lankidetzak',
      languages: 'Hizkuntzak',
    },
  },
  footer: {
    tagline: 'Gizarte ikerketa + AArekin produktua.',
    rights: 'Eskubide guztiak erreserbatuta.',
    builtWith: 'Astro, Tailwind eta Fraunces-ekin, gogoz egina.',
    notesLink: 'Oharrak',
  },
  notesPage: {
    kicker: 'Oharrak',
    title: 'Oharrak eta idatziak.',
    description:
      'Gizarte ikerketari, AAri eta produktuari buruzko ohar solteak. Ozenki pentsatzeko nire modua.',
    empty: 'Edukia laster hemen.',
    backToList: '← Ohar guztiak',
    backToHome: '← Hasierara itzuli',
    readMore: 'Irakurri →',
  },
  projectsData: {
    online: 'Online',
    livePreview: 'Live preview',
  },
} as const;
