import React, { Component } from "react";
import "../styles/componentStyles.css";

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      winner: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    let number = Math.floor(Math.random() * this.props.maxNum + 1);
    this.setState({ num: number });
    this.state.num === 7 && this.setState({ winner: true });
  }

  render() {
    const { num } = this.state;
    const style = { color: "white" };
    return (
      <div className="heading">
        <h1 style={style}>Number is {this.state.num}</h1>
        {num === 7 ? (
          <h1 style={style}>You Win!!!</h1>
        ) : (
          <button onClick={this.handleChange}>Random Number</button>
        )}
      </div>
    );
  }
}

export default Clicker;
