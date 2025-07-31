import React from "react";
import ReactDOM from "react-dom/client"
import One from "./one";
import Two from "./two";

export default function Sedo(){
    return (
        <>
        <One/>
        <Two/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Sedo/>);