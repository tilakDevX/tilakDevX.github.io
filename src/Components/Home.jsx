import {
  Box,
  Button,
  Flex,
  Heading,
  
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineArrowDown } from "react-icons/ai";
import Typewriter from "typewriter-effect";
// import DownloadBtn from "./SubComponents/DownloadBtn";
import tilak_resume from "../img/Tilak's_Resume.pdf"


const Home = () => {
  return (
    <Box>
      <Flex
        height={{ base: "80vh", lg: "100vh" }}
        maxHeight={"750px"}
        className="background"
        id="home"
        flexDir={{ base: "column-reverse", lg: "row" }}
        align={"center"}
        justify="center"
        gap={{ base: "5", md: "10", lg: "20" }}
        marginTop="2rem"
      >
        
        <Flex
          maxWidth={{ base: "100%" }}
          flexDir="column"
          gap="1rem"
          marginTop={{ base: "1rem", md: "1rem", sm: "5rem" }}
          padding={"5px"}
        >
          <Heading id="user-detail-name" style={{ paddingBottom: 5 }} className="heading">
          
            Welcome to the world of Tilak,  
           
          </Heading>
          <h2 >Your versatile Fullstack Web Developer!</h2>
          <Typewriter
            options={{
              strings: ["Full Stack Web Developer"],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
            }}
          />

          <Text>
          I am dedicated to creating <br />
          comprehensive solutions for websites and web applications.
          </Text>
          <Flex gap={"8"} align="center" m={"auto"} p= "50px">
          <Button
              id="resume-button-2"
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              width="max-content"
              colorScheme={"teal"}
              href={"#"}
              _hover={{
                bg: "blue.600",
              }}
            >
              <Link
                id="resume-link-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DJG7AoC-UQC0BGt_QEPDDj6bq1ihGpNZ/view"
                  )
                }
                href={tilak_resume}
                target={"_blank"}
                download
              >Resume</Link>
            </Button>

            <Flex gap="3">
              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/developer-tilak/"
                isExternal
              >
                <ImLinkedin fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-github"
                href="https://github.com/DeveloperTilak"
                isExternal
              >
                <FaGithub fontSize={"1.6rem"} />
              </Link>
              <Link
                id="contact-email"
                href="https://tilakram5075@gmail.com"
                isExternal
              >
                <HiOutlineMail fontSize={"1.6rem"} />
              </Link>
            </Flex>
          </Flex>
          <Box   display={{ base: "none", lg: "block" }} m="auto">
            <Flex align={"center"} gap="2">
              <span>
                <BsMouse fontSize={"1.4rem"} />
              </span>
              <span>
                <AiOutlineArrowDown />
              </span>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
