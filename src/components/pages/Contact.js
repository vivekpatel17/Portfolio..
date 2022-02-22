import React from "react";

import "./Contact.css";

function Contact() {
    return (
        <div className="contactpage">
            <div className="contactpage__social">
                <div>Reach Out Via Socials</div>
                <div>
                    <div>
                        <span>.socials </span>
                        {"{"}
                    </div>

                    <div>
                        &nbsp;&nbsp;&nbsp;website:{" "}
                        <a
                            href="https://vivekpatel17.github.io/Portfolio/"
                            target="blank"
                        >
                            portfolio
                        </a>
                        ;
                    </div>

                    <div>
                        &nbsp;&nbsp;&nbsp;email:{" "}
                        <a href="mailto:vivekpatelk0@gmail.com" target="blank">
                            vivekpatelk0@gmail.com
                        </a>
                        ;
                    </div>

                    <div>
                        &nbsp;&nbsp;&nbsp;github:{" "}
                        <a
                            href="https://github.com/vivekpatel17"
                            target="blank"
                        >
                            vivekpatel17
                        </a>
                        ;
                    </div>

                    <div>
                        &nbsp;&nbsp;&nbsp;linkedin:{" "}
                        <a
                            href="https://www.linkedin.com/in/vivek-k-patel/"
                            target="blank"
                        >
                            Vivek Patel
                        </a>
                        ;
                    </div>

                    <div>{"}"}</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
