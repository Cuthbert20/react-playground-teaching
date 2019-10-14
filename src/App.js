import React from "react";
import Machine from "./Components/Machine";
import "./App.css";
import Friend from "./Components/Friend";
import Hello from "./Components/Default_Props/Hello";

function App() {
  return (
    <div className="App">
      {/* <Machine s1="X" s2="Y" s3="X" />
      <Machine s1="X" s2="X" s3="X" />
      <Machine s1="Y" s2="Y" s3="Y" />
      <Machine s1="X" s2="X" s3="Y" /> */}
      <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} />
      <Friend name="Spencer" hobbies={["Coding", "Guitar", "Drawing"]} />
      <Hello to="Mick" from="Keith" bangs={4} />
      <Hello to="Aaron" bangs={1} />
      <Hello to="Jason" />
    </div>
  );
}

export default App;
