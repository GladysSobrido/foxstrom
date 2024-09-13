import { useSearchParams } from "react-router-dom";
import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useTranslation, Trans } from "react-i18next";
import { isClerkAPIResponseError } from "@clerk/clerk-react/errors";
import { TarifResume } from "../components/TarifResume";
import { Link } from "react-router-dom";
import "./Register.css";
import "../components/TarifCard.css";
//Chakra form control
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  PinInput,
  PinInputField,
  Flex,
  //Stack,
} from "@chakra-ui/react";
//Authentication
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
// import { TarifCard } from "../components/TarifCard";
const API = import.meta.env.VITE_APIURL;

// Step 0= filling the form, step 1= introducing code, step 3= thank you for registering
export function Register() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [step, setStep] = useState(0);
  //taking tarif info from params
  const [searchParams] = useSearchParams();
  const tarif = searchParams.get("tarif");
  const totalPrice = searchParams.get("price");
  const nett = searchParams.get("nett");
  const tax = searchParams.get("tax");
  const [pin, setPin] = useState([null, null, null, null, null, null]);
  console.log("tarif:", tarif, "totalPrice:", totalPrice);

  //User data:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [strasse, setStrasse] = useState("");
  const [hausnummer, setHausnummer] = useState("");
  const [postleitzahl, setPostleitzahl] = useState("");
  const [ort, setOrt] = useState("");

  //Translation
  const { i18n } = useTranslation();
  console.log({ i18n });

  async function handleSignUp() {
    try {
      if (!isLoaded) return;
      await signUp.create({
        emailAddress: email,
        password,
      });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setStep(1);
    } catch (err) {
      if (isClerkAPIResponseError(err)) {
        console.log(err.errors);
      }
      console.error(JSON.stringify(err, null, 2));
      console.log("error:", err);
    }
  }

  //Authentification connection with Clerk

  const { getToken } = useAuth();
  async function handleSaveTarif() {
    console.log("handleSaveTarif has been called");
    try {
      const token = await getToken();
      console.log("token received");
      await axios.post(
        `${API}/customers`,
        {
          tarif,
          price: totalPrice,
          vorname,
          nachname,
          strasse,
          hausnummer,
          postleitzahl,
          ort,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  //1234LKjhg!
  async function handleVerification() {
    try {
      const strPin = pin.join("");
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: strPin,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        console.log("before handleSaveTarif");
        handleSaveTarif(); //API ANRUF - Kundendata ins Datenbank schreiben
        setStep(2);
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err) {
      console.log(err);
    }
  }

  {
    if (step == 0) {
      return (
        <>
          <div className="regHeader">
            <div className="formChakraContainer">
              <div className="tarifPosition">
                <TarifResume
                  tarif={tarif}
                  totalPrice={totalPrice}
                  nett={nett}
                  tax={tax}
                />
              </div>
              {/* Name, surname */}{" "}
              <h1>
                <Trans i18nKey="register1">Registrieren Sie</Trans>
              </h1>
              <Flex className="formcontainer">
                <FormControl mr="5%">
                  <FormLabel htmlFor="vorname" fontWeight={"normal"}>
                    <Trans i18nKey="register2">First name</Trans>
                  </FormLabel>
                  <Input
                    size="sm"
                    id="vorname"
                    placeholder="Max"
                    className="inputfield"
                    value={vorname}
                    onChange={(event) => {
                      setVorname(event.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mr="5%">
                  <FormLabel htmlFor="nachname" fontWeight={"normal"}>
                    <Trans i18nKey="register3">Last Name</Trans>
                  </FormLabel>
                  <Input
                    size="sm"
                    id="nachname"
                    placeholder="Mustermann"
                    value={nachname}
                    onChange={(event) => {
                      setNachname(event.target.value);
                    }}
                  />
                </FormControl>
              </Flex>
              {/* addresse */}
              <Flex className="formcontainer">
                <FormControl mr="5%">
                  <FormLabel htmlFor="strasse" fontWeight={"normal"}>
                    <Trans i18nKey="register4">Straße</Trans>
                  </FormLabel>
                  <Input
                    size="sm"
                    id="strasse"
                    placeholder="Main Str. 1"
                    className="strasse"
                    value={strasse}
                    onChange={(event) => {
                      setStrasse(event.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mr="5%">
                  <FormLabel htmlFor="hausnummer" fontWeight={"normal"}>
                    <Trans i18nKey="register5">Hausnummer</Trans>
                  </FormLabel>
                  <Input
                    size="sm"
                    id="hausnummer"
                    placeholder="1"
                    value={hausnummer}
                    onChange={(event) => {
                      setHausnummer(event.target.value);
                    }}
                  />
                </FormControl>
              </Flex>
              <Flex className="formcontainer">
                {" "}
                <FormControl mr="5%">
                  <FormLabel htmlFor="plz" fontWeight={"normal"}>
                    <Trans i18nKey="register6">Postleitzahl</Trans>
                  </FormLabel>
                  <Input
                    size="sm"
                    id="plz"
                    placeholder="10234"
                    className="inputfield"
                    type="number"
                    value={postleitzahl}
                    onChange={(event) => {
                      setPostleitzahl(event.target.value);
                    }}
                  />
                </FormControl>
                <FormControl mr="5%">
                  <FormLabel htmlFor="ort" fontWeight={"normal"}>
                    <Trans i18nKey="register7">Stadt</Trans>
                  </FormLabel>
                  <Input
                    size="sm"
                    id="ort"
                    placeholder="Bonn"
                    value={ort}
                    onChange={(event) => {
                      setOrt(event.target.value);
                    }}
                  />
                </FormControl>
              </Flex>
              {/*username, password */}
              <Flex className="formcontainer">
                <FormControl mr="5%">
                  <FormLabel htmlFor="email" fontWeight={"normal"}>
                    <Trans i18nKey="register8">E-Mail</Trans>
                  </FormLabel>
                  <Input
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    size="sm"
                    id="email"
                    placeholder="mail@provider.com"
                  />
                  <FormHelperText className="helpertext">
                    <Trans i18nKey="register9">E-Mail wird verifiziert</Trans>
                  </FormHelperText>
                </FormControl>
                {/* {<p>{email}</p>}
                {<p>{password}</p>} */}
                <FormControl mr="5%">
                  <FormLabel htmlFor="pass" fontWeight={"normal"}>
                    <Trans i18nKey="register10">Passwort</Trans>
                  </FormLabel>
                  <PasswordInput
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </FormControl>
              </Flex>
              <Button
                className="chakraButton"
                type="submit"
                name="submit"
                onClick={handleSignUp}
              >
                <Trans i18nKey="register11">Senden</Trans>
              </Button>
            </div>
          </div>
        </>
      );
    }
    if (step == 1) {
      return (
        <>
          <div className="regHeader">
            <h2>
              <Trans i18nKey="register12">Introduce the code</Trans>
            </h2>
            <div className="formChakraContainer">
              {/* Note:we can choose type="alphanumeric" */}
              <div className="pin">
                <PinInput type="number">
                  {[0, 0, 0, 0, 0, 0].map((_, index) => {
                    return (
                      <PinInputField
                        key={index}
                        value={pin[index]}
                        onChange={(event) => {
                          setPin((prev) => {
                            prev[index] = event.target.value;
                            return prev.slice();
                          });
                        }}
                      />
                    );
                  })}
                </PinInput>
                {/* <p>{JSON.stringify(pin)}</p> */}
              </div>
              <Button
                className="chakraButton"
                type="submit"
                name="submit"
                onClick={handleVerification}
              >
                <Trans i18nKey="register11">Senden</Trans>
              </Button>
            </div>
          </div>
        </>
      );
    }
    if (step == 2) {
      return (
        <>
          <div className="regHeader">
            <div className="formChakraContainer">
              <div className="end">
                <h2>
                  <Trans i18nKey="register13">Vielen Dank</Trans>
                </h2>
                <p>
                  <Trans i18nKey="register14">
                    Now you can access your customer profile.
                  </Trans>
                </p>
                <div>
                  <Link to={`/private`}>
                    <button className="registerButton" type="submit">
                      <Trans i18nKey="register15">to your private area</Trans>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
