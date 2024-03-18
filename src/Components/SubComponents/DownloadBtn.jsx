import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

function DownloadBtn(props) {
  return (
    <ChakraLink
      className="nav-link resume"
      href="https://drive.google.com/file/d/1_XCG97-iz7uvq6wj20gfAFjO-xBYOmu1/view"
      target="_blank"
      rel="noopener noreferrer"
      fontSize={20}
      onClick={(e) => {
        e.preventDefault();
        window.open(
          "https://drive.google.com/file/d/1_XCG97-iz7uvq6wj20gfAFjO-xBYOmu1/view",
          "_blank"
        );
        window.location.href =
          "https://drive.google.com/file/d/1_XCG97-iz7uvq6wj20gfAFjO-xBYOmu1/view?usp=sharing";
      }}
    >
      <DownloadIcon /> Resume
    </ChakraLink>
  );
}

export default DownloadBtn;
