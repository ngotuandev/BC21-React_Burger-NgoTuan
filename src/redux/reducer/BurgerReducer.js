import { INCREASE_DECREASE, PAYMENT } from "../constants/typeBurger";
import swal from "sweetalert";

const initialState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: {
    salad: 10,
    cheese: 15,
    beef: 20,
  },
  total: 45,
};

export const BurgerReducer = (
  state = initialState,
  { type, payload, value }
) => {
  switch (type) {
    case INCREASE_DECREASE: {
      let burgerNew = { ...state.burger };
      let totalNew = state.total;
      if (value) {
        burgerNew[payload] += 1;
        totalNew += (burgerNew[payload] - 1) * state.menu[payload];
        if (burgerNew[payload] === 1) {
          totalNew += burgerNew[payload] * state.menu[payload];
        }
      } else {
        if (burgerNew[payload] > 0) {
          burgerNew[payload] -= 1;
          totalNew -= burgerNew[payload] * state.menu[payload];
          if (burgerNew[payload] === 0) {
            totalNew -= state.menu[payload];
          }
        }
      }
      state.burger = burgerNew;
      state.total = totalNew;
      return { ...state };
    }
    case PAYMENT: {
      swal("Thanh toán thành công", "Chúc bạn ăn ngon miệng!", "success");
      state.burger = { salad: 1, cheese: 1, beef: 1 };
      state.total = 45;

      return { ...state };
    }

    default:
      return state;
  }
};
