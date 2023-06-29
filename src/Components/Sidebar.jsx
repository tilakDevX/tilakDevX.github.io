import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay,   useColorMode, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon  } from "@chakra-ui/icons";

import DownloadBtn from './SubComponents/DownloadBtn';

const Sidebar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [title, setTitle] = useState("Home");

  return (
    <>
      <Button onClick={toggleColorMode} marginRight={"10px"}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Button onClick={onOpen}><HamburgerIcon /></Button>
      
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent >
          <DownloadBtn />
          <DrawerBody>
            <Box textAlign="center">
              <Link
                onClick={() => {
                  setTitle("Home");
                  setTimeout(() => {
                    onClose();
                  }, 500)
                }}
                href="#home"
                className="nav-link home"
                display={"block"}
                marginTop={"10px"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  setTitle("About");
                  setTimeout(() => {
                    onClose();
                  }, 500)
                }}
                href="#about"
                className="nav-link about"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                About
              </Link>
              <Link
                onClick={() => {
                  setTitle("Skills");
                  setTimeout(() => {
                    onClose();
                  }, 500)
                }}
                href="#skills"
                className="nav-link skills"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                Skills
              </Link>
              <Link
                onClick={() => {
                  setTitle("Projects");
                  setTimeout(() => {
                    onClose();
                  }, 500)
                }}
                href="#projects"
                className="nav-link projects"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                Projects
              </Link>
              <Link
                onClick={() => {
                  setTitle("Contact");
                  setTimeout(() => {
                    onClose();
                  }, 500)
                }}
                href="#contact"
                className="nav-link contact"
                display={"block"}
                marginBottom={"15px"}
                fontSize={"20px"}
              >
                Contact
              </Link>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar