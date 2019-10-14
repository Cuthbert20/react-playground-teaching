import React from "react";

function Friend(props) {
  const { name, hobbies } = props;
  return (
    <div>
      <h1>My Friend {name}</h1>
      <p>
        Has the following hobbies{" "}
        {hobbies.map(val => {
          return <span>{val} </span>;
        })}
      </p>
    </div>
  );
}

export default Friend;
