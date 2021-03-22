import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <p></p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

const UserOutput = (props) => {
  return (
    <div>
      <p>Hey there {props.name}</p>
      <p>Your weight is {props.weight}</p>
    </div>
  );
};

export { UserInput, UserOutput };
