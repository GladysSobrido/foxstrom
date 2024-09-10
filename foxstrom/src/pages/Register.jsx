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
          <div className="formChakraContainer">
            <p>
              Um Kunde zu werden, bitte registrieren Sie in unsere online
              Platform.
            </p>

            {/* Name, surname */}
            <Flex>
              <FormControl mr="5%">
                <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                  First name
                </FormLabel>
                <Input id="first-name" placeholder="First name" />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                  Last name
                </FormLabel>
                <Input id="last-name" placeholder="First name" />
              </FormControl>
            </Flex>
            {/* username, password */}
            <Flex>
              <FormControl mr="5%">
                <FormLabel htmlFor="email" fontWeight={"normal"}>
                  Email address
                </FormLabel>
                <Input id="email" placeholder="mail@provider.com" />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="pass" fontWeight={"normal"}>
                  Password
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
      );
    }
    if (step == 2) {
      return (
        <div className="formChakraContainer">
          <h2>Thank you for confirming your email</h2>
          <p>
            Now you can fill in your information in order to become a customer.
          </p>
        </div>
      );
    }
  }
}
