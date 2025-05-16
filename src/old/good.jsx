import React, { useState } from "react";
import Data from "./data";

export default function Good(){
    const [one, setOne] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });
    

    const [array, setarray] = useState(Data);

    function changeImage(){
        const memesArray = array;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].imageUrl;
        console.log(url);
        setOne(prev => ({
            ...prev,
            randomImage: url,
        }))
        
    }
    const styles = {
        // margin: 100 0 0 50, 
        width: 200,
        height: 250,
    }
    return(
        <>
        <button onClick={changeImage}>Randomize Image</button>
        <img src={one.randomImage} style={styles} />
        </>
    )
}