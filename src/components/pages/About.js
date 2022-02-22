import "./About.css";

function About() {
    return (
        <div className="aboutpage">
            {/* <img src={profilePic} alt="profile picture" /> */}

            <div className="aboutpage__abouttext">
                I live in <span>Jalaun, Uttar Pradesh.</span>
                <br />
                I make elegantly professional 🌍 web apps. I approach each
                problem as a <span>learning experience</span> that informs the
                rest of the project.
                <br /> <br />
                Who is visiting your site? What are they looking for? How do
                they find it? These are the pointer that I keep in mind while
                developing my Desktop-first responsive websites with{" "}
                <span>HTML, CSS and React</span>.
                <br /> <br />
                <span>
                    I am always experimenting, always learning, and never bored.
                </span>
            </div>
        </div>
    );
}

export default About;
