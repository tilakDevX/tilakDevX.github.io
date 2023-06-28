import React from "react";
import "../CSS/Home.css";
import { Container } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import Btn from "../SubComponents/Btn";
import DownloadBtn from "../SubComponents/DownloadBtn";
 

function Home(props) {
  return (
    <section className="nav-link home" >
      <div className="homeTitle">
        <h2  id="user-detail-name">Welcome to the world of Tilak,</h2>

        <p className="homeTag1">Your versatile Fullstack Web Developer!</p>
        <p id="user-detail-intro" className="homeTag2">
           I am dedicated to
          creating <br />
          comprehensive solutions for websites and web applications.
        </p>
      <Container>
       <Link to= "/project"> <Btn text = "Project"  /></Link>
       <DownloadBtn />
      </Container>
      </div>
    </section>
  );
}

export default Home;
