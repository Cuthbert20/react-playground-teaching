import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, year: 0 };
    // this.makeTimer();
  }
  alertYear = this.alertYear.bind(this);
  makeTimer() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 2000);
  }
  alertYear() {
    let year = new Date().getFullYear();
    this.setState({ year });
    alert(`The year is ${year}`);
  }
  render() {
    console.log(this.props);
    // this.makeTimer();
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.state.num}</h1>
        <button
          style={{
            padding: "1rem",
            backgroundColor: "transparent",
            cursor: "pointer"
          }}
          onClick={this.alertYear}
        >
          Get Year
        </button>
      </div>
    );
  }
}

export default Rando;
