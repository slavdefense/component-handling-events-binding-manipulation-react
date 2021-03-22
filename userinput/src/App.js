import React, { Component } from "react";
import { UserInput, UserOutput } from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    Person: [
      { name: "Anson Lama", weight: "two hundred" },
      { name: "Ricky", weight: "one hundred" },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      Person: [
        { name: "Peter", weight: "two hundred" },
        { name: "caliboy", weight: "one hundred" },
      ],
    });
  };

  typeHandler = (event) => {
    this.setState({
      Person: [
        { name: event.target.value, weight: "two hundred" },
        { name: "caliboy", weight: "one hundred" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Hello</button>

        <UserOutput
          name={this.state.Person[0].name}
          weight={this.state.Person[0].weight}
        ></UserOutput>
        <UserOutput
          name={this.state.Person[1].name}
          weight={this.state.Person[1].weight}
        ></UserOutput>
        <UserInput changed={this.typeHandler}></UserInput>
      </div>
    );
  }
}

export default App;
