import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../Pages/Home"
import About from "../Pages/About"
import Skills from "../Pages/Skills"
import Project from "../Pages/Project"
import Contact from "../Pages/Contact"


function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}   />
                <Route path="/about" element={<About />}   />
                <Route path="/skills" element={<Skills />}   />
                <Route path="/project" element={<Project />}   />
                <Route path="/contact" element={<Contact />}   />
            </Routes>
        </div>
    );
}

export default AllRoutes;