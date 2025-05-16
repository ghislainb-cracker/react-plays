import React from "react";

export default function Joke(props){
    return(
        <>
        <h1>{props.head}</h1>
        <p>{props.body}</p>
        </>
        
    )
}