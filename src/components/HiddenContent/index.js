import React from "react";
import style from "./hidden-content.module.css";

function HiddenContent() {
    const [display, setDisplay] = React.useState("block");

    const handleHide = (act) => {
        setDisplay("none");
    };
    const handleShow = (act) => {
        setDisplay("block");
    };
    console.log(display);
    return (
        <div>
            <button style={display === "block" ? {display: "none"} : {display: "block"}} onClick={handleShow}>
                show
            </button>
            <button style={{display: display}} onClick={handleHide}>
                hide
            </button>
            <div style={{display: display}}>
                hidden content
            </div>
        </div>
    );
}

export default HiddenContent;
