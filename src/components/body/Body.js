import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Project from "../pages/Project";
import ActivityBar from "./activity_bar/ActivityBar";

import "./Body.css";
import FileExplorer from "./file_explorer/FileExplorer";

function Body() {
    return (
        <>
            <div className="body">
                <ActivityBar />
                <FileExplorer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="project" element={<Project />} />
                </Routes>
            </div>
        </>
    );
}

export default Body;
