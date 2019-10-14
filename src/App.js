import React from "react";
import Machine from "./Components/Machine";
import "./App.css";
import Friend from "./Components/Friend";

function App() {
  return (
    <div className="App">
      {/* <Machine s1="X" s2="Y" s3="X" />
      <Machine s1="X" s2="X" s3="X" />
      <Machine s1="Y" s2="Y" s3="Y" />
      <Machine s1="X" s2="X" s3="Y" /> */}
      <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} />
      <Friend name="Spencer" hobbies={["Coding", "Guitar", "Drawing"]} />
    </div>
  );
}

export default App;
