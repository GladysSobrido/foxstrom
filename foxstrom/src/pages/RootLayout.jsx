import { Outlet } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
export function RootLayout() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>RootLayout</h1>
      <Trans t={t}>learn</Trans>
      <Outlet />
    </div>
  );
}
