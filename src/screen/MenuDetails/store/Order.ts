import { create } from "zustand/index";
import type { Cart, Order, OrderMenu } from "../../../dataTypes.ts";
import type { CustomizeAction } from "./action/CustomizeAction.ts";
import type { OrderAction } from "./action/OrderAction.ts";
import type { OrderedAction } from "./action/OrderedAction.ts";
import { customizeReducer } from "./reducer/CustomizeReducer.ts";
import { orderReducer } from "./reducer/OrderReducer.ts";
import { orderedReducer } from "./reducer/OrderedReducer.ts";

interface CustomizeQueryDispatcher {
  query?: OrderMenu;
  customizeDispatch: (action: CustomizeAction) => void;
}

export const useCustomizeStore = create<CustomizeQueryDispatcher>((set) => ({
  query: undefined,
  customizeDispatch: (action) =>
    set((state) => {
      return { query: customizeReducer(action, state.query) };
    }),
}));

interface OrderQueryDispatcher {
  query: OrderMenu[];
  orderDispatch: (action: OrderAction) => void;
}

export const useOrderStore = create<OrderQueryDispatcher>((set) => ({
  query: [],
  orderDispatch: (action) =>
    set((state) => {
      return { query: orderReducer(action, state.query) };
    }),
}));

interface OrderedQueryDispatcher {
  query: Order[];
  orderedDispatch: (action: OrderedAction) => void;
}

export const useOrderedStore = create<OrderedQueryDispatcher>((set) => ({
  query: [],
  orderedDispatch: (action: OrderedAction) =>
    set((state) => {
      return { query: orderedReducer(action, state.query) };
    }),
}));
