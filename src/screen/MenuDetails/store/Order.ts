import { create } from "zustand/index";
import type {Cart, Order, OrderMenu} from "../../../dataTypes.ts";
import type {CustomizeAction} from "./action/CustomizeAction.ts";
import {customizeReducer} from "./reducer/CustomizeReducer.ts";
import {orderedReducer} from "./reducer/OrderedReducer.ts";
import type {OrderedAction} from "./action/OrderedAction.ts";

interface CustomizeQueryDispatcher {
  query?: OrderMenu;
  dispatch: (action: CustomizeAction) => void;
}

export const useCustomizeStore = create<CustomizeQueryDispatcher>((set) => ({
  query: undefined,
  dispatch: (action) =>
    set((state) => {
      return { query: customizeReducer(action, state.query) };
    }),
}));

interface OrderedQueryDispatcher {
  query: Order[];
  dispatcher: (action: OrderedAction) => void;
}
export const useOrderedStore = create<OrderedQueryDispatcher>((set) => ({
  query: [],
  dispatcher: (action: OrderedAction) =>
    set((state) => {
      return { query: orderedReducer(action, state.query) };
    })
}))


