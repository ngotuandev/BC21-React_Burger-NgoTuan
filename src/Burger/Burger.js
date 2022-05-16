import React, { Component } from "react";
import MenuBurgerTopping from "./MenuBurgerTopping";
import BurgerShape from "./BurgerShape";
import "./BaitapBurger.css";

export default class Burger extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-secondary mb-5">Burger Shop</h1>
        <div className="d-flex justify-content-around">
          <BurgerShape />
          <MenuBurgerTopping />
        </div>
      </div>
    );
  }
}
