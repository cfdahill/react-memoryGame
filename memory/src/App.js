import React from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import alf from "./alf.json";
import "./App.css";

class App extends React.Component {
    state = {
        alf
    }


// pickedAlf = id => {
//     const alf = this.state.alf.
// }

    render() {
    return (
        <Wrapper>
            <Title>Gordon Shumway - the memory game </Title>
            <Score />
            {this.state.alf.map(alf => (
                <Cards 
                    key={alf.id}
                    id={alf.id}
                    image={alf.image}
                    name={alf.name}
                />
            ))}
        </Wrapper>
        );
    };
};

export default App;