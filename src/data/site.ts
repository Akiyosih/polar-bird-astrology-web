import type { Lang } from "../lib/i18n";

export type PageKey = "purchase" | "reading-policy" | "about";
export type ReportTypeKey = "natal" | "solar-return" | "new-moon";

type TextBlock = {
  heading: string;
  body: string[];
  link?: PageLink;
};

type PageLink = {
  href: string;
  label: string;
};

type PageCopy = {
  title: string;
  description: string;
  descriptionParagraphs?: string[];
  eyebrow?: string;
  profileImage?: {
    src: string;
    alt: string;
  };
  blocks: TextBlock[];
  links?: PageLink[];
};

type NavItem = {
  href: string;
  label: string;
  badge?: string;
};

type UiCopy = {
  heroPrimary: string;
  heroSecondary: string;
  reportHubEyebrow: string;
  reportHubTitle: string;
  reportHubDescription: string;
  reportHubDescriptionParagraphs?: string[];
  fieldNotesEyebrow: string;
  fieldNotesTitle: string;
  fieldNotesDescription: string;
  readNoteLabel: string;
  focusLabel: string;
  periodLabel: string;
  chartLegendTitle: string;
  tableOfContentsTitle: string;
  publicationBoundaryTitle: string;
  publicationBoundaryText: string;
  publicationBoundaryParagraphs?: string[];
  footerNotice: string;
  footerLinks: {
    sampleReports: string;
    readingPolicy: string;
    purchase: string;
    about: string;
  };
};

type ChartLegendItem = {
  key: string;
  glyph: string;
  label: string;
};

type ChartLegendGroup = {
  key: string;
  items: ChartLegendItem[];
};

type ReportTypeCopy = {
  key: ReportTypeKey;
  label: string;
  title: string;
  summary: string;
  focus: string;
  emptyLabel: string;
};

export const repoUrl = "https://github.com/Akiyosih/polar-bird-astrology-web";
export const corePayUrl = "https://corepay.money/";
export const coreBlockchainUrl = "https://coreblockchain.net/";
export const coreCatsUrl = "https://core-cats.pages.dev/";
const coreBlockchainJa = "Core Blockchain";

export const chartLegendGroups: Record<Lang, ChartLegendGroup[]> = {
  en: [
    {
      key: "personal-planets",
      items: [
        { key: "sun", glyph: "☉", label: "Sun" },
        { key: "moon", glyph: "☽", label: "Moon" },
        { key: "mercury", glyph: "☿", label: "Mercury" },
        { key: "venus", glyph: "♀", label: "Venus" },
        { key: "mars", glyph: "♂", label: "Mars" }
      ]
    },
    {
      key: "social-outer-planets",
      items: [
        { key: "jupiter", glyph: "♃", label: "Jupiter" },
        { key: "saturn", glyph: "♄", label: "Saturn" },
        { key: "uranus", glyph: "♅", label: "Uranus" },
        { key: "neptune", glyph: "♆", label: "Neptune" },
        { key: "pluto", glyph: "♇", label: "Pluto" }
      ]
    },
    {
      key: "points",
      items: [
        { key: "fortune", glyph: "⊗", label: "Part of Fortune" },
        { key: "north-node", glyph: "☊", label: "North Node" },
        { key: "south-node", glyph: "☋", label: "South Node" },
        { key: "chiron", glyph: "⚷", label: "Chiron" }
      ]
    },
    {
      key: "angles",
      items: [
        { key: "asc", glyph: "Asc", label: "Ascendant" },
        { key: "mc", glyph: "MC", label: "MC" },
        { key: "dsc", glyph: "Dsc", label: "Descendant" },
        { key: "ic", glyph: "IC", label: "IC" }
      ]
    }
  ],
  ja: [
    {
      key: "personal-planets",
      items: [
        { key: "sun", glyph: "☉", label: "太陽" },
        { key: "moon", glyph: "☽", label: "月" },
        { key: "mercury", glyph: "☿", label: "水星" },
        { key: "venus", glyph: "♀", label: "金星" },
        { key: "mars", glyph: "♂", label: "火星" }
      ]
    },
    {
      key: "social-outer-planets",
      items: [
        { key: "jupiter", glyph: "♃", label: "木星" },
        { key: "saturn", glyph: "♄", label: "土星" },
        { key: "uranus", glyph: "♅", label: "天王星" },
        { key: "neptune", glyph: "♆", label: "海王星" },
        { key: "pluto", glyph: "♇", label: "冥王星" }
      ]
    },
    {
      key: "points",
      items: [
        { key: "fortune", glyph: "⊗", label: "パートオブフォーチュン" },
        { key: "north-node", glyph: "☊", label: "ドラゴンヘッド" },
        { key: "south-node", glyph: "☋", label: "ドラゴンテイル" },
        { key: "chiron", glyph: "⚷", label: "キロン" }
      ]
    },
    {
      key: "angles",
      items: [
        { key: "asc", glyph: "Asc", label: "アセンダント" },
        { key: "mc", glyph: "MC", label: "MC（ミッドヘブン）" },
        { key: "dsc", glyph: "Dsc", label: "ディセンダント" },
        { key: "ic", glyph: "IC", label: "IC（イムム・コエリ）" }
      ]
    }
  ],
  de: [
    {
      key: "personal-planets",
      items: [
        { key: "sun", glyph: "☉", label: "Sonne" },
        { key: "moon", glyph: "☽", label: "Mond" },
        { key: "mercury", glyph: "☿", label: "Merkur" },
        { key: "venus", glyph: "♀", label: "Venus" },
        { key: "mars", glyph: "♂", label: "Mars" }
      ]
    },
    {
      key: "social-outer-planets",
      items: [
        { key: "jupiter", glyph: "♃", label: "Jupiter" },
        { key: "saturn", glyph: "♄", label: "Saturn" },
        { key: "uranus", glyph: "♅", label: "Uranus" },
        { key: "neptune", glyph: "♆", label: "Neptun" },
        { key: "pluto", glyph: "♇", label: "Pluto" }
      ]
    },
    {
      key: "points",
      items: [
        { key: "fortune", glyph: "⊗", label: "Glueckspunkt" },
        { key: "north-node", glyph: "☊", label: "Aufsteigender Mondknoten" },
        { key: "south-node", glyph: "☋", label: "Absteigender Mondknoten" },
        { key: "chiron", glyph: "⚷", label: "Chiron" }
      ]
    },
    {
      key: "angles",
      items: [
        { key: "asc", glyph: "Asc", label: "Aszendent" },
        { key: "mc", glyph: "MC", label: "MC" },
        { key: "dsc", glyph: "Dsc", label: "Deszendent" },
        { key: "ic", glyph: "IC", label: "IC" }
      ]
    }
  ]
};

export const navItems: Record<Lang, NavItem[]> = {
  en: [
    { href: "core-field-notes", label: "Sample Reports" },
    { href: "purchase", label: "Report Purchase", badge: "soon" },
    { href: "reading-policy", label: "How We Read" },
    { href: "about", label: "Writer" }
  ],
  ja: [
    { href: "core-field-notes", label: "サンプルレポート" },
    { href: "purchase", label: "レポート購入", badge: "soon" },
    { href: "reading-policy", label: "読み方と方針" },
    { href: "about", label: "書き手" }
  ],
  de: [
    { href: "core-field-notes", label: "Beispielreports" },
    { href: "purchase", label: "Report kaufen", badge: "soon" },
    { href: "reading-policy", label: "Leseweise" },
    { href: "about", label: "Autor" }
  ]
};

export const reportTypes: Record<Lang, ReportTypeCopy[]> = {
  en: [
    {
      key: "natal",
      label: "Natal report",
      title: "Core Blockchain's\nBasic Structure",
      summary:
        "From Core Blockchain's natal chart, this report reads the long-lasting basic structure, response rhythm, and community foundation.",
      focus: "Basic structure, response rhythm, foundation",
      emptyLabel: "Coming soon"
    },
    {
      key: "solar-return",
      label: "Solar return report",
      title: "Core Blockchain's\n2026 Theme",
      summary:
        "From the solar return chart, this report reads the themes most likely to draw focus in 2026 and how Core Blockchain's existing ecosystem patterns become visible that year.",
      focus: "Annual theme, visible ecosystem pattern, focus",
      emptyLabel: "Coming soon"
    },
    {
      key: "new-moon",
      label: "New moon report",
      title: "Core Blockchain's\nNew Moon Cycle",
      summary:
        "From the new moon chart, this report reads the active themes in the published cycle, the community atmosphere, and the lunar rhythm to observe.",
      focus: "Central theme, lunar rhythm, observation points",
      emptyLabel: "Coming soon"
    }
  ],
  ja: [
    {
      key: "natal",
      label: "出生図レポート",
      title: `${coreBlockchainJa}の\n基本構造`,
      summary:
        `${coreBlockchainJa}の出生図から、長く続く基本構造、反応のリズム、コミュニティの土台を読みます。`,
      focus: "基本構造、反応のリズム、土台",
      emptyLabel: "準備中"
    },
    {
      key: "solar-return",
      label: "太陽回帰レポート",
      title: `${coreBlockchainJa}の\n2026年のテーマ`,
      summary:
        `太陽回帰図から、2026年に焦点が当たりやすいテーマと、${coreBlockchainJa}の性質がその年にどう表へ出るかを読みます。`,
      focus: "年間テーマ、表に出る役割、焦点",
      emptyLabel: "準備中"
    },
    {
      key: "new-moon",
      label: "新月レポート",
      title: `${coreBlockchainJa}の\n新月サイクル`,
      summary:
        "新月図から、公開中のサイクルで動きやすいテーマ、コミュニティの空気、観察したい月相リズムを読みます。",
      focus: "中心テーマ、月相リズム、観察点",
      emptyLabel: "準備中"
    }
  ],
  de: [
    {
      key: "natal",
      label: "Radix-Report",
      title: "Cores Grundmuster",
      summary:
        "Eine Public-Entity-Lesung von Cores Basischart: langfristige Struktur, Reaktionsrhythmus und Community-Fundament.",
      focus: "Grundmuster, Reaktionsrhythmus, Community-Basis",
      emptyLabel: "Bald"
    },
    {
      key: "solar-return",
      label: "Solar-Return-Report",
      title: "Cores Thema 2026",
      summary:
        "Eine Jahreslesung fuer die Buehne 2026: wo sich Betonung sammelt und wie Cores bestehendes Muster sichtbar wird.",
      focus: "Thema 2026, Jahresbuehne, Fokus",
      emptyLabel: "Bald"
    },
    {
      key: "new-moon",
      label: "Neumond-Report",
      title: "Cores Neumond-Zyklus",
      summary:
        "Eine Zykluslesung fuer den veroeffentlichten Neumondzeitraum: aktive Themen, Community-Atmosphaere und Mondrhythmus.",
      focus: "Veroeffentlichter Zyklus, Mondrhythmus",
      emptyLabel: "Bald"
    }
  ]
};

export const uiCopy: Record<Lang, UiCopy> = {
  en: {
    heroPrimary: "Read sample reports",
    heroSecondary: "Purchase status",
    reportHubEyebrow: "Currently published",
    reportHubTitle: "Three Views on Core Blockchain",
    reportHubDescription:
      "The natal report reads Core Blockchain's basic structure. The solar return reads the annual stage for 2026. The new moon report reads the currently published cycle. Polar Bird Astrology publishes the set as an example of reading a business or community.",
    reportHubDescriptionParagraphs: [
      "The natal report reads Core Blockchain's basic structure. The solar return reads the annual stage for 2026. The new moon report reads the currently published cycle.",
      "Polar Bird Astrology publishes the set as an example of reading a business or community."
    ],
    fieldNotesEyebrow: "Sample reports on Core Blockchain",
    fieldNotesTitle: "Sample Reports",
    fieldNotesDescription:
      "A public ecosystem can also be read through a natal chart, solar return, and new moon cycle. The current library publishes three reports on Core Blockchain.",
    readNoteLabel: "Read",
    focusLabel: "Focus",
    periodLabel: "Period",
    chartLegendTitle: "Legend",
    tableOfContentsTitle: "Contents",
    publicationBoundaryTitle: "Reading Style and Boundary",
    publicationBoundaryText:
      "The report body covers themes that can be read astrologically. For product facts, the report refers to public source information. Price and investment decisions are outside these reports.",
    publicationBoundaryParagraphs: [
      "The report body covers themes that can be read astrologically.",
      "For product facts, the report refers to public source information. Price and investment decisions are outside these reports."
    ],
    footerNotice:
      "Polar Bird Astrology publishes astrology reports that read natal charts, solar returns, and new moon cycles.",
    footerLinks: {
      sampleReports: "Sample Reports",
      readingPolicy: "How we read",
      purchase: "Purchase status",
      about: "Writer"
    }
  },
  ja: {
    heroPrimary: "サンプルレポートを読む",
    heroSecondary: "レポート購入",
    reportHubEyebrow: "現在公開中",
    reportHubTitle: "Core Blockchainを読み解く三つの視点",
    reportHubDescription:
      "出生図はCore Blockchainの基本構造、太陽回帰は2026年の舞台、新月は公開中のサイクルを読みます。事業やコミュニティを読むレポート例として公開しています。",
    reportHubDescriptionParagraphs: [
      "出生図はCore Blockchainの基本構造、太陽回帰は2026年の舞台、新月は公開中のサイクルを読みます。",
      "事業やコミュニティを読むレポート例として公開しています。"
    ],
    fieldNotesEyebrow: "Core Blockchainを題材にしたレポート例",
    fieldNotesTitle: "サンプルレポート",
    fieldNotesDescription:
      "人ではない公開エコシステムも、出生図、太陽回帰、新月サイクルで読めます。現在はCore Blockchainの3レポートを公開しています。",
    readNoteLabel: "読む",
    focusLabel: "焦点",
    periodLabel: "対象期間",
    chartLegendTitle: "凡例",
    tableOfContentsTitle: "目次",
    publicationBoundaryTitle: "読み方と境界",
    publicationBoundaryText:
      "レポート本文では、占星術で読めるテーマを扱います。プロダクト事実は公開元の情報を参照します。価格や投資判断は、このレポートの対象外です。",
    publicationBoundaryParagraphs: [
      "レポート本文では、占星術で読めるテーマを扱います。",
      "プロダクト事実は公開元の情報を参照します。価格や投資判断は、このレポートの対象外です。"
    ],
    footerNotice:
      "Polar Bird Astrologyは、出生図・太陽回帰・新月サイクルを読む占星術レポートを公開しています。",
    footerLinks: {
      sampleReports: "サンプルレポート",
      readingPolicy: "読み方と方針",
      purchase: "レポート購入",
      about: "書き手"
    }
  },
  de: {
    heroPrimary: "Beispielreports lesen",
    heroSecondary: "Kaufvorbereitung ansehen",
    reportHubEyebrow: "Aktuell veroeffentlicht",
    reportHubTitle: "Drei Beispielreports fuer Core",
    reportHubDescription:
      "Radix liest das Grundmuster, Solar Return die Jahresbuehne 2026, und Neumond den veroeffentlichten Zyklus.",
    reportHubDescriptionParagraphs: [
      "Radix liest das Grundmuster, Solar Return die Jahresbuehne 2026, und Neumond den veroeffentlichten Zyklus.",
      "Zusammen zeigen sie, wie Polar Bird Astrology ein oeffentliches Oekosystem lesen kann."
    ],
    fieldNotesEyebrow: "Core als oeffentliches Beispiel",
    fieldNotesTitle: "Beispielreports: Core",
    fieldNotesDescription:
      "Core ist hier ein Beispiel fuer eine Business- und Community-Lesung mit Radix, Solar Return und Neumond-Zyklus.",
    readNoteLabel: "Lesen",
    focusLabel: "Fokus",
    periodLabel: "Zeitraum",
    chartLegendTitle: "Legende",
    tableOfContentsTitle: "Inhalt",
    publicationBoundaryTitle: "Lesegrenze",
    publicationBoundaryText:
      "Der Report behandelt astrologisch lesbare Themen. Produktfakten gehoeren zu oeffentlichen Quellen. Preis- und Investmententscheidungen liegen ausserhalb dieser Reports.",
    publicationBoundaryParagraphs: [
      "Der Report behandelt astrologisch lesbare Themen.",
      "Produktfakten gehoeren zu oeffentlichen Quellen. Preis- und Investmententscheidungen liegen ausserhalb dieser Reports."
    ],
    footerNotice:
      "Polar Bird Astrology veroeffentlicht astrologische Reports zu Radix, Solar Return und Neumond-Zyklen.",
    footerLinks: {
      sampleReports: "Beispielreports",
      readingPolicy: "Leseweise",
      purchase: "Kaufvorbereitung",
      about: "Autor"
    }
  }
};

export const homeCopy: Record<Lang, PageCopy> = {
  en: {
    title: "Polar Bird Astrology",
    eyebrow: "Astrology reports that read charts for timing and choice",
    description:
      "Polar Bird Astrology combines natal charts, solar returns, and new moon cycles to read themes you can use for self-understanding, daily choices, and action planning. The current public samples read Core Blockchain.",
    descriptionParagraphs: [
      "Polar Bird Astrology combines natal charts, solar returns, and new moon cycles to read themes you can use for self-understanding, daily choices, and action planning.",
      "The current public samples read Core Blockchain."
    ],
    blocks: [
      {
        heading: "Report types",
        body: [
          "Natal reports read basic structure. Solar returns read the stage of the year. New moon reports read the active themes in that cycle.",
          "They are shaped for personal self-understanding and for observing the flow of a business or community."
        ],
        link: { href: "reading-policy", label: "See how we read" }
      },
      {
        heading: "CorePay report purchases",
        body: [
          "Polar Bird Astrology is preparing report purchases through CorePay, designed to be easy for the Core Blockchain community to try.",
          "For now, you can read the sample reports on Core Blockchain."
        ],
        link: { href: "purchase", label: "Purchase status" }
      }
    ]
  },
  ja: {
    title: "Polar Bird Astrology",
    eyebrow: "星まわりを読む占星術レポート",
    description:
      "出生図、太陽回帰、新月サイクルを組み合わせて、自己理解、日々の選択、行動計画に使えるテーマを読みます。現在はCore Blockchainのサンプルレポートを公開しています。",
    descriptionParagraphs: [
      "出生図、太陽回帰、新月サイクルを組み合わせて、自己理解、日々の選択、行動計画に使えるテーマを読みます。",
      "現在はCore Blockchainのサンプルレポートを公開しています。"
    ],
    blocks: [
      {
        heading: "レポートの種類",
        body: [
          "出生図は基本構造、太陽回帰は一年の舞台、新月はそのサイクルで動きやすいテーマを読みます。",
          "人の自己理解にも、事業やコミュニティの流れを観察する読み物にも使える形で整えています。"
        ],
        link: { href: "reading-policy", label: "読み方と方針を見る" }
      },
      {
        heading: "CorePayでの購入導線",
        body: [
          "CorePayを使って、Core Blockchainコミュニティでも試しやすいレポート購入導線を準備しています。",
          "今はCore Blockchainを題材にしたサンプルレポートを読めます。"
        ],
        link: { href: "purchase", label: "レポート購入" }
      }
    ]
  },
  de: {
    title: "Polar Bird Astrology",
    eyebrow: "Astrologische Reports fuer Rhythmus, Timing und Wahl",
    description:
      "Polar Bird Astrology liest Radix, Solar Return und Neumond-Zyklen fuer Selbstverstaendnis, Timing und reflektierte Planung. Die aktuelle Beispielbibliothek folgt Core als oeffentlichem Oekosystem.",
    descriptionParagraphs: [
      "Polar Bird Astrology liest Radix, Solar Return und Neumond-Zyklen fuer Selbstverstaendnis, Timing und reflektierte Planung.",
      "Die aktuelle Beispielbibliothek folgt Core als oeffentlichem Oekosystem."
    ],
    blocks: [
      {
        heading: "Reporttypen",
        body: [
          "Radixreports lesen Grundmuster. Solar Returns lesen die Jahresbuehne. Neumondreports lesen den Rhythmus von Neumond zu Neumond.",
          "Dieselbe Struktur kann Selbstverstaendnis und Business- oder Community-Beobachtung tragen."
        ],
        link: { href: "reading-policy", label: "Leseweise ansehen" }
      },
      {
        heading: "CorePay-Kaufweg",
        body: [
          "Ein Reportkauf mit CorePay wird vorbereitet, damit die Core-Community die Erfahrung leicht testen kann.",
          "Derzeit sind die Core-Beispielreports oeffentlich lesbar."
        ],
        link: { href: "purchase", label: "Kaufvorbereitung ansehen" }
      }
    ]
  }
};

export const pages: Record<Lang, Record<PageKey, PageCopy>> = {
  en: {
    purchase: {
      title: "Report Purchase",
      eyebrow: "Purchases are being prepared",
      description:
        "Polar Bird Astrology is preparing online report purchases.",
      blocks: [
        {
          heading: "CorePay report purchases",
          body: [
            "Polar Bird Astrology is preparing online purchase options for natal, solar return, and new moon cycle reports.",
            "It is being designed around CorePay as an easy purchase experience for the Core Blockchain community.",
            "As related Core Blockchain products are released, Polar Bird Astrology will expand the token options available for report purchases."
          ]
        },
        {
          heading: "Sample reports to read first",
          body: [
            "The current public samples read Core Blockchain.",
            "They show how the same astrology structure can support personal self-understanding and observation of a business or community."
          ]
        }
      ],
      links: [
        { href: corePayUrl, label: "CorePay website" },
        { href: coreBlockchainUrl, label: "Core Blockchain website" }
      ]
    },
    "reading-policy": {
      title: "How We Read",
      eyebrow: "Astrology style",
      description:
        "Polar Bird Astrology's astrology style, the role of the three report types, and the boundary of interpretation.",
      blocks: [
        {
          heading: "Reading style",
          body: [
            "Polar Bird Astrology is based on Western astrology and uses a reading style close to psychological and humanistic astrology.",
            "The standard three reports use the tropical zodiac and Placidus houses. The North Node and South Node are read with True Node."
          ]
        },
        {
          heading: "Natal chart",
          body: [
            "A natal chart reading covers basic structure, harder-to-change qualities, and response patterns.",
            "It looks at the rhythm a person or subject carries over time and translates it into language that can support self-understanding and decisions."
          ]
        },
        {
          heading: "Solar return",
          body: [
            "A solar return reads the stage of the year, the themes most likely to draw focus, and the way existing qualities are used.",
            "It is a year-level reading. Finer monthly or date-level timing belongs to another time layer, such as new moon cycles."
          ]
        },
        {
          heading: "New moon cycle",
          body: [
            "A new moon cycle reads the rhythm from one new moon to the next, active themes, and observation points for daily choices.",
            "It helps organize what to start, what to adjust, and the order that makes the cycle easier to work with."
          ]
        },
        {
          heading: "People, businesses, and communities",
          body: [
            "When Polar Bird Astrology reads a person, it translates the chart into feelings, relationships, work, and everyday life.",
            "When it reads a business or community, it translates the same symbols into community atmosphere, participation, trust, public explanation, and operations."
          ]
        },
        {
          heading: "Interpretive boundary",
          body: [
            "When the chart supports a direct reading, Polar Bird Astrology writes in clear, affirmative language instead of leaving the point as symbol or metaphor only.",
            "Official information, product facts, prices, investment decisions, and guaranteed outcomes remain outside the astrology report.",
            "The public repository shows the website implementation, published reports, and the reading policy used for this site."
          ]
        }
      ],
      links: [{ href: repoUrl, label: "Public repository" }]
    },
    about: {
      title: "About the Writer",
      eyebrow: "Writer of Polar Bird Astrology",
      description:
        "Polar Bird Astrology turns star rhythms into language for daily choices and action planning.",
      profileImage: {
        src: "/images/profile/writer-profile.jpg",
        alt: "Portrait of the Polar Bird Astrology writer"
      },
      descriptionParagraphs: [
        "Polar Bird Astrology turns star rhythms into language for daily choices and action planning.",
        "It does not leave symbolism as vague metaphor. It shapes themes read from natal charts, solar returns, and new moon cycles into concrete, usable sentences."
      ],
      blocks: [
        {
          heading: "Astrology stance",
          body: [
            "Looking at the night sky clears my mind.",
            "I am drawn to the way coherent symbolism rises from the movement of the stars, in a way that is hard to dismiss as coincidence.",
            "I do not treat astrology as fortune-telling alone. I aim for concrete, clear readings that can support self-understanding, daily decisions, and action planning."
          ]
        },
        {
          heading: "Writer",
          body: [
            "I am Japanese and graduated from the University of Tokyo.",
            "I live in an old house in the mountains, close to seasonal change and the night sky.",
            "Whether the subject is a person, business, or community, I read the chart naturally and put it into language the reader can use."
          ]
        },
        {
          heading: "Life and interests",
          body: [
            "I live with a cockatiel and cats.",
            "I am interested in cigars, whisky, and mountain life, and I hold a hunting license.",
            "These personal backgrounds connect to a reading style that values nature, time, body awareness, and quiet observation."
          ]
        },
        {
          heading: "Public work",
          body: [
            "Core Cats is another public creative project for the Core Blockchain community.",
            "The same stance carries through: making something readable, enjoyable, and easy for the community to talk about."
          ],
          link: { href: coreCatsUrl, label: "See Core Cats" }
        }
      ]
    }
  },
  ja: {
    purchase: {
      title: "レポート購入",
      eyebrow: "CorePay導線を準備中",
      description:
        "Polar Bird Astrologyの占星術レポートを申し込める導線を準備しています。",
      blocks: [
        {
          heading: "CorePayでの購入導線",
          body: [
            "出生図、太陽回帰、新月サイクルのレポートを、Webから購入できる導線を準備しています。",
            "CorePayを使い、Core Blockchainコミュニティでも試しやすい購入体験として設計しています。",
            "Core Blockchain周辺のプロダクトリリースに応じて、レポート購入に使えるトークンを広げていきます。"
          ]
        },
        {
          heading: "購入前に読めるレポート例",
          body: [
            "現在はCore Blockchainを題材にしたサンプルレポートを公開しています。",
            "同じ占星術の構造で、人の自己理解にも、事業やコミュニティの流れの観察にも使えることを示すためのサンプルです。"
          ]
        }
      ],
      links: [
        { href: corePayUrl, label: "CorePay公式サイトを見る" },
        { href: coreBlockchainUrl, label: "Core Blockchain公式サイトを見る" }
      ]
    },
    "reading-policy": {
      title: "読み方と方針",
      eyebrow: "占星術の採用スタイル",
      description:
        "Polar Bird Astrologyが採用している占星術スタイル、3つのレポートの役割、解釈の境界をまとめます。",
      blocks: [
        {
          heading: "採用しているスタイル",
          body: [
            "Polar Bird Astrologyは、西洋占星術をベースに、心理占星術・人間性占星術寄りの読み方を採用しています。",
            "標準の3レポートは、トロピカル方式とプラシーダスハウスを基準にし、ドラゴンヘッド／ドラゴンテイルはTrue Nodeで扱います。"
          ]
        },
        {
          heading: "出生図",
          body: [
            "出生図は、基本構造、変わりにくい性質、反応のパターンを読みます。",
            "その人や対象が長く持ち続けるリズムを見て、自己理解や判断の土台に使える言葉へ翻訳します。"
          ]
        },
        {
          heading: "太陽回帰",
          body: [
            "太陽回帰は、その年の舞台、焦点が当たりやすいテーマ、既存の性質の使われ方を読みます。",
            "年単位の読みとして扱い、月ごと・日付ごとの細かなタイミングは新月サイクルなど別の時間層で確認します。"
          ]
        },
        {
          heading: "新月サイクル",
          body: [
            "新月サイクルは、新月から次の新月までのリズム、動きやすいテーマ、日々の選択に使える観察点を読みます。",
            "その月に何を始め、何を整え、どの順番で扱うと動きやすいかを、現在のサイクルの言葉で整理します。"
          ]
        },
        {
          heading: "人と事業・コミュニティ",
          body: [
            "人を読むときは、感情、関係性、仕事、生活の場面へ翻訳します。",
            "事業やコミュニティを読むときは、同じ象徴を、コミュニティの空気、参加、信頼、説明、運用の言葉へ置き換えます。"
          ]
        },
        {
          heading: "解釈の境界",
          body: [
            "占星術で自然に読めるところは、象徴や比喩だけで済ませず、分かりやすい言葉で肯定形に読みます。",
            "公式情報、プロダクト事実、価格、投資判断、成果保証は、占星術レポートの対象外です。",
            "公開リポジトリでは、Webサイトの実装、公開レポート、採用している読み方の方針を確認できます。"
          ]
        }
      ],
      links: [{ href: repoUrl, label: "公開リポジトリ" }]
    },
    about: {
      title: "書き手について",
      eyebrow: "Polar Bird Astrologyの書き手",
      description:
        "Polar Bird Astrologyは、星まわりを日々の選択や行動計画に使える言葉へ翻訳する占星術レポートです。",
      profileImage: {
        src: "/images/profile/writer-profile.jpg",
        alt: "Polar Bird Astrologyの書き手のポートレート"
      },
      descriptionParagraphs: [
        "Polar Bird Astrologyは、星まわりを日々の選択や行動計画に使える言葉へ翻訳する占星術レポートです。",
        "象徴を曖昧な比喩だけで終わらせず、出生図、太陽回帰、新月サイクルから読み取れるテーマを、具体的で扱いやすい文章に整えています。"
      ],
      blocks: [
        {
          heading: "占星術への姿勢",
          body: [
            "星空を見上げると、心が洗われる感覚があります。",
            "その星まわりから、偶然では片づけにくい整合的な象意が立ち上がるところに惹かれています。",
            "ただの占いとしてではなく、自己理解、日々の意思決定、行動計画に使える読みとして、具体的で分かりやすい鑑定を心がけています。"
          ]
        },
        {
          heading: "書き手",
          body: [
            "日本人です。東京大学を卒業。",
            "山の古民家で暮らし、季節の変化や夜空を近くに感じながら、占星術レポートを書いています。",
            "読む対象が人であっても、事業やコミュニティであっても、星まわりを自然に読み、読み手が扱える言葉へ落とし込みます。"
          ]
        },
        {
          heading: "暮らしと趣味",
          body: [
            "オカメインコと猫と暮らしています。",
            "葉巻、ウイスキー、山での暮らしに関心があり、狩猟免許も持っています。",
            "こうした個人的な背景は、自然、時間、身体感覚、静かな観察を大切にする読み方につながっています。"
          ]
        },
        {
          heading: "公開している制作物",
          body: [
            "Core Catsは、Core Blockchainコミュニティに向けて公開している別の制作物です。",
            "コミュニティに読みやすく、楽しめて、話題にできるものを届けたいという姿勢は共通しています。"
          ],
          link: { href: coreCatsUrl, label: "Core Catsを見る" }
        }
      ]
    }
  },
  de: {
    purchase: {
      title: "Reportkauf",
      eyebrow: "CorePay-Weg in Vorbereitung",
      description:
        "Der Kaufweg fuer Polar Bird Astrology Reports wird vorbereitet.",
      blocks: [
        {
          heading: "Was vorbereitet wird",
          body: [
            "Geplant ist ein einfacher Webkauf fuer Radix-, Solar-Return- und Neumond-Zyklus-Reports.",
            "CorePay ist als Payment-Link-Ebene fuer diesen Ablauf geplant.",
            "Kaeufe ueber diese Website sind noch nicht offen."
          ]
        },
        {
          heading: "Was jetzt lesbar ist",
          body: [
            "Das aktuelle oeffentliche Beispiel ist das Core-Reportset.",
            "Es zeigt, wie dieselbe astrologische Struktur ein oeffentliches Oekosystem und eine Person lesen kann."
          ]
        }
      ],
      links: [{ href: corePayUrl, label: "CorePay Website" }]
    },
    "reading-policy": {
      title: "Leseweise",
      eyebrow: "Stil und Grenze",
      description:
        "Wie Polar Bird Astrology Radix, Solar Return und Neumond-Zyklen nutzt und wo Astrologie von Fakten getrennt bleibt.",
      blocks: [
        {
          heading: "Drei Reporttypen",
          body: [
            "Radixreports lesen Grundstruktur, wiederkehrende Muster und den Basisrhythmus einer Person, eines Business oder einer Community.",
            "Solar Returns lesen die Jahresbuehne: Themen, Fokus und die Art, wie ein bestehendes Muster in diesem Jahr sichtbar wird.",
            "Neumondreports lesen den aktuellen Zyklus: aktive Themen, Rhythmus und Beobachtungspunkte von Neumond zu Neumond."
          ]
        },
        {
          heading: "Nutzung",
          body: [
            "Die Reports uebersetzen Astrologie in alltaegliche Sprache fuer Selbstverstaendnis, Entscheidungen und reflektierte Planung.",
            "Bei Business oder Community werden persoenliche Symbole in oeffentliche Sprache uebersetzt: Atmosphaere, Teilnahme, Vertrauen, Erklaerung und Betrieb."
          ]
        },
        {
          heading: "Grenze",
          body: [
            "Wo Astrologie natuerlich sprechen kann, liest Polar Bird Astrology direkt und affirmativ.",
            "Offizielle Informationen, Produktfakten, Preise, Investmententscheidungen und garantierte Ergebnisse bleiben ausserhalb des Reports."
          ]
        }
      ],
      links: [{ href: repoUrl, label: "Public repository" }]
    },
    about: {
      title: "Autor",
      eyebrow: "Ueber Polar Bird Astrology",
      description:
        "Polar Bird Astrology wird von einem japanischen Autor geschrieben, der astrologische Symbolik in klare Sprache fuer Entscheidungen, Planung und Selbstverstaendnis uebersetzt.",
      profileImage: {
        src: "/images/profile/writer-profile.jpg",
        alt: "Portraet des Autors von Polar Bird Astrology"
      },
      blocks: [
        {
          heading: "Lesehaltung",
          body: [
            "Ich lese Radix, Solar Return und Neumond-Zyklen als Schichten von Zeit, Rhythmus und Bedeutung.",
            "Das Ziel ist nicht vage Symbolik, sondern eine Sprache, die Entscheidungen, Planung und Reflexion unterstuetzen kann."
          ]
        },
        {
          heading: "Hintergrund",
          body: [
            "Ich bin Japaner und habe an der University of Tokyo studiert.",
            "Ich lebe in einem alten Haus in den Bergen und schreibe die Reports nahe an Himmel, Jahreszeiten und stiller Beobachtung."
          ]
        },
        {
          heading: "Persoenliches",
          body: [
            "Ich lebe mit einem Nymphensittich und Katzen.",
            "Zu meinen Interessen gehoeren Zigarren, Whisky und ein naturnahes Leben; ich besitze auch eine Jagdlizenz.",
            "Diese Details stehen nicht im Zentrum der Reports, aber sie gehoeren zu der Person, die sie schreibt."
          ]
        },
        {
          heading: "Oeffentliche Arbeit",
          body: [
            "Core Cats ist ein weiteres oeffentliches Kreativprojekt fuer die Core-Community.",
            "Es ist von Polar Bird Astrology getrennt, teilt aber denselben Wunsch, der Community etwas Lesbares und Angenehmes zu geben."
          ],
          link: { href: coreCatsUrl, label: "Core Cats oeffnen" }
        }
      ]
    }
  }
};
