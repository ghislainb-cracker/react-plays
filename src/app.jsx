import React, { useState } from "react"
import thingArr from "./thingArr"
import "./styles.css"
import Box from "./box"
export default function App(){

    const [done, setDone] = useState(thingArr)
    
    function toogle(id){
        
        setDone(prevThing => {
            return prevThing.map((thing) => {
                return thing.id === id ? {...thing, on: !thing.on} : thing
            })
        })
    }
    const Display = done.map(thing => (
    <Box 
    className="box" 
    key={thing.id} 
    on={thing.on}  
    toggle={()=> toogle(thing.id)} />
))

console.log(Display)
    return (
        <main>
            {Display}
        </main>
        
    )
}