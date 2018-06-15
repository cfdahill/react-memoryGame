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
        clicked: false
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

pickedAlf = (id, clicked) => {
    console.log(`clicked on ${id} and ${clicked}`);
    // const gordon = this.state.alf.filter(alf => alf.id === id);
    // console.log(gordon);
    if(!clicked){
        this.setState({clicked: true});
        this.setState({score: this.state.score+1});
        this.highScore(this.state.score);
    } else {
        this.setState({score: 0,
                        alf: shumway,
                        clicked: false});
    }
}

    render() {
        return (
            <Wrapper>
                <Title>Gordon Shumway - the memory game </Title>
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
                        pickedAlf={this.pickedAlf}
                        clicked={this.state.clicked}
                    />
                ))}
            </Wrapper>
        );
    };
};

export default App;