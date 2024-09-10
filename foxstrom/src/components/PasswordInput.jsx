import {
  Input,
  InputGroup,
  InputRightElement,
  //   InputRightAddon,
  //Button,
  //FormLabel,
} from "@chakra-ui/react";
import React from "react";
export function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <InputGroup>
        <Input
          id="pass"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <InputRightElement
          width="2rem"
          //   variant="outline"
          h="3rem"
          size="xs"
          onClick={handleClick}
        >
          {show ? "❌" : "👁️"}
        </InputRightElement>
      </InputGroup>
    </>
  );
}
