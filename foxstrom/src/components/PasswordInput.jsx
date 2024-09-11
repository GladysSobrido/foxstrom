import {
  Input,
  InputGroup,
  InputRightElement,

  //   InputRightAddon,
  //Button,
  //FormLabel,
} from "@chakra-ui/react";
import React from "react";
export function PasswordInput({ onChange, value }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <InputGroup>
        <Input
          onChange={onChange}
          value={value}
          size="sm"
          id="pass"
          type={show ? "text" : "password"}
          placeholder="****"
        />
        <InputRightElement
          width="2rem"
          //   variant="outline"
          h="2rem"
          size="xs"
          onClick={handleClick}
        >
          {show ? "❌" : "👁️"}
        </InputRightElement>
      </InputGroup>
    </>
  );
}
