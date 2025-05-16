import { button } from "framer-motion/client";
import React, {useState} from "react";

export default function Demo(){
    const [isFull, setisFull] = useState(true);

    function One(){
        setisFull(prev => !prev)
    }

    const result = isFull ? "image" : "noImage";


    return (
        <>
        <button onClick={One}>click</button>
        <h1>{result} </h1>
        </>
        
    )
}