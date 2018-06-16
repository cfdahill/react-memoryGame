import React from "react";
import "./Score.css";

const Score = props => (
    <div className="score">
        <h2>Score: {props.score}</h2>
        <h2>Best Score: {props.best}</h2>
    </div>
);

export default Score;