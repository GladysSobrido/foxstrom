import "./i18n";
import { Trans } from "react-i18next";
function Strom() {
  return (
    <>
      <main>
        <Trans i18nKey="strom1">
          <h2>Die Ökostrom-Tarife von FoxStrom</h2>
        </Trans>
      </main>
    </>
  );
}

export default Strom;
