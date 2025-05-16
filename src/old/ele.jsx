import React, { useState } from "react";

export default function Kae(props){
    const [on, setOn] = useState(props.on);
    const styles = {
            width: 100,
            height: 100,
            display: "inline-block",
            backgroundColor: on ? "black" : "white",
            marginRight: 30,
            borderWidtn: 3 ,
            borderStyle: "solid",
            borderColor: "black"
        }
        

        function toggler(id){
            setOn(prev => !prev)
            console.log(id)
        }
    return(
        <div 
        style={styles} 
        className="box" 
        onClick={() => toggler(props.id)}></div>
    )
} 