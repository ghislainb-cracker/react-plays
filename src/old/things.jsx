import React,{useState} from "react";

export default function Thing(){
    const [things, setThings] = useState(["Thing 1", "Thing 2", "Thing 3"]);

    function addItem(){
        setThings(prev => {
            return(
                [...prev, `Thing ${prev.length + 1}`]
            )
        })
    }

    const item = things.map(thing => <h3 key={thing}>{thing}</h3>)
    return(
        <>
        <button onClick={addItem}>ADD ITEM</button>
        {item}
        </>
    )
}