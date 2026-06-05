import type { Lang } from "../lib/i18n";

export type PageKey = "status" | "method-boundary" | "privacy" | "transparency";
export type ReportTypeKey = "natal" | "solar-return" | "new-moon";

type TextBlock = {
  heading: string;
  body: string[];
};

type PageCopy = {
  title: string;
  description: string;
  eyebrow?: string;
  blocks: TextBlock[];
};

type UiCopy = {
  heroPrimary: string;
  heroSecondary: string;
  boundaryTitle: string;
  boundaryText: string;
  reportHubEyebrow: string;
  reportHubTitle: string;
  reportHubDescription: string;
  fieldNotesTitle: string;
  fieldNotesDescription: string;
  availableNotesTitle: string;
  availableNotesDescription: string;
  readNoteLabel: string;
  focusLabel: string;
  publicationBoundaryTitle: string;
  publicationBoundaryText: string;
  footerNotice: string;
  footerLinks: {
    method: string;
    privacy: string;
    transparency: string;
    github: string;
  };
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

export const navItems: Record<Lang, Array<{ href: string; label: string }>> = {
  en: [
    { href: "core-field-notes", label: "Core Reports" },
    { href: "status", label: "Status" },
    { href: "method-boundary", label: "Method" },
    { href: "privacy", label: "Privacy" },
    { href: "transparency", label: "Transparency" }
  ],
  ja: [
    { href: "core-field-notes", label: "3レポート" },
    { href: "status", label: "現在の状態" },
    { href: "method-boundary", label: "方法の境界" },
    { href: "privacy", label: "プライバシー" },
    { href: "transparency", label: "透明性" }
  ],
  de: [
    { href: "core-field-notes", label: "Reports" },
    { href: "status", label: "Status" },
    { href: "method-boundary", label: "Methode" },
    { href: "privacy", label: "Datenschutz" },
    { href: "transparency", label: "Transparenz" }
  ]
};

export const reportTypes: Record<Lang, ReportTypeCopy[]> = {
  en: [
    {
      key: "natal",
      label: "Natal report",
      title: "Core's foundational pattern",
      summary:
        "A public-entity reading of Core Blockchain's base chart: temperament, recurring themes, and the symbolic structure behind the community field.",
      focus: "Identity, temperament, long-range pattern",
      emptyLabel: "No public note yet"
    },
    {
      key: "solar-return",
      label: "Solar return report",
      title: "Core's yearly theme",
      summary:
        "A yearly reading that frames the current cycle as symbolic timing for reflection, public contact, and community conversation.",
      focus: "Annual mood, timing, visibility",
      emptyLabel: "No public note yet"
    },
    {
      key: "new-moon",
      label: "New moon report",
      title: "Monthly observation points",
      summary:
        "A cycle-by-cycle reading for noticing monthly emphasis, community attention, and themes worth watching without product or market claims.",
      focus: "Monthly rhythm, attention markers",
      emptyLabel: "No public note yet"
    }
  ],
  ja: [
    {
      key: "natal",
      label: "出生図レポート",
      title: "Coreの基本性質",
      summary:
        "Core Blockchainを人間ではなくpublic entity / ecosystem fieldとして読み、核となる性質、反復テーマ、コミュニティの土台を整理する読みです。",
      focus: "性質、基調、長期パターン",
      emptyLabel: "公開ノート未掲載"
    },
    {
      key: "solar-return",
      label: "太陽回帰レポート",
      title: "Coreの年次テーマ",
      summary:
        "現在の年回りを、プロダクトや価格の断定ではなく、振り返り、公開接点、コミュニティでの語りとして読む年次ノートです。",
      focus: "年間の空気、タイミング、可視性",
      emptyLabel: "公開ノート未掲載"
    },
    {
      key: "new-moon",
      label: "新月レポート",
      title: "月ごとの観察ポイント",
      summary:
        "新月サイクルごとに、コミュニティの注意点、話題になりやすいテーマ、観察しておきたいリズムを読むノートです。",
      focus: "月間リズム、注目点",
      emptyLabel: "公開ノート未掲載"
    }
  ],
  de: [
    {
      key: "natal",
      label: "Radix-Report",
      title: "Cores Grundmuster",
      summary:
        "Eine Public-Entity-Lesung von Cores Basischart: Temperament, wiederkehrende Themen und symbolische Struktur des Community-Feldes.",
      focus: "Identität, Temperament, Langzeitmuster",
      emptyLabel: "Noch keine öffentliche Note"
    },
    {
      key: "solar-return",
      label: "Solar-Return-Report",
      title: "Cores Jahresthema",
      summary:
        "Eine Jahreslesung, die den aktuellen Zyklus als symbolisches Timing für Reflexion, öffentlichen Kontakt und Community-Gespräch rahmt.",
      focus: "Jahresstimmung, Timing, Sichtbarkeit",
      emptyLabel: "Noch keine öffentliche Note"
    },
    {
      key: "new-moon",
      label: "Neumond-Report",
      title: "Monatliche Beobachtungspunkte",
      summary:
        "Eine Zykluslesung für monatliche Betonungen, Community-Aufmerksamkeit und Themen, die ohne Produkt- oder Marktaussagen beobachtet werden können.",
      focus: "Monatsrhythmus, Aufmerksamkeitsmarker",
      emptyLabel: "Noch keine öffentliche Note"
    }
  ]
};

export const uiCopy: Record<Lang, UiCopy> = {
  en: {
    heroPrimary: "Browse Field Notes",
    heroSecondary: "Current status",
    boundaryTitle: "Boundary",
    boundaryText: "Interpretive Field Notes with clear public method boundaries.",
    reportHubEyebrow: "Reading hub",
    reportHubTitle: "Field Notes Library",
    reportHubDescription:
      "The current reading hub is arranged around three Field Notes: natal, solar return, and new moon cycle. Each note keeps astrology separate from factual product claims.",
    fieldNotesTitle: "Core Field Notes",
    fieldNotesDescription:
      "A quiet library of astrology notes for Core readers, edited for reflection, context, and clear method boundaries.",
    availableNotesTitle: "Available public notes",
    availableNotesDescription:
      "Only notes that are ready for public reading appear as links.",
    readNoteLabel: "Read note",
    focusLabel: "Focus",
    publicationBoundaryTitle: "Publication boundary",
    publicationBoundaryText:
      "Field Notes are edited for public reading. They do not include raw chart data, private reports, unverified product claims, or investment advice.",
    footerNotice:
      "Polar Bird Astrology publishes reflective astrology field notes with clear method, privacy, and transparency boundaries.",
    footerLinks: {
      method: "Method boundary",
      privacy: "Privacy",
      transparency: "Transparency",
      github: "GitHub"
    }
  },
  ja: {
    heroPrimary: "Field Notesを読む",
    heroSecondary: "現在の状態",
    boundaryTitle: "境界",
    boundaryText: "解釈的なField Notesとして、公開範囲と方法の境界を明確にします。",
    reportHubEyebrow: "読書ハブ",
    reportHubTitle: "Field Notes Library",
    reportHubDescription:
      "現在の読書ハブは、出生図、太陽回帰、新月サイクルの3冊のField Notesを軸に整理します。占星術の読みと実務事実の断定は分けて扱います。",
    fieldNotesTitle: "Core Field Notes",
    fieldNotesDescription:
      "Core readersのための静かな占星術ノート集です。振り返り、文脈、方法の境界を読みやすく整理します。",
    availableNotesTitle: "公開中のノート",
    availableNotesDescription:
      "公開用に整ったノートだけをリンクとして表示します。",
    readNoteLabel: "読む",
    focusLabel: "焦点",
    publicationBoundaryTitle: "公開境界",
    publicationBoundaryText:
      "Field Notesは公開用の読み物として編集します。raw chart data、private report、未確認のproduct claim、投資助言を含めません。",
    footerNotice:
      "Polar Bird Astrologyは、方法、プライバシー、透明性の境界を明確にしながら占星術Field Notesを公開します。",
    footerLinks: {
      method: "方法の境界",
      privacy: "プライバシー",
      transparency: "透明性",
      github: "GitHub"
    }
  },
  de: {
    heroPrimary: "Field Notes lesen",
    heroSecondary: "Aktueller Status",
    boundaryTitle: "Grenze",
    boundaryText:
      "Interpretative Field Notes mit klaren öffentlichen Methodengrenzen.",
    reportHubEyebrow: "Lese-Hub",
    reportHubTitle: "Field Notes Library",
    reportHubDescription:
      "Der aktuelle Lese-Hub ist um drei Field Notes angeordnet: Radix, Solar Return und Neumond-Zyklus. Jede Note trennt Astrologie von faktischen Produktbehauptungen.",
    fieldNotesTitle: "Core Field Notes",
    fieldNotesDescription:
      "Eine ruhige Bibliothek astrologischer Notizen für Core-Leser, redigiert für Reflexion, Kontext und klare Methodengrenzen.",
    availableNotesTitle: "Verfügbare öffentliche Notes",
    availableNotesDescription:
      "Nur Notes, die für die öffentliche Lektüre bereit sind, erscheinen als Links.",
    readNoteLabel: "Lesen",
    focusLabel: "Fokus",
    publicationBoundaryTitle: "Veröffentlichungsgrenze",
    publicationBoundaryText:
      "Field Notes werden für die öffentliche Lektüre redigiert. Sie enthalten keine raw chart data, private Reports, unverifizierten Produktbehauptungen oder Anlageberatung.",
    footerNotice:
      "Polar Bird Astrology veröffentlicht reflektierende astrologische Field Notes mit klaren Grenzen für Methode, Datenschutz und Transparenz.",
    footerLinks: {
      method: "Methodengrenze",
      privacy: "Datenschutz",
      transparency: "Transparenz",
      github: "GitHub"
    }
  }
};

export const homeCopy: Record<Lang, PageCopy> = {
  en: {
    title: "Polar Bird Astrology",
    eyebrow: "Field Notes for Core Readers",
    description:
      "Quiet astrology field notes for Core readers, shaped as a northern watercolor journal for reflection, context, and careful observation.",
    blocks: [
      {
        heading: "What is open now",
        body: [
          "The current library centers on three Core readings: foundational pattern, yearly theme, and new moon cycle.",
          "Each note is edited as a public reading surface, with the detailed status, method, privacy, and transparency boundaries kept on their own pages."
        ]
      },
      {
        heading: "How to read",
        body: [
          "Astrology is treated as a language for noticing rhythm, mood, timing, and meaning.",
          "Japanese, English, and German remain first-class reading paths from the beginning."
        ]
      }
    ]
  },
  ja: {
    title: "Polar Bird Astrology",
    eyebrow: "Field Notes for Core Readers",
    description:
      "Core readersに向けて、北方の水彩ジャーナルのように静かに読める占星術Field Notesです。",
    blocks: [
      {
        heading: "いま公開するもの",
        body: [
          "現在のライブラリは、Coreの基本性質、年次テーマ、新月サイクルの3つの読みを中心にしています。",
          "詳細な現在の状態、方法、プライバシー、透明性の境界は、それぞれの説明ページにまとめます。"
        ]
      },
      {
        heading: "読み方",
        body: [
          "占星術は、リズム、ムード、タイミング、意味を観察するための言語として扱います。",
          "日本語、英語、ドイツ語を最初から第一級の読書導線として扱います。"
        ]
      }
    ]
  },
  de: {
    title: "Polar Bird Astrology",
    eyebrow: "Field Notes for Core Readers",
    description:
      "Ruhige astrologische Field Notes für Core-Leser, gestaltet wie ein nördliches Aquarell-Journal für Reflexion, Kontext und sorgfältige Beobachtung.",
    blocks: [
      {
        heading: "Was jetzt offen ist",
        body: [
          "Die aktuelle Bibliothek konzentriert sich auf drei Core-Lesungen: Grundmuster, Jahresthema und Neumond-Zyklus.",
          "Status, Methode, Datenschutz und Transparenz werden auf eigenen erklärenden Seiten geführt."
        ]
      },
      {
        heading: "Wie man liest",
        body: [
          "Astrologie wird als Sprache für Rhythmus, Stimmung, Timing und Bedeutung behandelt.",
          "Japanisch, Englisch und Deutsch bleiben von Beginn an eigenständige Lesewege."
        ]
      }
    ]
  }
};

export const pages: Record<Lang, Record<PageKey, PageCopy>> = {
  en: {
    status: {
      title: "Current Status",
      eyebrow: "Public Field Notes only",
      description:
        "What is available on the public website today.",
      blocks: [
        {
          heading: "Available now",
          body: [
            "The website publishes public Core community Field Notes.",
            "These notes are unofficial, interpretive, and written for reflection and entertainment."
          ]
        },
        {
          heading: "Not available now",
          body: [
            "The site does not accept orders, payments, birth data, wallet data, or account sign-ins.",
            "Any change to that boundary must be published with clear privacy and usage terms."
          ]
        }
      ]
    },
    "method-boundary": {
      title: "Method Boundary",
      eyebrow: "Astrology and facts stay separate",
      description:
        "What astrology can speak about here, and what must be verified through Core product evidence.",
      blocks: [
        {
          heading: "Astrology can read",
          body: [
            "Project rhythm, community mood, symbolic timing, and reflective themes.",
            "These Field Notes can help the community notice patterns and talk about Core in a more imaginative way."
          ]
        },
        {
          heading: "Astrology cannot decide",
          body: [
            "Price, market cap, investment return, product launch success, payment availability, or official roadmap certainty.",
            "Those claims require public factual evidence and should not be replaced by astrology."
          ]
        }
      ]
    },
    privacy: {
      title: "Privacy",
      eyebrow: "No personal data collection",
      description:
        "How the project avoids collecting unnecessary personal data during the public Field Note phase.",
      blocks: [
        {
          heading: "Current state",
          body: [
            "The current site has no paid orders, account sign-in, payment flow, or birth data intake.",
            "The public repository does not contain client profiles, raw charts, private reports, payment records, or logs."
          ]
        },
        {
          heading: "If this changes",
          body: [
            "If a reader submits personal information in the future, the project will collect only the information required for the stated purpose.",
            "Email, birth data, wallet data, and payment information must not be collected or combined without a clear public reason and policy."
          ]
        }
      ]
    },
    transparency: {
      title: "Transparency",
      eyebrow: "Public boundary",
      description:
        "What this repository makes public, and what remains private by design.",
      blocks: [
        {
          heading: "Public",
          body: [
            "Website code, public Field Notes, method boundaries, privacy boundaries, and public integration explanations belong here when they are ready to publish.",
            `The public repository is ${repoUrl}.`
          ]
        },
        {
          heading: "Private",
          body: [
            "Private calculations, raw chart data, client profiles, private reports, secrets, records, and logs stay outside this repository.",
            "This project is unofficial and must not be confused with official Core communication."
          ]
        }
      ]
    }
  },
  ja: {
    status: {
      title: "現在の状態",
      eyebrow: "public Field Notesのみ",
      description:
        "現在この公開サイトで提供しているものの説明です。",
      blocks: [
        {
          heading: "現在あるもの",
          body: [
            "このサイトでは、Coreコミュニティ向けのpublic Field Notesを公開します。",
            "Field Notesは非公式で、振り返りや娯楽のための解釈的な読み物です。"
          ]
        },
        {
          heading: "現在ないもの",
          body: [
            "注文、支払い、出生情報入力、wallet情報、アカウントsign-inは扱っていません。",
            "この境界を変更する場合は、privacyと利用条件を明確に公開します。"
          ]
        }
      ]
    },
    "method-boundary": {
      title: "Method Boundary",
      eyebrow: "占星術と実務事実を分ける",
      description:
        "ここで占星術が扱うことと、Core product evidenceで確認すべきことの境界です。",
      blocks: [
        {
          heading: "占星術で読めること",
          body: [
            "プロジェクトのリズム、コミュニティの空気、象徴的なタイミング、振り返りのテーマ。",
            "Field Notesは、Coreについて少し違う角度から話すための文化的な読み物です。"
          ]
        },
        {
          heading: "占星術だけでは決めないこと",
          body: [
            "価格、時価総額、投資リターン、プロダクト成功、決済機能の利用可否、公式ロードマップの確実性。",
            "それらはCore product evidenceで確認する領域であり、占星術で置き換えません。"
          ]
        }
      ]
    },
    privacy: {
      title: "Privacy",
      eyebrow: "個人情報を収集しない",
      description:
        "public Field Note段階で、不要な個人情報を集めないための方針です。",
      blocks: [
        {
          heading: "現在の状態",
          body: [
            "現在のサイトには、有料注文、アカウントsign-in、payment flow、出生情報入力はありません。",
            "public repoには、client profile、raw chart、private report、支払い記録、logを入れません。"
          ]
        },
        {
          heading: "この境界を変更する場合",
          body: [
            "読者から個人情報を受け取る場合は、明示した目的に必要な最小限の情報だけを扱います。",
            "email、birth data、wallet data、payment informationは、明確な公開理由とpolicyなしに収集・結合しません。"
          ]
        }
      ]
    },
    transparency: {
      title: "Transparency",
      eyebrow: "公開境界",
      description:
        "このrepoで公開するものと、意図的に公開しないものの境界です。",
      blocks: [
        {
          heading: "公開するもの",
          body: [
            "Webサイト実装、public Field Notes、method boundary、privacy boundary、公開してよいintegration説明をここに置きます。",
            `public repository: ${repoUrl}`
          ]
        },
        {
          heading: "公開しないもの",
          body: [
            "private calculation、raw chart data、client profile、private report、secrets、records、logsはこのrepoに置きません。",
            "このprojectは非公式です。Core公式発信と混同されないようにします。"
          ]
        }
      ]
    }
  },
  de: {
    status: {
      title: "Aktueller Status",
      eyebrow: "Nur öffentliche Field Notes",
      description:
        "Was heute auf der öffentlichen Website verfügbar ist.",
      blocks: [
        {
          heading: "Jetzt verfügbar",
          body: [
            "Die Website veröffentlicht öffentliche Field Notes für die Core-Community.",
            "Diese Notizen sind inoffiziell, interpretativ und für Reflexion und Unterhaltung geschrieben."
          ]
        },
        {
          heading: "Jetzt nicht verfügbar",
          body: [
            "Die Website nimmt keine Bestellungen, Zahlungen, Geburtsdaten, Wallet-Daten oder Konto-Anmeldungen entgegen.",
            "Jede Änderung dieser Grenze muss mit klaren Datenschutz- und Nutzungsbedingungen veröffentlicht werden."
          ]
        }
      ]
    },
    "method-boundary": {
      title: "Methodengrenze",
      eyebrow: "Astrologie und Fakten bleiben getrennt",
      description:
        "Was Astrologie hier beschreiben kann und was durch Core-Produktnachweise geprüft werden muss.",
      blocks: [
        {
          heading: "Astrologie kann lesen",
          body: [
            "Projekt-Rhythmus, Community-Stimmung, symbolisches Timing und Reflexionsthemen.",
            "Die Field Notes können der Community helfen, Muster wahrzunehmen und über Core mit mehr Vorstellungskraft zu sprechen."
          ]
        },
        {
          heading: "Astrologie kann nicht entscheiden",
          body: [
            "Preis, Marktkapitalisierung, Investment-Rendite, Produkterfolg, Payment-Verfügbarkeit oder offizielle Roadmap-Sicherheit.",
            "Solche Aussagen brauchen Produktnachweise und dürfen nicht durch Astrologie ersetzt werden."
          ]
        }
      ]
    },
    privacy: {
      title: "Datenschutz",
      eyebrow: "Keine personenbezogene Datenerhebung",
      description:
        "Wie das Projekt in der Field-Note-Phase unnötige personenbezogene Daten vermeidet.",
      blocks: [
        {
          heading: "Aktueller Zustand",
          body: [
            "Die aktuelle Website hat keine bezahlten Bestellungen, keinen Account Sign-in, keinen Payment Flow und keine Eingabe von Geburtsdaten.",
            "Das öffentliche Repository enthält keine Client-Profile, raw charts, private Reports, Zahlungsdaten oder Logs."
          ]
        },
        {
          heading: "Wenn sich diese Grenze ändert",
          body: [
            "Wenn Leser künftig personenbezogene Informationen übermitteln, sammelt das Projekt nur die Informationen, die für den genannten Zweck notwendig sind.",
            "E-Mail, Geburtsdaten, Wallet-Daten und Zahlungsinformationen dürfen ohne klaren öffentlichen Zweck und Policy nicht gesammelt oder zusammengeführt werden."
          ]
        }
      ]
    },
    transparency: {
      title: "Transparenz",
      eyebrow: "Öffentliche Grenze",
      description:
        "Was dieses Repository öffentlich macht und was bewusst privat bleibt.",
      blocks: [
        {
          heading: "Öffentlich",
          body: [
            "Website-Code, öffentliche Field Notes, Methodengrenzen, Datenschutzgrenzen und veröffentlichbare Integrationsbeschreibungen gehören hierher.",
            `Das öffentliche Repository ist ${repoUrl}.`
          ]
        },
        {
          heading: "Privat",
          body: [
            "Private Berechnungen, raw chart data, Client-Profile, private Reports, Secrets, Records und Logs bleiben außerhalb dieses Repositorys.",
            "Dieses Projekt ist inoffiziell und darf nicht mit offizieller Core-Kommunikation verwechselt werden."
          ]
        }
      ]
    }
  }
};
