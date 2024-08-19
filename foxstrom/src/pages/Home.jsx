import { useTranslation } from "react-i18next";

export function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2>Home</h2>
      <p>{t("learn")}</p>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("de");
        }}
      >
        Deutsch
      </button>
    </div>
  );
}
