export type LanguageColor = `#${string}`;

const languageColorMap: Record<string, LanguageColor> = {
  typescript: "#3178c6",
  ts: "#3178c6",
  "c#": "#68217A",
  javascript: "#f1e05a",
  python: "#3572A5",
  go: "#00ADD8",
  java: "#b07219",
  gdscript: "#355570",
  autohotkey: "#6594b9",
};

export function getLanguageColor(language: string | null): LanguageColor {
  if (!language) return "#cccccc";
  const key = language.trim().toLowerCase();
  return languageColorMap[key] || "#cccccc";
}
