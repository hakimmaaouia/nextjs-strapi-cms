const lang = ["en", "fr"] as const;
export const getDefaultLanguages = () => {
  return lang[0];
};
export const getLanguages = () => {
  return lang;
};
