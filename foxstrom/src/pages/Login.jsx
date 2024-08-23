import { useTranslation } from "react-i18next";
import "./Login.css";
export function Login() {
  const { t } = useTranslation();
  return (
    <>
      <h2>Log in </h2>
      <form className="loginform" action="/">
        <div>
          <label htmlFor="username">{t("login1")} </label>
          <input id="username" type="string"></input>
        </div>
        <div>
          <label htmlFor="password">{t("login2")} </label>
          <input id="password" type="password"></input>
        </div>

        <button type="submit">Log in</button>
      </form>
    </>
  );
}
export default Login;
