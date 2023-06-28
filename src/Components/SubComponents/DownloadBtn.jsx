import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

function DownloadBtn(props) {
  return (
    <ChakraLink
      className="nav-link resume"
      href="https://drive.google.com/file/d/1DJG7AoC-UQC0BGt_QEPDDj6bq1ihGpNZ/view"
      target="_blank"
      rel="noopener noreferrer"
      fontSize={20}
      onClick={(e) => {
        e.preventDefault();
        window.open(
          "https://drive.google.com/file/d/1DJG7AoC-UQC0BGt_QEPDDj6bq1ihGpNZ/view",
          "_blank"
        );
        window.location.href =
          "https://drive.google.com/uc?export=download&id=1DJG7AoC-UQC0BGt_QEPDDj6bq1ihGpNZ";
      }}
    >
      <DownloadIcon /> Resume
    </ChakraLink>
  );
}

export default DownloadBtn;
