import React from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import shumway from "./alf.json";
import "./App.css";

class App extends React.Component {
    state = {
        alf: shumway,
        score: 0,
        bestScore: 0,
        clicked: false
    }

pickedAlf = id => {
    console.log(`clicked on ${this.state.alf[0].id}`);
    // const gordon = this.clicked.filter(alf => alf.id === id);
    // if(!this.clicked){
    //     this.clicked.setState(true);
    //     this.setState({score: this.state.score+1});
    // } else {
    //     this.setState({score: 0,
    //                     alf: shumway});
    // }
}

highScore = () => {
    if(this.state.score > this.state.bestScore) {
        this.bestScore.setState({bestScore: this.state.score});
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
                        action={this.pickedAlf}
                    />
                ))}
            </Wrapper>
        );
    };
};

export default App;