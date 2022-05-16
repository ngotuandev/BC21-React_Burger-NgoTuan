import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaitapBurger.css";

class BurgerShape extends Component {
  renderBreadMid = () => {
    return Object.entries(this.props.burger).map(([propsItem, value]) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div className={propsItem} key={i}></div>);
      }
      return breadMid;
    });
  };

  render() {
    return (
      <div style={{ width: "60%" }}>
        <h3 className="mb-4">Burger</h3>
        <div className="breadTop"></div>
        {this.renderBreadMid()}
        <div className="breadBottom"></div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    burger: state.Burger.burger,
  };
};

export default connect(mapStateToProps, null)(BurgerShape);
