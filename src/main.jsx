import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import App from "./app";
import One from "./one";
import Two from "./two";
import Messenger from "./jokes";
// import Joke from "./joke1";
// import jokeA from "./jokeA";

export default function Hello(){
    const [user, setUser] = useState("John Doe");
    return (
        <>
        <App/>
        <One  user={user}/>
        <Two  user={user}/>
        <Messenger/>
        {/* <Joke head={jokeA.joke} body={jokeA.setup}/> */}
        </>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello/>);