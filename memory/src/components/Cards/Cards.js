import React from "react";
import "./Cards.css";

const Cards = props => (
    <div className="card">
        <div className = "img-container">
            <img id = {props.id} alt={props.name} src={props.image} onClick={props.action}/>
        </div>
    </div>
);

export default Cards;