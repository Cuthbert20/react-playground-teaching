import React from "react";
import Machine from "./Components/Machine";
import "./App.css";
import Friend from "./Components/Friend";
import Hello from "./Components/Default_Props/Hello";
import foods from "./Components/ModuleExport/foods";
import GameSetState from "./Components/GameSetState";
import Rando from "./Components/Rando";
import Clicker from "./Components/Clicker";
import { choice, remove } from "./Components/ModuleExport/Helpers";

function App() {
  let fruit = choice(foods);
  console.log(fruit, "is the chosen One");
  console.log(`I'd like one ${fruit}, please.`);
  let remaing = remove(foods, fruit);
  //remaing will always be 1 less then the length of the original array because we are splicing one in the remove func
  console.log(remaing);
  console.log(`${remaing.length} is what is left`);
  return (
    <div className="App">
      {/* <Machine s1="X" s2="Y" s3="X" />
      <Machine s1="X" s2="X" s3="X" />
      <Machine s1="Y" s2="Y" s3="Y" />
      <Machine s1="X" s2="X" s3="Y" /> */}
      {/* <Friend name="Elton" hobbies={["Piano", "Singing", "Dancing"]} />
      <Friend name="Spencer" hobbies={["Coding", "Guitar", "Drawing"]} />
      <Hello to="Mick" from="Keith" bangs={4} />
      <Hello to="Aaron" bangs={1} />
      <Hello to="Jason" />
      <GameSetState />
      <Rando color="white" maxNum={17} />
      <br />
      <Clicker maxNum={10} /> */}
    </div>
  );
}

export default App;
