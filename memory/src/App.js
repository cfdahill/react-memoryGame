import React from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import alf from "./friends.json";
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
            <Title>ALF - the memory game </Title>
            <Score />
            <Cards />
        </Wrapper>
        );
    };
};

export default App;