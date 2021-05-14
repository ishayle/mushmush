import { Order } from "./model/order";
import { ActionReducerMap } from "@ngrx/store";
import { dealerReducer } from "./reducers/dealer.reducer";
import { productReducer } from "./reducers/product.reducer";
import { orderReducer } from "./reducers/order.reducer";

export interface AppState {
  productNames: string[];
  dealerNames: string[];
  orders: Order[];
}
export const reducers: ActionReducerMap<AppState> = {
  dealerNames: dealerReducer,
  productNames: productReducer,
  orders: orderReducer
};
