import React, {useState} from "react";
import "./Button.js";
import "../startMenu.css";
import Button from "./Button.js";

// TODO
// Start button, when pressed fades out StartPage and shows main page
const StartPage = () => {
    return (
        <div id="startRef" className="startContainer">
            <div className="title">
                <p id="head">My Little Pony</p>
                <p id="subHead"><span style={{color:"rgb(100,240,20)"}}>Smash</span> or <span style={{color:"rgb(240,100,20)"}}>Pass</span></p>
            </div>

        </div>
    )
}

export default StartPage