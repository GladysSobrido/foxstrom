import { useSearchParams } from "react-router-dom";
// import { PasswordInput } from "../components/PasswordInput";
import { useState } from "react";

//Chakra form control

import {
  // Progress,
  // Box,
  // ButtonGroup,
  Button,
  // Heading,
  Flex,
  FormControl,
  // GridItem,
  FormLabel,
  Input,
  // Select,
  // SimpleGrid,
  // InputLeftAddon,
  InputGroup,
  // Textarea,
  FormHelperText,
  InputRightElement,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

// import { useToast } from "@chakra-ui/react";

// Step 0= filling the form, step 1= introducing code, step 3= thank you for registering
export function RTEST() {
  const [step, setStep] = useState(0);
  const [searchParams] = useSearchParams();
  const tarif = searchParams.get("tarif");
  console.log("tarif:", tarif);
  //Show/hide password: Component PasswordInput
  const [show, setShow] = useState(false);
  {
    if (step == 0) {
      const handleClick = () => setShow(!show);
      return (
        <>
          <p>
            Um Kunde zu werden, bitte registrieren Sie in unsere online
            Platform.
          </p>
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
          <FormControl mt="2%">
            <FormLabel htmlFor="email" fontWeight={"normal"}>
              Email address
            </FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We&apos;ll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </>
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
