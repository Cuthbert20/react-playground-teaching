import React, { Component } from "react";

class GameSetState extends Component {
  constructor() {
    super();
    this.state = {
      score: 99,
      gameOver: false
    };
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>Your Score Is: {this.state.score}</h1>
      </div>
    );
  }
}

export default GameSetState;
