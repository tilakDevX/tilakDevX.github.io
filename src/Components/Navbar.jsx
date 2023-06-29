import { Box, Button, Flex, useColorMode, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { Helmet } from "react-helmet";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import DownloadBtn from "./SubComponents/DownloadBtn";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");

  return (
    <>
      <div>
        <Helmet>
          <title>{`Tilak | ${title}`}</title>
        </Helmet>
      </div>
      <Box
        id="nav-menu"
        pos={{ base: "sticky", md: "sticky", sm: "fixed" }}
        zIndex="7"
        textTransform={"capitalize"}
        top="0"
        left="0"
        right="0"
        background={colorMode === "light" ? "#b0bec5" : "black"}
      >
        <Flex
          justify={"space-between"}
          height="4rem"
          align={"center"}
          transition={"all 1s"}
        >
          <Box height="3.5rem" display="flex" alignItems="center" fontSize="20px" marginLeft={{ base: "2px", lg: "2rem" }}>
            <Link href="#">
              <FontAwesomeIcon icon={faCode} />
            </Link>
          </Box>

          <Flex
            display={{ base: "none", lg: "flex" }}
            width={"50%"}
            justify="space-around"
            align={"center"}
            marginRight="2rem"
          >
            <Link
              onClick={() => setTitle("Home")}
              href="#home"
              className="nav-link home"
            >
              home
            </Link>
            <Link
              onClick={() => setTitle("About")}
              href="#about"
              className="nav-link about"
            >
              about
            </Link>
            <Link
              onClick={() => setTitle("Skills")}
              href="#skills"
              className="nav-link skills"
            >
              skills
            </Link>
            <Link
              onClick={() => setTitle("Projects")}
              href="#projects"
              className="nav-link projects"
            >
              projects
            </Link>
            <Link
              onClick={() => setTitle("Contact")}
              href="#contact"
              className="nav-link contact"
            >
              contact
            </Link>
            <Link id="resume-button-1"
              className="nav-link resume">
            
            
            <DownloadBtn />
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
          <Box display={{ lg: "none" }} marginRight="10px">
            <Sidebar />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
