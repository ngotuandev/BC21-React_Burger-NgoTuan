import { INCREASE_DECREASE, PAYMENT } from "../constants/typeBurger";

export const changeAmount = (propsMenu, value) => {
  return {
    type: INCREASE_DECREASE,
    payload: propsMenu,
    value,
  };
};

export const handlePayment = () => {
  return {
    type: PAYMENT,
  };
};
