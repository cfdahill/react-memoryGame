import React from "react";
import "./Cards.css";

const Cards = props => (
    <div className="card">
        <img alt={props.name} src={props.image} />
    </div>
);

export default Cards;