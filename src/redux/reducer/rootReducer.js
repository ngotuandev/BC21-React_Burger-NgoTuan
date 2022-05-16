import { combineReducers } from "redux";
import { BurgerReducer } from "./BurgerReducer";

export const rootReducer = combineReducers({
  Burger: BurgerReducer,
});
