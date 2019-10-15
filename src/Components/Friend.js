import React from "react";
import "./Friend.css";

function Friend(props) {
  const { name, hobbies } = props;
  return (
    <div>
      {/* using ternary for className if name from props === "Spencer"*/}
      <h1 className={name === "Spencer" ? "me" : "not-me"}>My Friend {name}</h1>
      <p>
        Has the following hobbies{" "}
        {hobbies.map(val => {
          return <span key={val}>{val} </span>;
        })}
      </p>
    </div>
  );
}

export default Friend;
