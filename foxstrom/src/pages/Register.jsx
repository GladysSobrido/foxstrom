import { useSearchParams } from "react-router-dom";
import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";
import "./Register.css";
//Chakra form control
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  //FormHelperText,
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
          <header className="regHeader"></header>
          <h1>Registrieren Sie</h1>

          <div className="formChakraContainer">
            {/* Name, surname */}
            <Flex className="formcontainer">
              <FormControl mr="5%">
                <FormLabel htmlFor="vorname" fontWeight={"normal"}>
                  First name
                </FormLabel>
                <Input
                  id="vorname"
                  placeholder="Vorname"
                  className="inputfield"
                />
              </FormControl>

              <FormControl mr="5%">
                <FormLabel htmlFor="nachname" fontWeight={"normal"}>
                  Last name
                </FormLabel>
                <Input id="nachname" placeholder="Nachname" />
              </FormControl>
            </Flex>
            {/*username, password */}
            <Flex className="formcontainer">
              <FormControl mr="5%">
                <FormLabel htmlFor="email" fontWeight={"normal"}>
                  E-Mail
                </FormLabel>
                <Input id="email" placeholder="mail@provider.com" />
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
        </>
      );
    }
    if (step == 1) {
      return (
        <>
          <header className="regHeader"></header>
          <div className="formChakraContainer">
            <p>Introduce the code</p>
            {/* Note:we can choose type="alphanumeric" */}
            <PinInput type="number">
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
            <Button type="submit" name="submit" onClick={() => setStep(2)}>
              Submit
            </Button>
          </div>
        </>
      );
    }
    if (step == 2) {
      return (
        <>
          <header className="regHeader"></header>
          <div className="formChakraContainer">
            <h2>Thank you for confirming your email</h2>
            <p>
              Now you can fill in your information in order to become a
              customer.
            </p>
          </div>
        </>
      );
    }
  }
}
