import { useSearchParams } from "react-router-dom";
import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";

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
        <div className="section2">
          <p>
            Um Kunde zu werden, bitte registrieren Sie in unsere online
            Platform.
          </p>
          {/* <form>
            <label htmlFor="email">E-Mail Adresse</label>
            <input id="name" type="string"></input>
          </form> */}
          Chakra form:
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="email@provider.com" />

            <FormHelperText>
              Diese E-Mail wird verifiziert werden
            </FormHelperText>
            <PasswordInput />
            <Button type="submit" name="submit" onClick={() => setStep(1)}>
              Submit
            </Button>
          </FormControl>
        </div>
      );
    }
    if (step == 1) {
      return (
        <div>
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
        <div>
          <h2>Thank you for confirming your email</h2>
          <p>
            Now you can fill in your information in order to become a customer.
          </p>
        </div>
      );
    }
  }
}
