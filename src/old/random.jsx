import React, {useState} from "react";
import info from "./data";

export default function One(){
const [img, setimg] = useState("")

function change(){
    const data = info
    const random = Math.floor(Math.random() * data.length);
    setimg(data[random].imageUrl);
}
return(
        <>
        <button onClick={change}>Display</button>
        <img src={img}></img>
         
        </>
    )
}