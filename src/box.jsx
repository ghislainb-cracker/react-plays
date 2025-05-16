import React from "react";

export default function Box(props){
    // const [on, setOn] = useState(props.on)
    const styles = {
        backgroundColor: props.on ? "beige" : "black"
    }
    // function handle(id){
    //     setOn(prev => !prev)
    //     console.log(id)
    // }
    
    return(
        <div className="box" style={styles} onClick={props.toggle}></div>
    )
}