export const languages = ["en", "ja", "de"] as const;

export type Lang = (typeof languages)[number];

export const languageLabels: Record<Lang, string> = {
  en: "English",
  ja: "日本語",
  de: "Deutsch"
};

export function isLang(value: string | undefined): value is Lang {
  return languages.includes(value as Lang);
}

export function localizedPath(lang: Lang, path = ""): string {
  const cleanPath = path.replace(/^\/+/, "");
  return cleanPath ? `/${lang}/${cleanPath}` : `/${lang}`;
}

