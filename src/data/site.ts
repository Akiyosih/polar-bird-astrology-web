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
    heroPrimary: "Core Field Notes",
    heroSecondary: "Current status",
    boundaryTitle: "Boundary",
    boundaryText: "Unofficial. Not investment advice. Public Field Notes only.",
    reportHubEyebrow: "Reading hub",
    reportHubTitle: "Three Core report paths",
    reportHubDescription:
      "The public MVP is organized around three report-style Field Notes: natal, solar return, and new moon cycle. Each path keeps astrology separate from factual product claims.",
    fieldNotesTitle: "Core Field Notes",
    fieldNotesDescription:
      "Public-safe astrology notes for the Core community. Field Notes are not investment advice and not official Core communication.",
    availableNotesTitle: "Available public notes",
    availableNotesDescription:
      "Only notes that are ready for public reading appear as links.",
    readNoteLabel: "Read note",
    focusLabel: "Focus",
    publicationBoundaryTitle: "Publication boundary",
    publicationBoundaryText:
      "Field Notes are edited for public reading. They do not include raw chart data, private reports, unverified product claims, or investment advice.",
    footerNotice:
      "Polar Bird Astrology is an unofficial community project. It is not investment advice and not official Core communication.",
    footerLinks: {
      method: "Method boundary",
      privacy: "Privacy",
      transparency: "Transparency",
      github: "GitHub"
    }
  },
  ja: {
    heroPrimary: "Core Field Notes",
    heroSecondary: "現在の状態",
    boundaryTitle: "境界",
    boundaryText: "非公式。投資助言ではありません。現在はpublic Field Notesのみです。",
    reportHubEyebrow: "読書ハブ",
    reportHubTitle: "Coreの3レポート",
    reportHubDescription:
      "公開MVPは、出生図、太陽回帰、新月サイクルの3つのレポート型Field Noteを軸に整理します。占星術の読みと実務事実の断定は分けて扱います。",
    fieldNotesTitle: "Core Field Notes",
    fieldNotesDescription:
      "Coreコミュニティ向けのpublic-safeな占星術Field Notesです。投資助言でも、Core公式発信でもありません。",
    availableNotesTitle: "公開中のノート",
    availableNotesDescription:
      "公開用に整ったノートだけをリンクとして表示します。",
    readNoteLabel: "読む",
    focusLabel: "焦点",
    publicationBoundaryTitle: "公開境界",
    publicationBoundaryText:
      "Field Notesは公開用の読み物として編集します。raw chart data、private report、未確認のproduct claim、投資助言を含めません。",
    footerNotice:
      "Polar Bird Astrologyは非公式のコミュニティプロジェクトです。投資助言ではなく、Core公式発信でもありません。",
    footerLinks: {
      method: "方法の境界",
      privacy: "プライバシー",
      transparency: "透明性",
      github: "GitHub"
    }
  },
  de: {
    heroPrimary: "Core Field Notes",
    heroSecondary: "Aktueller Status",
    boundaryTitle: "Grenze",
    boundaryText:
      "Inoffiziell. Keine Anlageberatung. Nur öffentliche Field Notes.",
    reportHubEyebrow: "Lese-Hub",
    reportHubTitle: "Drei Core-Report-Pfade",
    reportHubDescription:
      "Das öffentliche MVP ist um drei reportartige Field Notes organisiert: Radix, Solar Return und Neumond-Zyklus. Jede Lesung trennt Astrologie von faktischen Produktbehauptungen.",
    fieldNotesTitle: "Core Field Notes",
    fieldNotesDescription:
      "Public-safe astrologische Notizen für die Core-Community. Field Notes sind keine Anlageberatung und keine offizielle Core-Mitteilung.",
    availableNotesTitle: "Verfügbare öffentliche Notes",
    availableNotesDescription:
      "Nur Notes, die für die öffentliche Lektüre bereit sind, erscheinen als Links.",
    readNoteLabel: "Lesen",
    focusLabel: "Fokus",
    publicationBoundaryTitle: "Veröffentlichungsgrenze",
    publicationBoundaryText:
      "Field Notes werden für die öffentliche Lektüre redigiert. Sie enthalten keine raw chart data, private Reports, unverifizierten Produktbehauptungen oder Anlageberatung.",
    footerNotice:
      "Polar Bird Astrology ist ein inoffizielles Community-Projekt. Es ist keine Anlageberatung und keine offizielle Core-Mitteilung.",
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
    eyebrow: "Unofficial Core community field notes",
    description:
      "Astrology Field Notes for the Core community, published with clear boundaries around interpretation, privacy, and factual claims.",
    blocks: [
      {
        heading: "What is open now",
        body: [
          "The first surface is a public Core Field Note. It is meant to be read as symbolic timing and community culture, not as investment advice or official Core communication.",
          "The current public site contains Field Notes only. It does not collect orders, birth data, wallet data, or payment information."
        ]
      },
      {
        heading: "How the site starts",
        body: [
          "This website starts as a static site with no API routes, checkout, account system, payment records, or secrets.",
          "Japanese, English, and German are treated as first-class languages from the beginning."
        ]
      }
    ]
  },
  ja: {
    title: "Polar Bird Astrology",
    eyebrow: "Coreコミュニティ向け非公式Field Notes",
    description:
      "Coreコミュニティに向けて、占星術の読みと実務事実の境界を明確にしながら公開するPolar Bird AstrologyのField Notesです。",
    blocks: [
      {
        heading: "いま公開するもの",
        body: [
          "最初に公開するのは、Coreの星まわりを読むpublic Field Noteです。投資助言でも、Core公式の発信でもなく、象徴的なタイミングとコミュニティ文化として楽しむためのものです。",
          "現在の公開サイトはField Notesのみです。注文、出生情報、wallet情報、支払い情報は受け取りません。"
        ]
      },
      {
        heading: "初期Webの形",
        body: [
          "このサイトは静的サイトとして始めます。API routes、checkout、アカウント機能、支払い記録、秘密情報はありません。",
          "日本語、英語、ドイツ語を最初から第一級の言語として扱います。"
        ]
      }
    ]
  },
  de: {
    title: "Polar Bird Astrology",
    eyebrow: "Inoffizielle Field Notes für die Core-Community",
    description:
      "Astrologische Field Notes für die Core-Community, mit klaren Grenzen zwischen Deutung, Datenschutz und faktischen Aussagen.",
    blocks: [
      {
        heading: "Was jetzt offen ist",
        body: [
          "Der erste öffentliche Bereich ist eine Core Field Note. Sie ist als symbolisches Timing und Community-Kultur gedacht, nicht als Anlageberatung und nicht als offizielle Core-Mitteilung.",
          "Die aktuelle öffentliche Website enthält nur Field Notes. Sie sammelt keine Bestellungen, Geburtsdaten, Wallet-Daten oder Zahlungsinformationen."
        ]
      },
      {
        heading: "Wie die Website startet",
        body: [
          "Diese Website startet als statische Website ohne API-Routen, Checkout, Kontosystem, Zahlungsdaten oder Secrets.",
          "Japanisch, Englisch und Deutsch werden von Anfang an als vollwertige Sprachen behandelt."
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
