import React from "react";

class Hello extends React.Component {
  //using static defaultProps. If from || bangs is not passed down with props the value we be preset with defaultProps
  static defaultProps = {
    from: "Anonymous",
    bangs: 7
  };

  render() {
    const { to, from, bangs } = this.props;
    //repeating ! how ever many times the props.bangs value is ie 4 !!!!
    let allBangs = "!".repeat(bangs);
    return (
      <div>
        <p>
          Hi {to} from {from}
          {allBangs}
        </p>
      </div>
    );
  }
}

export default Hello;
