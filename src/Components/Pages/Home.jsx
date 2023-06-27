import React from "react";
import "../CSS/Home.css";

function Home(props) {
  return (
    <section className="home">
      <div className="homeTitle">
        <h2>Welcome to the world of Tilak,</h2>

        <p className="homeTag1">Your versatile Fullstack Web Developer!</p>
        <p className="homeTag2">
          As a fresh and ambitious Full Stack Web Developer, I am dedicated to
          creating <br />
          comprehensive solutions for websites and web applications.
        </p>
      </div>
    </section>
  );
}

export default Home;
