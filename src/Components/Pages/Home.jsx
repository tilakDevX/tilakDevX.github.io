import React from "react";
import "../CSS/Home.css";
import { Container } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import Btn from "../SubComponents/Btn";
import DownloadBtn from "../SubComponents/DownloadBtn";
import { Button } from "@chakra-ui/react";
import About from "./About";

function Home(props) {
  return (
    <section id="home" className="Home">
      <div className="homeTitle">
        <h2 id="user-detail-name">Welcome to the world of Tilak,</h2>

        <p className="homeTag1">Your versatile Fullstack Web Developer!</p>
        <p id="user-detail-intro" className="homeTag2">
          I am dedicated to creating <br />
          comprehensive solutions for websites and web applications.
        </p>
        <Container mt="4rem" display={"flex"} gap={"20px"}>
          <Button
            color="white"
            background={"#3C486B"}
            size="lg"
            _hover={{ color: "black" }}
            p={"10px"}
          >
            <DownloadBtn />
          </Button>
          <Link to="/project">
            {" "}
            <Btn text="Project" />
          </Link>
        </Container>
      </div>
    </section>
  );
}

export default Home;
