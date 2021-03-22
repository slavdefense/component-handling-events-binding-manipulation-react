import React, { Component } from "react";
import { UserInput, UserOutput } from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    Person: [
      { name: "Boss", city: "Los Angeles,CA" },
      { name: "Sagun Shrestha", city: "Los Angeles,CA" },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      Person: [
        { name: "Boss", city: "two hundred" },
        { name: "Anywhere", city: "United States" },
      ],
    });
  };

  typeHandler = (event) => {
    this.setState({
      Person: [
        { name: event.target.value, city: "" },
        { name: "", city: "" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Click me!</button>

        <UserOutput
          name={this.state.Person[0].name}
          city={this.state.Person[0].city}
        ></UserOutput>
        <UserOutput
          name={this.state.Person[1].name}
          city={this.state.Person[1].city}
        ></UserOutput>
        <UserInput changed={this.typeHandler}></UserInput>
      </div>
    );
  }
}

export default App;
