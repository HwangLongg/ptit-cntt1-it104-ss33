import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { notificationReducer } from "./notificationReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  notification: notificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
