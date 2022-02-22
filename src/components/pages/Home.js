import React from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="homepage">
            <div className="homepage__background">I MAKE WEBSITE</div>

            <div className="homepage__foreground">
                <div className="foreground__intro">
                    <div>Vivek Kumar Patel</div>

                    <div className="foreground__typewriter">
                        <h1>Frontend Web Developer</h1>
                    </div>

                    <div className="foreground__btn">
                        <button onClick={() => navigate("project")}>
                            View Work
                        </button>
                        <button onClick={() => navigate("contact")}>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
