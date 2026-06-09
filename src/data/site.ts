import type { Lang } from "../lib/i18n";

export type PageKey = "purchase" | "reading-policy" | "about";
export type ReportTypeKey = "natal" | "solar-return" | "new-moon";
export type SampleSubjectKey = "core" | "steve-jobs" | "leonardo-da-vinci";

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
    darkSrc?: string;
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
  homeRouteLabel: string;
  sampleReportsEyebrow: string;
  sampleReportsTitle: string;
  sampleReportsDescription: string;
  sampleReportsDescriptionParagraphs?: string[];
  sampleSubjectTitle: string;
  readNoteLabel: string;
  purchaseStatusLabel: string;
  sampleReportsBackLabel: string;
  otherSamplesLabel: string;
  otherSamplesShortLabel: string;
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

export type ReportTypeCopy = {
  key: ReportTypeKey;
  label: string;
  title: string;
  summary: string;
  focus: string;
  emptyLabel: string;
};

type SampleSubjectCopy = {
  key: SampleSubjectKey;
  label: string;
  eyebrow: string;
  title: string;
  descriptionParagraphs: string[];
  reports: ReportTypeCopy[];
};

export const repoUrl = "https://github.com/Akiyosih/polar-bird-astrology-web";
export const corePayUrl = "https://corepay.money/";
export const coreBlockchainUrl = "https://coreblockchain.net/";
export const coreCatsUrl = "https://core-cats.pages.dev/";
const coreBlockchainJa = "コアブロックチェーン";
const coreBlockchainJaWithEnglish = "コアブロックチェーン（Core Blockchain）";
const steveJobsJa = "スティーブ・ジョブズ";
const leonardoDaVinciJa = "レオナルド・ダ・ヴィンチ";

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
        { key: "fortune", glyph: "⊗", label: "Glückspunkt" },
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
    { href: "sample-reports", label: "Samples" },
    { href: "purchase", label: "Order", badge: "soon" },
    { href: "reading-policy", label: "Approach" },
    { href: "about", label: "Writer" }
  ],
  ja: [
    { href: "sample-reports", label: "サンプルレポート" },
    { href: "purchase", label: "レポート注文", badge: "soon" },
    { href: "reading-policy", label: "読み方と方針" },
    { href: "about", label: "書き手" }
  ],
  de: [
    { href: "sample-reports", label: "Beispielreports" },
    { href: "purchase", label: "Bestellen", badge: "soon" },
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
      label: "New moon cycle report",
      title: "Core Blockchain's\nNew Moon Cycle",
      summary:
        "This report reads the published new moon cycle for active themes, community atmosphere, and lunar rhythms worth observing.",
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
      label: "新月サイクルレポート",
      title: `${coreBlockchainJa}の\n新月サイクル`,
      summary:
        "新月から次の新月までの公開中のサイクルから、動きやすいテーマ、コミュニティの空気、観察したい月相リズムを読みます。",
      focus: "中心テーマ、月相リズム、観察点",
      emptyLabel: "準備中"
    }
  ],
  de: [
    {
      key: "natal",
      label: "Radix-Report",
      title: "Core Blockchain:\nGrundstruktur",
      summary:
        "Der Radix-Report beschreibt die langfristige Grundstruktur von Core Blockchain, den Reaktionsrhythmus und das Fundament der Community.",
      focus: "Grundstruktur, Reaktionsrhythmus, Fundament",
      emptyLabel: "In Vorbereitung"
    },
    {
      key: "solar-return",
      label: "Solar-Return-Report",
      title: "Core Blockchain:\nThema 2026",
      summary:
        "Der Solar-Return-Report arbeitet heraus, welche Themen 2026 leicht in den Fokus rücken. Er zeigt, wie bestehende Muster von Core Blockchain in diesem Jahr sichtbar werden.",
      focus: "Jahresthema, sichtbare Rolle, Fokus",
      emptyLabel: "In Vorbereitung"
    },
    {
      key: "new-moon",
      label: "Neumondzyklus-Report",
      title: "Core Blockchain:\nNeumondzyklus",
      summary:
        "Der Report zum Neumondzyklus zeigt, welche Themen im aktuell veröffentlichten Zyklus leichter in Bewegung kommen. Er beschreibt die Stimmung in der Community und benennt Beobachtungspunkte im Mondphasenrhythmus.",
      focus: "Zentrales Thema, Mondphasenrhythmus, Beobachtungspunkte",
      emptyLabel: "In Vorbereitung"
    }
  ]
};

const steveJobsReportTypes: Record<Lang, ReportTypeCopy[]> = {
  en: [
    {
      key: "natal",
      label: "Natal report",
      title: "Steve Jobs:\nBasic Structure",
      summary:
        "The natal report reads enduring structure, response rhythm, and the foundations of vision and choice.",
      focus: "Basic structure, response rhythm, choice",
      emptyLabel: "Coming soon"
    },
    {
      key: "solar-return",
      label: "Solar return report",
      title: "Steve Jobs:\nSolar Return",
      summary:
        "The solar return report reads the stage of the year, visible themes, and the ways existing qualities can take form.",
      focus: "Annual theme, visible stage, emphasis",
      emptyLabel: "Coming soon"
    },
    {
      key: "new-moon",
      label: "New moon cycle report",
      title: "Steve Jobs:\nNew Moon Cycle",
      summary:
        "The new moon cycle report reads active themes, daily choices, and observation points within the cycle.",
      focus: "Cycle theme, choices, observation points",
      emptyLabel: "Coming soon"
    }
  ],
  ja: [
    {
      key: "natal",
      label: "出生図レポート",
      title: `${steveJobsJa}の\n基本構造`,
      summary:
        `${steveJobsJa}の出生図から、長く続く基本構造、反応のリズム、ビジョンや選択の土台を読みます。`,
      focus: "基本構造、反応のリズム、選択の土台",
      emptyLabel: "準備中"
    },
    {
      key: "solar-return",
      label: "太陽回帰レポート",
      title: `${steveJobsJa}の\n太陽回帰`,
      summary:
        "太陽回帰図から、一年の舞台、表に出やすいテーマ、既存の性質の使われ方を読みます。",
      focus: "年間テーマ、表に出る舞台、焦点",
      emptyLabel: "準備中"
    },
    {
      key: "new-moon",
      label: "新月サイクルレポート",
      title: `${steveJobsJa}の\n新月サイクル`,
      summary:
        "新月サイクルから、そのサイクルで動きやすいテーマ、日々の選択、観察点を読みます。",
      focus: "サイクルのテーマ、選択、観察点",
      emptyLabel: "準備中"
    }
  ],
  de: [
    {
      key: "natal",
      label: "Radix-Report",
      title: "Steve Jobs:\nGrundstruktur",
      summary:
        "Der Radix-Report beschreibt dauerhafte Grundstruktur, Reaktionsrhythmus und die Grundlagen von Vision und Entscheidung.",
      focus: "Grundstruktur, Reaktionsrhythmus, Entscheidung",
      emptyLabel: "In Vorbereitung"
    },
    {
      key: "solar-return",
      label: "Solar-Return-Report",
      title: "Steve Jobs:\nSolar Return",
      summary:
        "Der Solar-Return-Report deutet den Jahresrahmen, sichtbare Themen und die Art, wie vorhandene Qualitäten Form annehmen.",
      focus: "Jahresthema, sichtbarer Rahmen, Schwerpunkt",
      emptyLabel: "In Vorbereitung"
    },
    {
      key: "new-moon",
      label: "Neumondzyklus-Report",
      title: "Steve Jobs:\nNeumondzyklus",
      summary:
        "Der Report zum Neumondzyklus zeigt aktive Themen, tägliche Entscheidungen und Beobachtungspunkte innerhalb des Zyklus.",
      focus: "Zyklusthema, Entscheidungen, Beobachtungspunkte",
      emptyLabel: "In Vorbereitung"
    }
  ]
};

const leonardoDaVinciReportTypes: Record<Lang, ReportTypeCopy[]> = {
  en: [
    {
      key: "natal",
      label: "Natal report",
      title: "Leonardo da Vinci:\nBasic Structure",
      summary:
        "The natal report reads enduring structure, response rhythm, and the foundations of perception and craft.",
      focus: "Basic structure, perception, craft",
      emptyLabel: "Coming soon"
    },
    {
      key: "solar-return",
      label: "Solar return report",
      title: "Leonardo da Vinci:\nSolar Return",
      summary:
        "The solar return report reads the stage of the year, visible themes, and the ways existing qualities can take form.",
      focus: "Annual theme, visible stage, emphasis",
      emptyLabel: "Coming soon"
    },
    {
      key: "new-moon",
      label: "New moon cycle report",
      title: "Leonardo da Vinci:\nNew Moon Cycle",
      summary:
        "The new moon cycle report reads active themes, daily choices, and observation points within the cycle.",
      focus: "Cycle theme, choices, observation points",
      emptyLabel: "Coming soon"
    }
  ],
  ja: [
    {
      key: "natal",
      label: "出生図レポート",
      title: `${leonardoDaVinciJa}の\n基本構造`,
      summary:
        `${leonardoDaVinciJa}の出生図から、長く続く基本構造、反応のリズム、知覚や制作の土台を読みます。`,
      focus: "基本構造、知覚、制作の土台",
      emptyLabel: "準備中"
    },
    {
      key: "solar-return",
      label: "太陽回帰レポート",
      title: `${leonardoDaVinciJa}の\n太陽回帰`,
      summary:
        "太陽回帰図から、一年の舞台、表に出やすいテーマ、既存の性質の使われ方を読みます。",
      focus: "年間テーマ、表に出る舞台、焦点",
      emptyLabel: "準備中"
    },
    {
      key: "new-moon",
      label: "新月サイクルレポート",
      title: `${leonardoDaVinciJa}の\n新月サイクル`,
      summary:
        "新月サイクルから、そのサイクルで動きやすいテーマ、日々の選択、観察点を読みます。",
      focus: "サイクルのテーマ、選択、観察点",
      emptyLabel: "準備中"
    }
  ],
  de: [
    {
      key: "natal",
      label: "Radix-Report",
      title: "Leonardo da Vinci:\nGrundstruktur",
      summary:
        "Der Radix-Report beschreibt dauerhafte Grundstruktur, Reaktionsrhythmus und die Grundlagen von Wahrnehmung und Handwerk.",
      focus: "Grundstruktur, Wahrnehmung, Handwerk",
      emptyLabel: "In Vorbereitung"
    },
    {
      key: "solar-return",
      label: "Solar-Return-Report",
      title: "Leonardo da Vinci:\nSolar Return",
      summary:
        "Der Solar-Return-Report deutet den Jahresrahmen, sichtbare Themen und die Art, wie vorhandene Qualitäten Form annehmen.",
      focus: "Jahresthema, sichtbarer Rahmen, Schwerpunkt",
      emptyLabel: "In Vorbereitung"
    },
    {
      key: "new-moon",
      label: "Neumondzyklus-Report",
      title: "Leonardo da Vinci:\nNeumondzyklus",
      summary:
        "Der Report zum Neumondzyklus zeigt aktive Themen, tägliche Entscheidungen und Beobachtungspunkte innerhalb des Zyklus.",
      focus: "Zyklusthema, Entscheidungen, Beobachtungspunkte",
      emptyLabel: "In Vorbereitung"
    }
  ]
};

export const sampleSubjects: Record<Lang, SampleSubjectCopy[]> = {
  en: [
    {
      key: "core",
      label: "Core Blockchain",
      eyebrow: "Business and community sample",
      title: "Core Blockchain",
      descriptionParagraphs: [
        "Core Blockchain is a sample for reading a business, a public ecosystem, and a community through astrology rather than a person.",
        "You can read its enduring basic structure, its annual theme, and its roughly one-month new moon cycle."
      ],
      reports: reportTypes.en
    },
    {
      key: "steve-jobs",
      label: "Steve Jobs",
      eyebrow: "Public figure sample",
      title: "Steve Jobs",
      descriptionParagraphs: [
        "Steve Jobs is a sample for reading a widely known person through astrology.",
        "The three reports show how personal structure, annual timing, and a short cycle can be read for a person."
      ],
      reports: steveJobsReportTypes.en
    },
    {
      key: "leonardo-da-vinci",
      label: "Leonardo da Vinci",
      eyebrow: "Public figure sample",
      title: "Leonardo da Vinci",
      descriptionParagraphs: [
        "Leonardo da Vinci is a sample for reading a widely known person across historical distance.",
        "The three reports show how personal structure, annual timing, and a short cycle can be read for a person."
      ],
      reports: leonardoDaVinciReportTypes.en
    }
  ],
  ja: [
    {
      key: "core",
      label: coreBlockchainJa,
      eyebrow: "事業・コミュニティのサンプル",
      title: coreBlockchainJa,
      descriptionParagraphs: [
        `${coreBlockchainJa}は、人ではない事業・公開エコシステム・コミュニティを占星術で読むサンプルです。`,
        "長く続く基本構造、一年のテーマ、約1か月の新月サイクルを読むことができます。"
      ],
      reports: reportTypes.ja
    },
    {
      key: "steve-jobs",
      label: steveJobsJa,
      eyebrow: "人物のサンプル",
      title: steveJobsJa,
      descriptionParagraphs: [
        `${steveJobsJa}は、広く知られている人物を占星術で読むサンプルです。`,
        "基本構造、一年のテーマ、約1か月の新月サイクルを通して、個人の読み方を確認できます。"
      ],
      reports: steveJobsReportTypes.ja
    },
    {
      key: "leonardo-da-vinci",
      label: leonardoDaVinciJa,
      eyebrow: "人物のサンプル",
      title: leonardoDaVinciJa,
      descriptionParagraphs: [
        `${leonardoDaVinciJa}は、時代を越えて知られる人物を占星術で読むサンプルです。`,
        "基本構造、一年のテーマ、約1か月の新月サイクルを通して、個人の読み方を確認できます。"
      ],
      reports: leonardoDaVinciReportTypes.ja
    }
  ],
  de: [
    {
      key: "core",
      label: "Core Blockchain",
      eyebrow: "Beispiel für Unternehmen und Community",
      title: "Core Blockchain",
      descriptionParagraphs: [
        "Core Blockchain ist ein Beispiel dafür, wie sich mit Astrologie etwas lesen lässt, das keine Person ist: ein Unternehmen, ein öffentliches Ökosystem und eine Community.",
        "Bei Core Blockchain lassen sich die dauerhafte Grundstruktur, das Thema eines Jahres und ein rund einmonatiger Neumondzyklus lesen."
      ],
      reports: reportTypes.de
    },
    {
      key: "steve-jobs",
      label: "Steve Jobs",
      eyebrow: "Beispiel einer Person",
      title: "Steve Jobs",
      descriptionParagraphs: [
        "Steve Jobs ist ein Beispiel dafür, wie sich eine weithin bekannte Person astrologisch lesen lässt.",
        "Die drei Reports zeigen, wie Grundstruktur, Jahresthema und ein kurzer Zyklus für eine Person gelesen werden können."
      ],
      reports: steveJobsReportTypes.de
    },
    {
      key: "leonardo-da-vinci",
      label: "Leonardo da Vinci",
      eyebrow: "Beispiel einer Person",
      title: "Leonardo da Vinci",
      descriptionParagraphs: [
        "Leonardo da Vinci ist ein Beispiel dafür, wie sich eine weithin bekannte Person mit historischer Distanz astrologisch lesen lässt.",
        "Die drei Reports zeigen, wie Grundstruktur, Jahresthema und ein kurzer Zyklus für eine Person gelesen werden können."
      ],
      reports: leonardoDaVinciReportTypes.de
    }
  ]
};

export const uiCopy: Record<Lang, UiCopy> = {
  en: {
    heroPrimary: "Read sample reports",
    heroSecondary: "Report ordering",
    reportHubEyebrow: "Currently published",
    reportHubTitle: "Three Views on Core Blockchain",
    reportHubDescription:
      "The natal report reads Core Blockchain's basic structure. The solar return reads the annual stage for 2026. The new moon cycle report reads the currently published cycle. Polar Bird Astrology publishes the set as an example of reading a business or community.",
    reportHubDescriptionParagraphs: [
      "The natal report reads Core Blockchain's basic structure. The solar return reads the annual stage for 2026. The new moon cycle report reads the currently published cycle.",
      "Polar Bird Astrology publishes the set as an example of reading a business or community."
    ],
    homeRouteLabel: "Main routes",
    sampleReportsEyebrow: "Published samples",
    sampleReportsTitle: "Sample Reports",
    sampleReportsDescription:
      "Core Blockchain, Steve Jobs, and Leonardo da Vinci are the sample subjects. Across natal, solar return, and new moon cycle reports, you can compare how the reading changes from one subject to another.",
    sampleReportsDescriptionParagraphs: [
      "Core Blockchain, Steve Jobs, and Leonardo da Vinci are the sample subjects.",
      "Across natal, solar return, and new moon cycle reports, you can compare how the reading changes from one subject to another."
    ],
    sampleSubjectTitle: "Choose a Sample Subject",
    readNoteLabel: "Read",
    purchaseStatusLabel: "View ordering details",
    sampleReportsBackLabel: "Back to sample reports",
    otherSamplesLabel: "Other sample reports",
    otherSamplesShortLabel: "Other samples",
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
      purchase: "Report ordering",
      about: "Writer"
    }
  },
  ja: {
    heroPrimary: "サンプルレポートを読む",
    heroSecondary: "レポート注文",
    reportHubEyebrow: "現在公開中",
    reportHubTitle: `${coreBlockchainJa}を読み解く三つの視点`,
    reportHubDescription:
      `出生図は${coreBlockchainJa}の基本構造、太陽回帰は2026年の舞台、新月サイクルは公開中のサイクルを読みます。事業やコミュニティを読むレポート例として公開しています。`,
    reportHubDescriptionParagraphs: [
      `出生図は${coreBlockchainJa}の基本構造、太陽回帰は2026年の舞台、新月サイクルは公開中のサイクルを読みます。`,
      "事業やコミュニティを読むレポート例として公開しています。"
    ],
    homeRouteLabel: "主な導線",
    sampleReportsEyebrow: "公開サンプル",
    sampleReportsTitle: "サンプルレポート",
    sampleReportsDescription:
      `${coreBlockchainJaWithEnglish}、${steveJobsJa}、${leonardoDaVinciJa}をサンプル対象にしています。出生図、太陽回帰、新月サイクルの3種類のレポートを通して、対象ごとの読み方の違いを確認できます。`,
    sampleReportsDescriptionParagraphs: [
      `${coreBlockchainJaWithEnglish}、${steveJobsJa}、${leonardoDaVinciJa}をサンプル対象にしています。`,
      "出生図、太陽回帰、新月サイクルの3種類のレポートを通して、対象ごとの読み方の違いを確認できます。"
    ],
    sampleSubjectTitle: "サンプル対象を選ぶ",
    readNoteLabel: "読む",
    purchaseStatusLabel: "レポート注文へ",
    sampleReportsBackLabel: "サンプルレポートへ戻る",
    otherSamplesLabel: "他のサンプルレポート",
    otherSamplesShortLabel: "他のサンプル",
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
      purchase: "レポート注文",
      about: "書き手"
    }
  },
  de: {
    heroPrimary: "Beispielreports lesen",
    heroSecondary: "Reportbestellung",
    reportHubEyebrow: "Derzeit veröffentlicht",
    reportHubTitle: "Drei Blickwinkel auf Core Blockchain",
    reportHubDescription:
      "Der Radix-Report beschreibt die Grundstruktur von Core Blockchain. Der Solar-Return-Report deutet den Jahresrahmen 2026. Der Report zum Neumondzyklus deutet den aktuell veröffentlichten Zyklus. Dieses Set zeigt, wie Polar Bird Astrology ein Unternehmen oder eine Community astrologisch deutet.",
    reportHubDescriptionParagraphs: [
      "Der Radix-Report beschreibt die Grundstruktur von Core Blockchain. Der Solar-Return-Report deutet den Jahresrahmen 2026. Der Report zum Neumondzyklus deutet den aktuell veröffentlichten Zyklus.",
      "Dieses Set zeigt, wie Polar Bird Astrology ein Unternehmen oder eine Community astrologisch deutet."
    ],
    homeRouteLabel: "Hauptwege",
    sampleReportsEyebrow: "Veröffentlichte Beispiele",
    sampleReportsTitle: "Beispielreports",
    sampleReportsDescription:
      "Core Blockchain, Steve Jobs und Leonardo da Vinci sind die Beispielthemen. An Radix-, Solar-Return- und Neumondzyklus-Reports lässt sich vergleichen, wie sich die Leseweise je nach Thema verändert.",
    sampleReportsDescriptionParagraphs: [
      "Core Blockchain, Steve Jobs und Leonardo da Vinci sind die Beispielthemen.",
      "An Radix-, Solar-Return- und Neumondzyklus-Reports lässt sich vergleichen, wie sich die Leseweise je nach Thema verändert."
    ],
    sampleSubjectTitle: "Beispielthema wählen",
    readNoteLabel: "Lesen",
    purchaseStatusLabel: "Informationen zur Bestellung",
    sampleReportsBackLabel: "Zurück zu den Beispielreports",
    otherSamplesLabel: "Weitere Beispielreports",
    otherSamplesShortLabel: "Weitere Beispiele",
    focusLabel: "Fokus",
    periodLabel: "Zeitraum",
    chartLegendTitle: "Legende",
    tableOfContentsTitle: "Inhalt",
    publicationBoundaryTitle: "Leseweise und Grenze",
    publicationBoundaryText:
      "Der Report behandelt Themen, die sich astrologisch deuten lassen. Für Produktfakten verweist er auf öffentliche Quellen. Preise und Anlageentscheidungen gehören nicht zum Gegenstand dieser Reports.",
    publicationBoundaryParagraphs: [
      "Der Report behandelt Themen, die sich astrologisch deuten lassen.",
      "Für Produktfakten verweist er auf öffentliche Quellen. Preise und Anlageentscheidungen gehören nicht zum Gegenstand dieser Reports."
    ],
    footerNotice:
      "Polar Bird Astrology veröffentlicht astrologische Reports auf Basis von Radix, Solar Return und Neumondzyklus.",
    footerLinks: {
      sampleReports: "Beispielreports",
      readingPolicy: "Leseweise",
      purchase: "Reportbestellung",
      about: "Autor"
    }
  }
};

export const homeCopy: Record<Lang, PageCopy> = {
  en: {
    title: "Polar Bird Astrology",
    eyebrow: "Astrology reports that read charts for timing and choice",
    description:
      "Polar Bird Astrology reads natal charts, solar returns, and new moon cycles, then turns the patterns it finds into language for self-understanding, daily choices, and action planning.",
    descriptionParagraphs: [
      "Polar Bird Astrology reads natal charts, solar returns, and new moon cycles, then turns the patterns it finds into language for self-understanding, daily choices, and action planning."
    ],
    blocks: [
      {
        heading: "Sample reports",
        body: [
          "For Core Blockchain, Steve Jobs, and Leonardo da Vinci, Polar Bird Astrology publishes three sample reports for each subject: natal chart, solar return, and new moon cycle."
        ],
        link: { href: "sample-reports", label: "See samples" }
      },
      {
        heading: "Ordering reports with CorePay",
        body: [
          "Polar Bird Astrology is preparing a simple cross-border report ordering and payment flow using CorePay.",
          "As CorePay expands token support for the Core Blockchain ecosystem, the plan is to make payment possible with a range of tokens."
        ],
        link: { href: "purchase", label: "Report ordering" }
      },
      {
        heading: "How we read",
        body: [
          "See how Polar Bird Astrology reads natal charts, solar returns, and new moon cycles."
        ],
        link: { href: "reading-policy", label: "See how we read" }
      }
    ]
  },
  ja: {
    title: "Polar Bird Astrology",
    eyebrow: "星まわりを読む占星術レポート",
    description:
      "出生図、太陽回帰、新月サイクルから星まわりを読み、自己理解、日々の選択、行動計画に使える言葉へ落とし込みます。",
    descriptionParagraphs: [
      "出生図、太陽回帰、新月サイクルから星まわりを読み、自己理解、日々の選択、行動計画に使える言葉へ落とし込みます。"
    ],
    blocks: [
      {
        heading: "サンプルレポート",
        body: [
          `${coreBlockchainJaWithEnglish}、${steveJobsJa}、${leonardoDaVinciJa}それぞれについて、出生図、太陽回帰、新月サイクルの3種類のサンプルレポートを公開しています。`
        ],
        link: { href: "sample-reports", label: "サンプルを見る" }
      },
      {
        heading: "CorePayでのレポート注文",
        body: [
          "CorePayを使い、国境を越えた簡単なレポート注文・支払い導線を準備しています。",
          `${coreBlockchainJa}の対応に合わせてさまざまなトークンで支払えるようになる予定です。`
        ],
        link: { href: "purchase", label: "注文について" }
      },
      {
        heading: "読み方と方針",
        body: [
          "出生図、太陽回帰、新月サイクルをどのように読むかをまとめています。"
        ],
        link: { href: "reading-policy", label: "読み方を見る" }
      }
    ]
  },
  de: {
    title: "Polar Bird Astrology",
    eyebrow: "Astrologische Reports, die Sternrhythmen lesen",
    description:
      "Polar Bird Astrology liest Radix, Solar Return und Neumondzyklen und formt die darin erkennbaren Muster zu Worten, die Selbstverstehen, tägliche Entscheidungen und die Planung nächster Schritte unterstützen.",
    descriptionParagraphs: [
      "Polar Bird Astrology liest Radix, Solar Return und Neumondzyklen und formt die darin erkennbaren Muster zu Worten, die Selbstverstehen, tägliche Entscheidungen und die Planung nächster Schritte unterstützen."
    ],
    blocks: [
      {
        heading: "Beispielreports",
        body: [
          "Zu Core Blockchain, Steve Jobs und Leonardo da Vinci veröffentlicht Polar Bird Astrology jeweils drei Beispielreports: Radix, Solar Return und Neumondzyklus."
        ],
        link: { href: "sample-reports", label: "Beispiele ansehen" }
      },
      {
        heading: "Reports mit CorePay bestellen",
        body: [
          "Polar Bird Astrology bereitet mit CorePay einen einfachen grenzüberschreitenden Bestell- und Zahlungsablauf für Reports vor.",
          "Mit der Token-Unterstützung von CorePay für das Core-Blockchain-Ökosystem sollen künftig Zahlungen mit verschiedenen Token möglich werden."
        ],
        link: { href: "purchase", label: "Reportbestellung" }
      },
      {
        heading: "Leseweise und Grundsätze",
        body: [
          "Hier steht, wie Polar Bird Astrology Radix, Solar Return und Neumondzyklen liest."
        ],
        link: { href: "reading-policy", label: "Leseweise ansehen" }
      }
    ]
  }
};

export const reportTypeGuideCopy: Record<Lang, TextBlock> = {
  en: {
    heading: "Report types",
    body: [
      "Natal reports read basic structure. Solar returns read the stage of the year. New moon cycle reports read the active themes in each cycle.",
      "The reports are shaped for personal self-understanding, as gifts, and as readings for observing the flow of a business or community."
    ],
    link: { href: "reading-policy", label: "See how we read" }
  },
  ja: {
    heading: "レポートの種類",
    body: [
      "出生図は基本構造、太陽回帰は一年の舞台、新月サイクルはそのサイクルで動きやすいテーマを読みます。",
      "個人の自己理解や贈りものとしても、事業やコミュニティの流れを観察する読み物としても使える形で整えています。"
    ],
    link: { href: "reading-policy", label: "読み方と方針を見る" }
  },
  de: {
    heading: "Reportarten",
    body: [
      "Der Radix-Report beschreibt die Grundstruktur. Der Solar-Return-Report deutet den Jahresrahmen. Der Report zum Neumondzyklus zeigt Themen, die in diesem Zyklus leichter in Bewegung kommen.",
      "Die Reports sind so gestaltet, dass sie persönliches Selbstverstehen unterstützen und auch als Geschenk funktionieren. Zugleich eignen sie sich als Lektüre, mit der sich der Fluss eines Unternehmens oder einer Community beobachten lässt."
    ],
    link: { href: "reading-policy", label: "Leseweise ansehen" }
  }
};

export const pages: Record<Lang, Record<PageKey, PageCopy>> = {
  en: {
    purchase: {
      title: "Report Ordering",
      eyebrow: "CorePay order flow in preparation",
      description:
        "Polar Bird Astrology is preparing a way to order astrology reports online.",
      blocks: [
        {
          heading: "Ordering reports with CorePay",
          body: [
            "Polar Bird Astrology is preparing a simple cross-border report ordering and payment flow using CorePay.",
            "As CorePay expands token support for the Core Blockchain ecosystem, the plan is to make payment possible with a range of tokens."
          ]
        },
        {
          heading: "Sample reports to read before ordering",
          body: [
            "The sample reports cover Core Blockchain, Steve Jobs, and Leonardo da Vinci.",
            "They are shaped for personal self-understanding, as gifts, and as readings for observing the flow of a business or community."
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
          heading: "Individuals, businesses, and communities",
          body: [
            "For an individual, Polar Bird Astrology translates the chart into feelings, relationships, work, and everyday life.",
            "For a business or community, it translates the same symbols into community atmosphere, participation, trust, public explanation, and operations."
          ]
        },
        {
          heading: "Interpretive boundary",
          body: [
            "Astrology reports work with themes that can support self-understanding, observation, and clarifying choices.",
            "Medical and legal matters, investment decisions, price forecasts, guaranteed outcomes, and fact-checking that should come from official sources are outside the scope of an astrology report."
          ]
        },
        {
          heading: "Transparency",
          body: [
            "Polar Bird Astrology makes its reading assumptions and the publishable parts of its creation process available through the website and public repository."
          ],
          link: { href: repoUrl, label: "View public repository" }
        }
      ]
    },
    about: {
      title: "About the Writer",
      eyebrow: "Writer of Polar Bird Astrology",
      description:
        "Polar Bird Astrology turns star rhythms into language for daily choices and action planning.",
      profileImage: {
        src: "/images/profile/writer-profile.jpg?v=privacy-20260607",
        darkSrc: "/images/profile/writer-profile-dark.webp?v=privacy-20260607",
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
            "Whether the subject is a person, a business, or a community, I read the chart on its own terms and put it into language the reader can use."
          ]
        },
        {
          heading: "Life and interests",
          body: [
            "I live with a cockatiel and cats.",
            "I am interested in cigars, whisky, and mountain life, and I hold a hunting license.",
            "This way of living and these interests shape a reading style that values nature, time, body awareness, and quiet observation."
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
      title: "レポート注文",
      eyebrow: "CorePayでの注文導線を準備中",
      description:
        "Polar Bird Astrologyの占星術レポートを注文できる導線を準備しています。",
      blocks: [
        {
          heading: "CorePayでのレポート注文",
          body: [
            "CorePayを使い、国境を越えた簡単なレポート注文・支払い導線を準備しています。",
            `${coreBlockchainJa}の対応に合わせてさまざまなトークンで支払えるようになる予定です。`
          ]
        },
        {
          heading: "注文前に読めるレポート例",
          body: [
            `${coreBlockchainJa}、${steveJobsJa}、${leonardoDaVinciJa}を題材にしたサンプルレポートを公開しています。`,
            "個人の自己理解や贈りものとしても、事業やコミュニティの流れを観察する読み物としても使える形で整えています。"
          ]
        }
      ],
      links: [
        { href: corePayUrl, label: "CorePay公式サイトを見る" },
        { href: coreBlockchainUrl, label: `${coreBlockchainJa}公式サイトを見る` }
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
          heading: "個人と事業・コミュニティ",
          body: [
            "個人の星まわりを読むときは、感情、関係性、仕事、生活の場面へ翻訳します。",
            "事業やコミュニティを読むときは、同じ象徴を、コミュニティの空気、参加、信頼、説明、運用の言葉へ置き換えます。"
          ]
        },
        {
          heading: "解釈の境界",
          body: [
            "占星術レポートは、自己理解や観察、選択の整理に使えるテーマを扱います。",
            "医療、法律、投資判断、価格予測、成果保証、公式情報の代替になる事実確認は、占星術レポートの対象外です。"
          ]
        },
        {
          heading: "透明性について",
          body: [
            "Polar Bird Astrologyは、読み方の前提や公開できる制作過程を、Webサイトと公開リポジトリで確認できる形にしています。"
          ],
          link: { href: repoUrl, label: "公開リポジトリを見る" }
        }
      ]
    },
    about: {
      title: "書き手について",
      eyebrow: "Polar Bird Astrologyの書き手",
      description:
        "Polar Bird Astrologyは、星まわりを日々の選択や行動計画に使える言葉へ翻訳する占星術レポートです。",
      profileImage: {
        src: "/images/profile/writer-profile.jpg?v=privacy-20260607",
        darkSrc: "/images/profile/writer-profile-dark.webp?v=privacy-20260607",
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
            "人、事業、コミュニティのいずれであっても、星まわりを自然に読み、読み手が扱える言葉へ落とし込みます。"
          ]
        },
        {
          heading: "暮らしと趣味",
          body: [
            "オカメインコと猫と暮らしています。",
            "葉巻、ウイスキー、山での暮らしに関心があり、狩猟免許も持っています。",
            "こうした暮らしや関心は、自然、時間、身体感覚、静かな観察を大切にする読み方につながっています。"
          ]
        },
        {
          heading: "公開している制作物",
          body: [
            `Core Catsは、${coreBlockchainJa}のコミュニティに向けて公開している別の制作物です。`,
            "コミュニティに読みやすく、楽しめて、話題にできるものを届けたいという姿勢は共通しています。"
          ],
          link: { href: coreCatsUrl, label: "Core Catsを見る" }
        }
      ]
    }
  },
  de: {
    purchase: {
      title: "Reportbestellung",
      eyebrow: "CorePay-Bestellung in Vorbereitung",
      description:
        "Polar Bird Astrology bereitet eine Möglichkeit vor, astrologische Reports online zu bestellen.",
      blocks: [
        {
          heading: "Reports mit CorePay bestellen",
          body: [
            "Polar Bird Astrology bereitet mit CorePay einen einfachen grenzüberschreitenden Bestell- und Zahlungsablauf für Reports vor.",
            "Mit der Token-Unterstützung von CorePay für das Core-Blockchain-Ökosystem sollen künftig Zahlungen mit verschiedenen Token möglich werden."
          ]
        },
        {
          heading: "Beispielreports vor der Bestellung",
          body: [
            "Die Beispielreports behandeln Core Blockchain, Steve Jobs und Leonardo da Vinci.",
            "Sie sind so gestaltet, dass sie persönliches Selbstverstehen unterstützen und auch als Geschenk funktionieren. Zugleich eignen sie sich als Lektüre, mit der sich der Fluss eines Unternehmens oder einer Community beobachten lässt."
          ]
        }
      ],
      links: [
        { href: corePayUrl, label: "CorePay-Website" },
        { href: coreBlockchainUrl, label: "Website von Core Blockchain" }
      ]
    },
    "reading-policy": {
      title: "Leseweise und Grundsätze",
      eyebrow: "Astrologischer Stil",
      description:
        "Der astrologische Stil von Polar Bird Astrology, die Rollen der drei Reportarten und die Grenze der Deutung.",
      blocks: [
        {
          heading: "Verwendeter Stil",
          body: [
            "Polar Bird Astrology basiert auf westlicher Astrologie und orientiert sich an psychologischer und humanistischer Astrologie.",
            "Die drei Standardreports nutzen den tropischen Tierkreis und Placidus-Häuser. Aufsteigender und absteigender Mondknoten werden mit True Node gelesen."
          ]
        },
        {
          heading: "Radix",
          body: [
            "Der Radix-Report beschreibt Grundstruktur, schwer veränderliche Eigenschaften und Reaktionsmuster.",
            "Die Radixdeutung betrachtet, welchen Rhythmus eine Person oder ein Thema über längere Zeit in sich trägt. Daraus entstehen Worte, die Selbstverständnis und Entscheidungen stützen."
          ]
        },
        {
          heading: "Solar Return",
          body: [
            "Der Solar Return deutet den Jahresrahmen und die Themen, die leicht in den Fokus rücken. Er zeigt auch, wie vorhandene Eigenschaften in diesem Jahr zum Tragen kommen.",
            "Er ist eine Lesung auf Jahresebene. Feinere Monats- oder Tageszeitpunkte gehören in eine andere Zeitschicht, zum Beispiel in Neumondzyklen."
          ]
        },
        {
          heading: "Neumondzyklus",
          body: [
            "Der Neumondzyklus betrachtet den Rhythmus von einem Neumond zum nächsten, aktive Themen und Beobachtungspunkte für tägliche Entscheidungen.",
            "Er ordnet, womit man beginnt, was man justiert und welche Reihenfolge den Zyklus leichter nutzbar macht."
          ]
        },
        {
          heading: "Einzelpersonen, Unternehmen und Communities",
          body: [
            "Bei einer Einzelperson übersetzt Polar Bird Astrology die Konstellationen in Gefühle, Beziehungen, Arbeit und Alltag.",
            "Bei einem Unternehmen oder einer Community übersetzt Polar Bird Astrology dieselben Symbole in Begriffe wie Community-Stimmung, Beteiligung, Vertrauen, öffentliche Kommunikation und Betrieb."
          ]
        },
        {
          heading: "Deutungsgrenze",
          body: [
            "Astrologische Reports behandeln Themen, die Selbstverständnis, Beobachtung und das Ordnen von Entscheidungen unterstützen können.",
            "Medizinische und rechtliche Fragen, Anlageentscheidungen, Preisprognosen, Erfolgsgarantien sowie Fakten, die aus offiziellen Quellen geprüft werden müssen, liegen außerhalb eines Astrologiereports."
          ]
        },
        {
          heading: "Transparenz",
          body: [
            "Polar Bird Astrology macht die Grundlagen der Leseweise und die öffentlich teilbaren Teile des Entstehungsprozesses auf der Website und im öffentlichen Repository nachvollziehbar."
          ],
          link: { href: repoUrl, label: "Öffentliches Repository ansehen" }
        }
      ]
    },
    about: {
      title: "Über den Autor",
      eyebrow: "Autor von Polar Bird Astrology",
      description:
        "Polar Bird Astrology übersetzt Sternrhythmen in Worte, die bei täglichen Entscheidungen und bei der Planung der nächsten Schritte helfen.",
      profileImage: {
        src: "/images/profile/writer-profile.jpg?v=privacy-20260607",
        darkSrc: "/images/profile/writer-profile-dark.webp?v=privacy-20260607",
        alt: "Porträt des Autors von Polar Bird Astrology"
      },
      descriptionParagraphs: [
        "Polar Bird Astrology übersetzt Sternrhythmen in Worte, die bei täglichen Entscheidungen und bei der Planung der nächsten Schritte helfen.",
        "Symbolik bleibt nicht bei vagen Metaphern stehen. Themen aus Radix, Solar Return und Neumondzyklus werden zu konkreten, brauchbaren Sätzen geformt."
      ],
      blocks: [
        {
          heading: "Astrologische Haltung",
          body: [
            "Der Nachthimmel gibt mir das Gefühl, innerlich klarer zu werden.",
            "Mich zieht an, wie aus den Bewegungen der Sterne eine stimmige Symbolik entsteht. Sie lässt sich schwer als bloßer Zufall abtun.",
            "Ich behandle Astrologie nicht nur als Wahrsagerei. Mir geht es um konkrete, verständliche Lesungen. Sie sollen Selbstverständnis, tägliche Entscheidungen und die Planung nächster Schritte unterstützen."
          ]
        },
        {
          heading: "Autor",
          body: [
            "Ich bin Japaner und Absolvent der University of Tokyo.",
            "Ich lebe in einem alten Haus in den Bergen und schreibe astrologische Reports nahe an Jahreszeiten und Nachthimmel.",
            "Ob es um einen Menschen, ein Unternehmen oder eine Community geht: Ich lese, was sich aus den Konstellationen stimmig ergibt, und bringe es in Worte, mit denen der Leser arbeiten kann."
          ]
        },
        {
          heading: "Leben und Interessen",
          body: [
            "Ich lebe mit einem Nymphensittich und Katzen.",
            "Ich interessiere mich für Zigarren, Whisky und das Leben in den Bergen und besitze auch einen Jagdschein.",
            "Diese Lebensweise und Interessen prägen eine Leseweise, die Natur, Zeit, Körpergefühl und stille Beobachtung ernst nimmt."
          ]
        },
        {
          heading: "Öffentliche Arbeiten",
          body: [
            "Core Cats ist ein weiteres öffentliches Kreativprojekt für die Community rund um Core Blockchain.",
            "Die Haltung ist dieselbe. Es geht darum, etwas Lesbares und Angenehmes zu schaffen, worüber die Community gern spricht."
          ],
          link: { href: coreCatsUrl, label: "Core Cats ansehen" }
        }
      ]
    }
  }
};
