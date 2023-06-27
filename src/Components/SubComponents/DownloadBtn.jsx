import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

function DownloadBtn(props) {
  return (
   
       <ChakraLink className="nav-link resume"
          href="https://drive.google.com/file/d/1DJG7AoC-UQC0BGt_QEPDDj6bq1ihGpNZ/view"
          target="_blank"
          rel="noopener noreferrer"
          download
          fontSize={"20"}
        >
          <DownloadIcon /> Resume
        </ChakraLink>
     
  );
}

export default DownloadBtn;
