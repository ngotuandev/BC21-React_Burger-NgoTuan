import { INCREASE_DECREASE } from "../constants/typeBurger";

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

    default:
      return state;
  }
};
