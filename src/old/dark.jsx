import React, { useState } from "react";
import boxes from "./boxes";
import Kae from "./ele";

export default function Dark(props){
    const [boxing, setBoxing] = useState(boxes);
    function toogle(id){
        console.log(id);
    }
    
    

    const display = boxing.map(box => (
        <Kae 
          key={box.id} 
          on={box.on}
          id={box.id}
        />
    ))
    return(
        <>
        {display}
        </>
    )
}