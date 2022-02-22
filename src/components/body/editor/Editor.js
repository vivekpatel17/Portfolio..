import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./Editor.css";

import react from "../../../images/file_images/react_icon.svg";
import html from "../../../images/file_images/html_icon.svg";
import css from "../../../images/file_images/css_icon.svg";
import js from "../../../images/file_images/js_icon.svg";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Project from "../../pages/Project";

function Editor(props) {
    const naviagte = useNavigate();
    const files = [
        {
            img: react,
            fileName: "home.jsx",
            naviagte: "/",
        },
        {
            img: html,
            fileName: "about.css",
            naviagte: "about",
        },
        {
            img: css,
            fileName: "contact.css",
            naviagte: "contact",
        },
        {
            img: js,
            fileName: "project.js",
            naviagte: "project",
        },
    ];

    return (
        <div className="editor">
            <div className="editor__header">
                {files.map((file) => {
                    return (
                        <div
                            className="fileItem"
                            onClick={() => naviagte(file.naviagte)}
                        >
                            <img src={file.img} alt="" />
                            <div>{file.fileName}</div>
                        </div>
                    );
                })}
            </div>

            <div className="editor__files">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="project" element={<Project />} />
                </Routes>
            </div>
        </div>
    );
}

export default Editor;
