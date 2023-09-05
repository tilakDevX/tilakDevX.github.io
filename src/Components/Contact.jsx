import React, { useRef, useState } from "react";
import { BsFillTelephoneFill, BsGithub } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import {
  Box,
  Button,
  FormControl,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [formData, setFormData] = useState(initialData);
  const [status, setStatus] = useState("")

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    const emailData = {
      from_name: formData.firstName + " " + formData.lastName,
      email: formData.email,
      message: "Email: " + formData.email + " \n" + formData.message,
    };
    try {
      await emailjs.send(
        "service_xz0chow", // Replace with your Email.js service ID
        "template_oh8vj5j", // Replace with your Email.js template ID
        emailData,
        "vu3_2UBLw2XV8K8XI"
      );

      // Display a success message to the user or redirect them to a confirmation page
      console.log("Email sent successfully");
      setStatus("Email sent successfully")
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Internal error, Please try again later")
    }
    setFormData(initialData);
  };

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
          <Box
            fontSize="20px"
            justifyContent="left"
            alignItems="center"
            gap="6px"
          >
            <Text as="b">Get in Touch with Me</Text>

            <Box w={"70%"}>
              <form ref={form} onSubmit={handleSubmit}>
                <FormControl>
                  <Box display="flex" gap={"10px"}>
                    <Input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Box>

                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    m={"10px 0 10px 0"}
                  />

                  <Textarea
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <Button type="submit" width={"100%"} m={"auto"} mt={"10px"}>
                    Submit
                  </Button>
                </FormControl>
              </form>

              {
                status && <Text color={status==="Email sent successfully" ? "green.800": "red.500"}>{status}</Text>
              }
              
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
