import React from "react";
import ActivityBar from "./activity_bar/ActivityBar";
import FileExplorer from "./file_explorer/FileExplorer";
import Editor from "./editor/Editor";

import "./Body.css";

function Body() {
    return (
        <>
            <div className="body">
                <ActivityBar className="activityBar"/>
                <FileExplorer className="fileExplorer"/>
                <Editor className="editor"/>
            </div>
        </>
    );
}

export default Body;
