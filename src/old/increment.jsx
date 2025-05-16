import React, {useState} from "react";

export default function Click(){
    const [data, setdata] = useState(0);

    function add(){
        setdata(prevCount => prevCount + 1)
    }

    function sub(){
        setdata(prevCount => prevCount - 1)
    }
    return (
        <div>
        <button onClick={add}>Increase</button>
        <h3>{data}</h3>
        <button onClick={sub}>Decrease</button>
        </div>
    )
}