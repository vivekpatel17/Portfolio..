import classes from "./Navbar.module.css";
import logo from "../../images/vscode_icon.svg";

function Navbar(props) {
    const navitems = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

    return (
        <>
            <div className={classes.nav}>
                <div className={classes.navItems}>
                    <img
                        className={classes.logo}
                        src={logo}
                        alt="vscode logo"
                    />
                    {navitems.map((data) => (
                        <span>{data}</span>
                    ))}
                </div>

                <div className={classes.headerText}>
                    Vivek Kumar Patel - Visual Studio Code
                </div>

                <div className={classes.controlButtons}>
                    <span className={classes.yellowbutton}></span>
                    <span className={classes.redbutton}></span>
                    <span className={classes.greenbutton}></span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
