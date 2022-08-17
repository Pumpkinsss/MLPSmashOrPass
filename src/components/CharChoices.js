import React from "react"
import {trackExport, charNames} from "../App"
import "../index.css"

const CharChoice = () => {
    var divStyle = {
        display: "flex",
        flexWrap: "wrap",
        color: "white",
        textAlign: "center",
        border: "white 5px solid",
        width: "60vw",
        margin: "20px auto",
        backgroundColor: "#2b2e36c9",
    }

    var pStyle = {
        flexBasis: "20vw",
    }

    var charChoiceContent = []

    for (var i = 0; i < charNames.length; i++){
        var toConcat
        if (trackExport[i + 1]){
            toConcat = <>{charNames[i]}: <span style={{color: "rgb(100,240,20)"}}>Smashed</span></>
        }else{
            toConcat = <>{charNames[i]}: <span style={{color: "rgb(240,100,20)"}}>Passed</span></>
        }

        charChoiceContent = charChoiceContent.concat(toConcat)
    }

    return(
        <div style={divStyle}>
            {charChoiceContent.map(choice => (
                <p style={pStyle}>{choice}</p>
            ))}
        </div>
    )
}

export default CharChoice