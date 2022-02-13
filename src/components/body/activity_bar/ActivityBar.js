import React from "react";
import { useNavigate } from "react-router-dom";

import FilesIcon from "../../../icons/FilesIcon";
import CodeIcon from "../../../icons/CodeIcon";
import MailIcon from "../../../icons/MailIcon";
import AccountIcon from "../../../icons/AcountIcon";
import SettingIcon from "../../../icons/SettingIcon";

import './ActivityBar.css';

function ActivityBar() {
const naviagte = useNavigate();

    return (
        <>
            <div className="activityBar">
                <div className="activityBar__up">
                        <div onClick={() => naviagte("/")}>
                            <FilesIcon />
                        </div>
                        <div onClick={() => naviagte("project")}>
                            <CodeIcon />
                        </div>
                        <div onClick={() => naviagte("contact")}>
                            <MailIcon />
                        </div>
                        <div onClick={() => naviagte("about")}>
                            <AccountIcon />
                        </div>
                </div>
                <div className="activityBar__down">
                    <div>
                        <SettingIcon />
                    </div>

                </div>
            </div>
        </>
    );
}

export default ActivityBar;