import React, {useState} from "react";
import Button from "./Button.js";
import {smashCount, passCount} from "../App.jsx"

const EndPage = () =>{
    return(
        <div id="endRef" className="endContainer">     
            <div className="title">
                <p id="head">Results: </p>
                <p id="subHead"><span style={{color:"rgb(100,240,20)"}}>Smashed: </span> {smashCount} <span style={{color:"rgb(240,100,20)"}}>Passed</span> {passCount}</p>
            </div>

        </div>
    )
}

export default EndPage