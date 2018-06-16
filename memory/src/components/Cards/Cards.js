import React from "react";
import "./Cards.css";
// import alf from "../../alf.json"

const Cards = props => (
    <div className="card">
        <div className = "img-container">
            <img id = {props.id} alt={props.name} src={props.image} onClick={() => props.handleClick(props.id, props.clicked)}/>
        </div>
    </div>
);

// class Cards extends React.Component {
//     state = {
//         alf: alf,
//         clicked: false
//     }
//     handleClick = (id, clicked) => {
//         console.log(`clicked on ${id} and ${clicked}`);
//         if (!this.state.clicked) {
//             this.setState({clicked: true});
//         }
//     }

//     render() {
//         return(
//             <div>
//             {this.state.alf.map( alf => (
//         <div key={alf.id} className="card">
//          <div className = "img-container">
//              <img id = {alf.id} alt={alf.name} src={alf.image} onClick={() => this.handleClick(alf.id, this.state.clicked)}/>
//          </div>
//      </div>
// ))}
// </div>
//         )}
// }

export default Cards;