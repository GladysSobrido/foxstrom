import { useSearchParams } from "react-router-dom";
import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";
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

  {
    if (step == 0) {
      return (
        <>
          <div className="regHeader">
            <h1>Registrieren Sie</h1>

            <div className="formChakraContainer">
              {/* Name, surname */}
              <Flex className="formcontainer">
                <FormControl mr="5%">
                  <FormLabel htmlFor="vorname" fontWeight={"normal"}>
                    First name
                  </FormLabel>
                  <Input
                    size="sm"
                    id="vorname"
                    placeholder="Vorname"
                    className="inputfield"
                  />
                </FormControl>

                <FormControl mr="5%">
                  <FormLabel htmlFor="nachname" fontWeight={"normal"}>
                    Last name
                  </FormLabel>
                  <Input size="sm" id="nachname" placeholder="Nachname" />
                </FormControl>
              </Flex>
              {/* addresse */}
              <Flex className="formcontainer">
                <FormControl mr="5%">
                  <FormLabel htmlFor="strasse" fontWeight={"normal"}>
                    Straße
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
                    Hausnummer
                  </FormLabel>
                  <Input size="sm" id="hausnummer" placeholder="1" />
                </FormControl>
              </Flex>
              <Flex className="formcontainer">
                {" "}
                <FormControl mr="5%">
                  <FormLabel htmlFor="plz" fontWeight={"normal"}>
                    Postleitzahl
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
                    Stadt
                  </FormLabel>
                  <Input size="sm" id="ort" placeholder="Bonn" />
                </FormControl>
              </Flex>
              {/*username, password */}
              <Flex className="formcontainer">
                <FormControl mr="5%">
                  <FormLabel htmlFor="email" fontWeight={"normal"}>
                    E-Mail
                  </FormLabel>
                  <Input size="sm" id="email" placeholder="mail@provider.com" />
                  <FormHelperText className="helpertext">
                    E-Mail wird verifiziert
                  </FormHelperText>
                </FormControl>

                <FormControl mr="5%">
                  <FormLabel htmlFor="pass" fontWeight={"normal"}>
                    Passwort
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
                Submit
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
            <h2>Introduce the code</h2>
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
                Submit
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
              <h2>Thank you for confirming your email</h2>
              <p>
                Now you can fill in your information in order to become a
                customer.
              </p>
            </div>
          </div>
        </>
      );
    }
  }
}
