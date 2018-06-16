import React from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import shumway from "./alf.json";
import shuffleArray from "./util/shuffleArray";
import "./App.css";

class App extends React.Component {
    state = {
        alf: shumway,
        score: 0,
        bestScore: 0,
        picked: [],
        comment: ""
    }

    componentWillMount = () => {
        shuffleArray(this.state.alf);
    }

    componentWillUpdate = () => {
        shuffleArray(this.state.alf);
    }

    highScore = (score) => {
        if(this.state.bestScore === score) {
            this.setState({bestScore: this.state.bestScore+1});
        }
    }

    handleClick = (id) => {
    console.log(`clicked on ${id}`);
    const gordon = this.state.alf.filter(alf => alf.id === id);
    console.log(gordon);

        if(!this.state.picked.includes(id)){
            this.state.picked.push(id)
            this.setState({score: this.state.score+1,
                           comment: "Brilliant! This and the letter 'I' in one day."});
            console.log(this.picked);
            if(this.state.score > 11) {
                this.setState({comment: "Grease fire!  Grease fire!  Never mind the curtains, put me out.",
                                score: 0,
                                picked: []});
            }
            this.highScore(this.state.score);
        } else {
            this.setState({score: 0,
                        comment: "Ha!  I kill me!",
                        picked: []});
            console.log(this.picked);
    }
}

    render() {
        return (
            <Wrapper>
                <Title>Gordon Shumway - the memory game </Title>
                <div className="commentary"><h2>{this.state.comment}</h2></div>
                <Score 
                    score={this.state.score}
                    best={this.state.bestScore}    
                />
                {this.state.alf.map(alf => (
                    <Cards 
                        key={alf.id}
                        id={alf.id}
                        image={alf.image}
                        name={alf.name}
                        handleClick={this.handleClick}
                        clicked={this.state.clicked}
                    />
                ))}
            </Wrapper>
        );
    };
};

export default App;