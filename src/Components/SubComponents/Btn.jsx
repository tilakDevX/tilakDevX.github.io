import { Button } from "@chakra-ui/button";
import React from "react";

function Btn({ text }) {
  return (
    <Button
    style={{ background : '#F45050' }}
    _hover={{ background: '#3C486B', color: 'white' }}
    size="lg"
    >
      {text}
    </Button>
  );
}

export default Btn;
