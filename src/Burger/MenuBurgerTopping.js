import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREASE_DECREASE } from "../redux/constants/typeBurger";
import { increase, decrease } from "../redux/constants/numberBurger";
import { changeAmount, handlePayment } from "../redux/actions/burgerAction";

class MenuBurgerTopping extends Component {
  renderMenu = () => {
    let { burger, menu } = this.props;
    return Object.entries(menu).map(([propsMenu, value], index) => {
      let menuBurger = [];
      for (let i = 0; i < 1; i++) {
        menuBurger.push(
          <tr key={i}>
            <td>{propsMenu}</td>
            <td>
              <button
                className="btn btn-success mr-1"
                onClick={() => {
                  this.props.inDecreaseAmount(propsMenu, increase);
                }}
              >
                +
              </button>
              {burger[propsMenu]}
              <button
                className="btn btn-danger ml-1"
                onClick={() => {
                  this.props.inDecreaseAmount(propsMenu, decrease);
                }}
              >
                -
              </button>
            </td>
            <td>{value}</td>
          </tr>
        );
      }
      return menuBurger;
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-left">Chọn thức ăn</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th className="px-5">Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>{this.renderMenu()}</tbody>
          <tfoot>
            <tr>
              <td colSpan={1}></td>
              <th>Tổng tiền:</th>
              <th>{this.props.total}</th>
            </tr>
          </tfoot>
        </table>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "170px" }}
          onClick={() => {
            this.props.payment();
          }}
        >
          Thanh Toán
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    menu: state.Burger.menu,
    burger: state.Burger.burger,
    total: state.Burger.total,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    inDecreaseAmount: (propsMenu, value) => {
      dispatch(changeAmount(propsMenu, value));
    },
    payment: () => {
      dispatch(handlePayment());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBurgerTopping);
