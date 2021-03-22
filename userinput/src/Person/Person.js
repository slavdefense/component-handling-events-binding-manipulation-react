import React from "react";
import "./Person.css";

const UserInput = (props) => {
  return (
    <div className="Input">
      <p></p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

const UserOutput = (props) => {
  return (
    <div className="Output">
      <p>Greetings! {props.name}</p>
      <p>I am from {props.city}</p>
    </div>
  );
};

export { UserInput, UserOutput };
