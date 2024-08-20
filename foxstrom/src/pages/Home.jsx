import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

//Translation
// import React, { Suspense } from "react";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

function Home() {
  const [count, setCount] = useState(0);

  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <Trans i18nKey="edit">
            Edit <code>src/App.jsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <h1>{t("learn")}</h1>
      <p className="read-the-docs">
        <Trans i18nKey="description">
          Click on the Vite and React logos to learn more
        </Trans>
      </p>
    </>
  );
}

export default Home;
