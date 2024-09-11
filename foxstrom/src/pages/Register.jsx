import { useSearchParams } from "react-router-dom";
import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import "./Register.css";
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

// Step 0= filling the form, step 1= introducing code, step 3= thank you for registering
export function Register() {
  const [step, setStep] = useState(0);
  const [searchParams] = useSearchParams();
  const tarif = searchParams.get("tarif");
  console.log("tarif:", tarif);
  //Show/hide password: Component PasswordInput
  //Translation
  const { i18n } = useTranslation();
  console.log({ i18n });

  {
    if (step == 0) {
      return (
        <>
          <div className="regHeader">
            <h1>
              <Trans i18nKey="register1">Registrieren Sie</Trans>
            </h1>

            <div className="formChakraContainer">
              {/* Name, surname */}
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
                  />
                </FormControl>

                <FormControl mr="5%">
                  <FormLabel htmlFor="nachname" fontWeight={"normal"}>
                    <Trans i18nKey="register3">Last Name</Trans>
                  </FormLabel>
                  <Input size="sm" id="nachname" placeholder="Mustermann" />
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
                  />
                </FormControl>
                <FormControl mr="5%">
                  <FormLabel htmlFor="hausnummer" fontWeight={"normal"}>
                    <Trans i18nKey="register5">Hausnummer</Trans>
                  </FormLabel>
                  <Input size="sm" id="hausnummer" placeholder="1" />
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
                  />
                </FormControl>
                <FormControl mr="5%">
                  <FormLabel htmlFor="ort" fontWeight={"normal"}>
                    <Trans i18nKey="register7">Stadt</Trans>
                  </FormLabel>
                  <Input size="sm" id="ort" placeholder="Bonn" />
                </FormControl>
              </Flex>
              {/*username, password */}
              <Flex className="formcontainer">
                <FormControl mr="5%">
                  <FormLabel htmlFor="email" fontWeight={"normal"}>
                    <Trans i18nKey="register8">E-Mail</Trans>
                  </FormLabel>
                  <Input size="sm" id="email" placeholder="mail@provider.com" />
                  <FormHelperText className="helpertext">
                    <Trans i18nKey="register9">E-Mail wird verifiziert</Trans>
                  </FormHelperText>
                </FormControl>

                <FormControl mr="5%">
                  <FormLabel htmlFor="pass" fontWeight={"normal"}>
                    <Trans i18nKey="register10">Passwort</Trans>
                  </FormLabel>
                  <PasswordInput />
                </FormControl>
              </Flex>
              <Button
                className="chakraButton"
                type="submit"
                name="submit"
                onClick={() => setStep(1)}
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
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </div>
              <Button
                className="chakraButton"
                type="submit"
                name="submit"
                onClick={() => setStep(2)}
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
              <h2>
                <Trans i18nKey="register13">Vielen Dank</Trans>
              </h2>
              <p>
                <Trans i18nKey="register14">
                  Now you can access your customer profile.
                </Trans>
              </p>
            </div>
          </div>
        </>
      );
    }
  }
}
