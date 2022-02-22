import React, { useState } from "react";

import react from "../../../images/file_images/react_icon.svg";
import html from "../../../images/file_images/html_icon.svg";
import css from "../../../images/file_images/css_icon.svg";
import js from "../../../images/file_images/js_icon.svg";

import "./FileExplorer.css";
import { useNavigate } from "react-router-dom";

function FileExplorer() {
    const [IsActive, setIsActive] = useState(true);
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
        <div className="fileExplorer">
            <div className="fileExplorer__head">EXPLORER</div>
            <div
                className="fileExplorer__workspace"
                onClick={() => {
                    setIsActive(!IsActive);
                }}
            >
                PORTFOLIO
            </div>
            {IsActive && (
                <div className="fileExplorer__fileItems">
                    {files.map((data) => {
                        return (
                            <div className="fileItem" onClick={() => naviagte(data.naviagte)}>
                                <img src={data.img} alt="" />
                                <div>{data.fileName}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default FileExplorer;
