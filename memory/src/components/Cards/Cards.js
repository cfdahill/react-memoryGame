import React from "react";
import "./Cards.css";

const Cards = props => (
    <div className="card">
        <div className = "img-container">
            <img id = {props.id} alt={props.name} attr={props.clicked.toString()} src={props.image} onClick={() => props.pickedAlf(props.id, props.clicked)}/>
        </div>
    </div>
);

export default Cards;