import es from "./es.json";
import en from "./en.json";

export const LANG = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.SPANISH) return es;
  if (currentLocale === LANG.ENGLISH) return en;
  return es;
};
