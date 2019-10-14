import React from "react";

function Machine(props) {
  const { s1, s2, s3 } = props;
  const winner = s1 === s2 && s2 === s3;
  return (
    <div>
      <h1>Slot Machine</h1>
      <p>
        {s1} {s2} {s3}
      </p>
      <p>{winner ? "YOUR A WINNER" : "Sorry you lost this time"}</p>
    </div>
  );
}
export default Machine;
