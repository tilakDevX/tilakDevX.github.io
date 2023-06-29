import React from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box
      id="contact"
      w="90%"
      margin="auto"
      mt={{ base: "30px", md: "20px", lg: "60px" }}
      mb={{ base: "20px", md: "30px", lg: "60px" }}
    >
      <Box
        padding={{ base: "20px", md: "30px" }}
        height={{ base: "auto", md: "450px" }}
        mb={{ base: "50px", md: "150px" }}
      >
        <Box
          w="max-content"
          align="center"
          className="heading-hover"
          margin="auto"
        >
          <Text
            className="about-H"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="extrabold"
            marginRight="180px"
          >
            Contact Me
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 10 }}>
          <Box
            margin="auto"
            fontSize="large"
            fontWeight="500"
            display="grid"
            justifyContent="center"
            alignItems="center"
            className="contact"
          >
            <Box
              as="b"
              fontSize="20px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="3px"
            >
              <FaHome />
              <Text as="b">Basti, UP</Text>
            </Box>
            <a href="tilakram5075@gmail.com">
              <Box
                id="contact-email"
                as="b"
                fontSize="20px"
                display="flex"
                justifyContent="left"
                alignItems="center"
                gap="6px"
              >
                {" "}
                <MdAttachEmail />
                <Text as="b">tilakram5075@gmail.com</Text>
              </Box>
            </a>
            <Box
              id="contact-github"
              as="b"
              fontSize="20px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px"
            >
              <BsGithub />{" "}
              <a
                href="https://github.com/DeveloperTilak"
                target="_blank"
                rel="noreferrer"
              >
                <Text as="b">Github</Text>
              </a>
            </Box>
            <Box
              id="contact-phone"
              as="b"
              fontSize="20px"
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap="6px"
            >
              <BsFillTelephoneFill />{" "}
              <a href="tel:8795067598">
                <Text as="b">8795067598</Text>
              </a>
            </Box>
            <a
              href="https://www.linkedin.com/in/developer-tilak/"
              target="_blank"
              rel="noreferrer"
            >
              <Box
                id="contact-linkedin"
                as="b"
                fontSize="20px"
                display="flex"
                justifyContent="left"
                alignItems="center"
                gap="6px"
              >
                <ImLinkedin />
                <Text as="b">LinkedIn</Text>
              </Box>
            </a>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
