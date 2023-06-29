import { Badge, Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      id: 1,

      name: "BlueMercury",
      description:
        "Bluemercury was founded to help people discover their uniqueness, shining a light on the things that make them delightfully, wonderfully distinctive. We pioneered a client-first service model that emphasized hyperpersonalized, high-quality beauty interactions.",
      image: "https://i.imgur.com/iKwe5WX.png",
      techStack: ["HTML", "CSS", "JS"],
      github: "https://github.com/Kamlesh-Bhatt-52625/Bluemercury-Clone",
      demo: "https://cloneblumercury.netlify.app/",
    },
    {
      id: 2,

      name: "BIALETTI",
      description:
        "Bialetti is more than just a coffee store—it's a haven for coffee enthusiasts and connoisseurs alike. Step into the inviting atmosphere of Bialetti, where the rich aroma of freshly brewed coffee fills the air and a world of flavor awaits. With a wide selection of premium coffees from around the globe, Bialetti offers a truly indulgent experience for coffee",
      image: "https://i.imgur.com/k2vI427.png",
      techStack: ["HTML", "CSS", "JS"],
      github: "https://github.com/DeveloperTilak/bialettiClone",
      demo: "https://bialetticlone.netlify.app/",
    },
    {
      id: 3,

      name: "Drum Keyboard",
      description:
        "Exciting experiment! By pressing keys on the keyboard, you can enjoy a variety of different songs. It's a fun way to practice and explore music. Let's dive in and experience the joy of listening to different tunes with a simple key press.",
      image: "https://i.imgur.com/e4Xvqc7.png",
      techStack: ["HTML", "CSS", "JS"],
      github: "https://github.com/DeveloperTilak/drum-sound",
      demo: "https://developertilak.github.io/drum-sound/",
    },
    {
      id: 4,

      name: "My Portfolio",
      description:
        "",
      image: "https://i.imgur.com/oBpuFxQ.png",
      techStack: ["REACT", "Chakra-UI"],
      github: "https://github.com/DeveloperTilak/DeveloperTilak.github.io",
      demo: "https://developertilak.github.io/",
    },
  ];

  return (
    <>
      <Text
        id="projects"
        fontSize="4xl"
        fontWeight="600"
        margin="auto"
        textAlign="center"
        marginTop={{ base: "30px", md: "20px", lg: "60px" }}
      >
        Projects
      </Text>
      <Box
        //border="1px solid yellow"
        display="grid"
        width="100%"
        margin="auto"
        padding={{ base: "10px", md: "20px", sm: "10px" }}
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="20px"
      >
        {projects.map((el) => {
          return (
            <Box
              className="project-card"
              boxShadow="md"
              p="6"
              rounded="md"
              padding="20px"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image src={el.image} />
              <Box
                className="project-tech-stack"
                marginTop="10px"
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
              >
                {el.techStack.map((tech) => {
                  return (
                    <Badge
                      borderRadius="full"
                      px="2"
                      colorScheme="teal"
                      margin="5px"
                    >
                      {tech}
                    </Badge>
                  );
                })}
              </Box>
              <Text
                className="project-title"
                marginTop="20px"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                {el.name}
              </Text>
              <Text
                className="project-description"
                marginTop="10px"
                fontSize={{ base: "sm", md: "md" }}
              >
                {el.description}
              </Text>
              <Box
                display="flex"
                justifyContent="space-between"
                marginTop="20px"
                marginBottom="0px"
              >
                <Link
                  className="project-deployed-link"
                  href={el.demo}
                  isExternal
                >
                  <Button
                    _hover={{ bg: "#D5C1AF" }}
                    size={{ base: "sm", md: "md" }}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    Demo
                    <Text as="span" ml={"2"}>
                      <AiOutlineDownload fontSize={"1.2rem"} />
                    </Text>
                  </Button>
                </Link>
                <Link
                  className="project-github-link"
                  href={el.github}
                  isExternal
                >
                  <Button
                    _hover={{ bg: "#D5C1AF" }}
                    size={{ base: "sm", md: "md" }}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    Github
                    <Text as="span" ml={"2"}>
                      <AiOutlineDownload fontSize={"1.2rem"} />
                    </Text>
                  </Button>
                </Link>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Projects;
