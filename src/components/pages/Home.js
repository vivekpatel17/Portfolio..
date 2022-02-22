import React from "react";

import "./Home.css";

function Home() {
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
                        {/* <button onClick={handleProjectClick}>View Work</button>
            <button onClick={handleContactClick}>Contact Me</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
