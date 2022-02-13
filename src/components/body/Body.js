import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import ActivityBar from "./activity_bar/ActivityBar";

import "./Body.css";

function Body() {
    return (
        <>
            <div className="body">
                <ActivityBar />
                {/* <About /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default Body;
