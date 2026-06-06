import type { Lang } from "../lib/i18n";

export type PageKey = "purchase" | "reading-policy";
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
  publicationBoundaryTitle: string;
  publicationBoundaryText: string;
  publicationBoundaryParagraphs?: string[];
  footerNotice: string;
  footerLinks: {
    readingPolicy: string;
    purchase: string;
    github: string;
    corepay: string;
  };
};

type ChartLegendItem = {
  key: string;
  glyph: string;
  label: string;
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

export const chartLegendItems: Record<Lang, ChartLegendItem[]> = {
  en: [
    { key: "sun", glyph: "☉", label: "Sun" },
    { key: "moon", glyph: "☽", label: "Moon" },
    { key: "mercury", glyph: "☿", label: "Mercury" },
    { key: "venus", glyph: "♀", label: "Venus" },
    { key: "mars", glyph: "♂", label: "Mars" },
    { key: "jupiter", glyph: "♃", label: "Jupiter" },
    { key: "saturn", glyph: "♄", label: "Saturn" },
    { key: "uranus", glyph: "♅", label: "Uranus" },
    { key: "neptune", glyph: "♆", label: "Neptune" },
    { key: "pluto", glyph: "♇", label: "Pluto" },
    { key: "fortune", glyph: "⊗", label: "Part of Fortune" },
    { key: "north-node", glyph: "☊", label: "North Node" },
    { key: "south-node", glyph: "☋", label: "South Node" },
    { key: "chiron", glyph: "⚷", label: "Chiron" },
    { key: "asc", glyph: "Asc", label: "Ascendant" },
    { key: "mc", glyph: "MC", label: "MC" },
    { key: "dsc", glyph: "Dsc", label: "Descendant" },
    { key: "ic", glyph: "IC", label: "IC" }
  ],
  ja: [
    { key: "sun", glyph: "☉", label: "太陽" },
    { key: "moon", glyph: "☽", label: "月" },
    { key: "mercury", glyph: "☿", label: "水星" },
    { key: "venus", glyph: "♀", label: "金星" },
    { key: "mars", glyph: "♂", label: "火星" },
    { key: "jupiter", glyph: "♃", label: "木星" },
    { key: "saturn", glyph: "♄", label: "土星" },
    { key: "uranus", glyph: "♅", label: "天王星" },
    { key: "neptune", glyph: "♆", label: "海王星" },
    { key: "pluto", glyph: "♇", label: "冥王星" },
    { key: "fortune", glyph: "⊗", label: "パートオブフォーチュン" },
    { key: "north-node", glyph: "☊", label: "ドラゴンヘッド" },
    { key: "south-node", glyph: "☋", label: "ドラゴンテイル" },
    { key: "chiron", glyph: "⚷", label: "キロン" },
    { key: "asc", glyph: "Asc", label: "アセンダント" },
    { key: "mc", glyph: "MC", label: "MC（ミッドヘブン）" },
    { key: "dsc", glyph: "Dsc", label: "ディセンダント" },
    { key: "ic", glyph: "IC", label: "IC（イムム・コエリ）" }
  ],
  de: [
    { key: "sun", glyph: "☉", label: "Sonne" },
    { key: "moon", glyph: "☽", label: "Mond" },
    { key: "mercury", glyph: "☿", label: "Merkur" },
    { key: "venus", glyph: "♀", label: "Venus" },
    { key: "mars", glyph: "♂", label: "Mars" },
    { key: "jupiter", glyph: "♃", label: "Jupiter" },
    { key: "saturn", glyph: "♄", label: "Saturn" },
    { key: "uranus", glyph: "♅", label: "Uranus" },
    { key: "neptune", glyph: "♆", label: "Neptun" },
    { key: "pluto", glyph: "♇", label: "Pluto" },
    { key: "fortune", glyph: "⊗", label: "Glueckspunkt" },
    { key: "north-node", glyph: "☊", label: "Aufsteigender Mondknoten" },
    { key: "south-node", glyph: "☋", label: "Absteigender Mondknoten" },
    { key: "chiron", glyph: "⚷", label: "Chiron" },
    { key: "asc", glyph: "Asc", label: "Aszendent" },
    { key: "mc", glyph: "MC", label: "MC" },
    { key: "dsc", glyph: "Dsc", label: "Deszendent" },
    { key: "ic", glyph: "IC", label: "IC" }
  ]
};

export const navItems: Record<Lang, NavItem[]> = {
  en: [
    { href: "core-field-notes", label: "Sample Reports" },
    { href: "purchase", label: "Buy a Report", badge: "soon" },
    { href: "reading-policy", label: "How We Read" }
  ],
  ja: [
    { href: "core-field-notes", label: "サンプルレポート" },
    { href: "purchase", label: "レポート購入", badge: "soon" },
    { href: "reading-policy", label: "読み方と方針" }
  ],
  de: [
    { href: "core-field-notes", label: "Beispielreports" },
    { href: "purchase", label: "Report kaufen", badge: "soon" },
    { href: "reading-policy", label: "Leseweise" }
  ]
};

export const reportTypes: Record<Lang, ReportTypeCopy[]> = {
  en: [
    {
      key: "natal",
      label: "Natal report",
      title: "Core's foundational pattern",
      summary:
        "A public-entity reading of Core's base chart: long-range structure, response rhythm, and the community foundation.",
      focus: "Foundational pattern, response rhythm, community base",
      emptyLabel: "Coming soon"
    },
    {
      key: "solar-return",
      label: "Solar return report",
      title: "Core's 2026 theme",
      summary:
        "A yearly reading for the 2026 stage: where emphasis gathers and how Core's existing pattern comes forward this year.",
      focus: "2026 theme, annual stage, emphasis",
      emptyLabel: "Coming soon"
    },
    {
      key: "new-moon",
      label: "New moon report",
      title: "Core's new moon cycle",
      summary:
        "A cycle reading for the published new-moon period: active themes, community atmosphere, and lunar rhythm to observe.",
      focus: "Published cycle, lunar rhythm",
      emptyLabel: "Coming soon"
    }
  ],
  ja: [
    {
      key: "natal",
      label: "出生図レポート",
      title: "Coreの基本構造",
      summary:
        "Coreの出生図から、長く続く基本構造、反応のリズム、コミュニティの土台を読みます。",
      focus: "基本構造、反応のリズム、土台",
      emptyLabel: "準備中"
    },
    {
      key: "solar-return",
      label: "太陽回帰レポート",
      title: "Coreの2026年のテーマ",
      summary:
        "太陽回帰図から、2026年に焦点が当たりやすいテーマと、Coreの性質がその年にどう表へ出るかを読みます。",
      focus: "年間テーマ、表に出る役割、焦点",
      emptyLabel: "準備中"
    },
    {
      key: "new-moon",
      label: "新月レポート",
      title: "Coreの新月サイクル",
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
    heroSecondary: "See purchase preparation",
    reportHubEyebrow: "Currently published",
    reportHubTitle: "Three sample reports for Core",
    reportHubDescription:
      "Natal reads the foundational pattern, solar return reads the 2026 annual stage, and new moon reads the published cycle. Together they show how Polar Bird Astrology can read a public ecosystem.",
    reportHubDescriptionParagraphs: [
      "Natal reads the foundational pattern, solar return reads the 2026 annual stage, and new moon reads the published cycle.",
      "Together they show how Polar Bird Astrology can read a public ecosystem."
    ],
    fieldNotesEyebrow: "Core as a public sample",
    fieldNotesTitle: "Sample Reports: Core",
    fieldNotesDescription:
      "Core is published as a business and community sample: natal, solar return, and new-moon-cycle reports in one reading path.",
    readNoteLabel: "Read",
    focusLabel: "Focus",
    periodLabel: "Period",
    chartLegendTitle: "Legend",
    publicationBoundaryTitle: "Reading boundary",
    publicationBoundaryText:
      "The report body treats themes astrology can read. Product facts belong with public source information. Price and investment decisions are outside these reports.",
    publicationBoundaryParagraphs: [
      "The report body treats themes astrology can read.",
      "Product facts belong with public source information. Price and investment decisions are outside these reports."
    ],
    footerNotice:
      "Polar Bird Astrology publishes astrology reports that read natal charts, solar returns, and new moon cycles.",
    footerLinks: {
      readingPolicy: "How we read",
      purchase: "Purchase preparation",
      github: "GitHub",
      corepay: "CorePay"
    }
  },
  ja: {
    heroPrimary: "サンプルレポートを読む",
    heroSecondary: "購入準備を見る",
    reportHubEyebrow: "現在公開中",
    reportHubTitle: "Coreを読む3つのサンプル",
    reportHubDescription:
      "出生図はCoreの基本構造、太陽回帰は2026年の舞台、新月は公開中のサイクルを読みます。事業やコミュニティを読むレポート例として公開しています。",
    reportHubDescriptionParagraphs: [
      "出生図はCoreの基本構造、太陽回帰は2026年の舞台、新月は公開中のサイクルを読みます。",
      "事業やコミュニティを読むレポート例として公開しています。"
    ],
    fieldNotesEyebrow: "Coreを題材にしたレポート例",
    fieldNotesTitle: "サンプルレポート（Core）",
    fieldNotesDescription:
      "人ではない公開エコシステムも、出生図、太陽回帰、新月サイクルで読めます。現在はCoreの3レポートを公開しています。",
    readNoteLabel: "読む",
    focusLabel: "焦点",
    periodLabel: "対象期間",
    chartLegendTitle: "凡例",
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
      readingPolicy: "読み方と方針",
      purchase: "レポート購入",
      github: "GitHub",
      corepay: "CorePay"
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
      readingPolicy: "Leseweise",
      purchase: "Kaufvorbereitung",
      github: "GitHub",
      corepay: "CorePay"
    }
  }
};

export const homeCopy: Record<Lang, PageCopy> = {
  en: {
    title: "Polar Bird Astrology",
    eyebrow: "Astrology reports for rhythm, timing, and choice",
    description:
      "Polar Bird Astrology reads natal charts, solar returns, and new moon cycles for self-understanding, practical timing, and reflective planning. The current sample library follows Core as a public ecosystem.",
    descriptionParagraphs: [
      "Polar Bird Astrology reads natal charts, solar returns, and new moon cycles for self-understanding, practical timing, and reflective planning.",
      "The current sample library follows Core as a public ecosystem."
    ],
    blocks: [
      {
        heading: "Report types",
        body: [
          "Natal reports read foundational patterns. Solar returns read the stage of the year. New moon reports read the rhythm from one new moon to the next.",
          "The same structure can support personal self-understanding and business or community observation."
        ],
        link: { href: "reading-policy", label: "How we read" }
      },
      {
        heading: "CorePay purchase path",
        body: [
          "A report purchase path using CorePay is being prepared so Core community members can try the experience lightly.",
          "For now, the Core sample reports are available to read publicly."
        ],
        link: { href: "purchase", label: "See purchase preparation" }
      }
    ]
  },
  ja: {
    title: "Polar Bird Astrology",
    eyebrow: "星まわりを読む占星術レポート",
    description:
      "出生図、太陽回帰、新月サイクルを組み合わせて、自己理解、日々の選択、行動計画に使えるテーマを読みます。現在はCoreのサンプルレポートを公開しています。",
    descriptionParagraphs: [
      "出生図、太陽回帰、新月サイクルを組み合わせて、自己理解、日々の選択、行動計画に使えるテーマを読みます。",
      "現在はCoreのサンプルレポートを公開しています。"
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
          "CorePayを使って、Coreコミュニティでも試しやすいレポート購入導線を準備しています。",
          "今はCoreを題材にしたサンプルレポートを読めます。"
        ],
        link: { href: "purchase", label: "購入準備を見る" }
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
      eyebrow: "CorePay flow in preparation",
      description:
        "The purchase path for Polar Bird Astrology reports is being prepared.",
      blocks: [
        {
          heading: "What is being prepared",
          body: [
            "The intended flow is a simple web purchase path for natal, solar-return, and new-moon-cycle reports.",
            "CorePay is the payment-link layer planned for that experience.",
            "Purchases through this site are not open yet."
          ]
        },
        {
          heading: "What you can read now",
          body: [
            "The current public sample is the Core report set.",
            "It shows how the same astrology structure can read a public ecosystem as well as a person."
          ]
        }
      ],
      links: [{ href: corePayUrl, label: "CorePay official site" }]
    },
    "reading-policy": {
      title: "How We Read",
      eyebrow: "Reading style and boundary",
      description:
        "How Polar Bird Astrology uses natal charts, solar returns, and new moon cycles, and where astrology stays separate from factual claims.",
      blocks: [
        {
          heading: "Three report types",
          body: [
            "Natal reports read foundational structure, recurring patterns, and the base rhythm of a person, business, or community.",
            "Solar returns read the annual stage: the themes, focus, and way an existing pattern comes forward in that year.",
            "New moon reports read the current cycle: active themes, rhythm, and observation points from one new moon to the next."
          ]
        },
        {
          heading: "Use",
          body: [
            "The reports translate astrology into ordinary language for self-understanding, daily decisions, and reflective planning.",
            "For a business or community, personal-language symbols are translated into public language: atmosphere, participation, trust, explanation, and operations."
          ]
        },
        {
          heading: "Boundary",
          body: [
            "When astrology can naturally speak, Polar Bird Astrology reads it directly and affirmatively.",
            "Official information, product facts, prices, investment decisions, and guaranteed outcomes remain outside the report."
          ]
        }
      ],
      links: [{ href: repoUrl, label: "Public repository" }]
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
          heading: "準備していること",
          body: [
            "出生図、太陽回帰、新月サイクルのレポートを、Webから申し込める導線を準備しています。",
            "CorePayを使って、Coreコミュニティでも試しやすいレポート購入導線として設計しています。",
            "このサイトでの購入導線は、まだ公開していません。"
          ]
        },
        {
          heading: "今読めるもの",
          body: [
            "現在はCoreを題材にしたサンプルレポートを公開しています。",
            "同じ占星術の構造で、人の自己理解にも、事業やコミュニティの流れの観察にも使えることを示すためのサンプルです。"
          ]
        }
      ],
      links: [{ href: corePayUrl, label: "CorePay公式サイトを見る" }]
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
    }
  }
};
