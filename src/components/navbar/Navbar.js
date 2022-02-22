import "./Navbar.css";
import logo from "../../images/vscode_icon.svg";

function Navbar(props) {
    const navitems = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

    return (
        <>
            <div className="nav">
                <div className="nav__navItems">
                    <img
                        className="navItems__logo"
                        src={logo}
                        alt="vscode logo"
                    />
                    {navitems.map((data) => (
                        <span>{data}</span>
                    ))}
                </div>

                <div className="nav__headerText">
                    Vivek Kumar Patel - Visual Studio Code
                </div>

                <div className="nav__ctrlbtn">
                    <span className="ctrlbtn__yellow"></span>
                    <span className="ctrlbtn__red"></span>
                    <span className="ctrlbtn__green"></span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
