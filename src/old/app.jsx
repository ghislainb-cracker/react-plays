import React from "react";
import "./app.css";

function Card(props) {
  return(
    <div className="container">
    <div className="img--container">
      <img src={props.imageUrl} />
    </div>
    
    <div className="details--container">
    <h4 className="location">{props.location} </h4>
    <h2 className="title">{props.title}</h2>
    <p className="date">{props.statDate} - {props.endDate}</p>
    <p>{props.description} </p>
    </div>
    
    </div>
    
  )
}

export default Card