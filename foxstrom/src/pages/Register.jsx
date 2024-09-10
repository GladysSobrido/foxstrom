import { useSearchParams } from "react-router-dom";

export function Register() {
  const [searchParams] = useSearchParams();
  const tarif = searchParams.get("tarif");
  console.log("tarif:", tarif);
  return (
    <div>
      <p>
        Um Kunde zu werden, bitte registrieren Sie in unsere online Platform.
      </p>
      <form>
        <label htmlFor="email">E-Mail Adresse</label>
        <input id="name" type="string"></input>
      </form>
    </div>
  );
}
