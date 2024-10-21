import { create } from "zustand/index";
import type { Cart, Order, OrderMenu } from "../../../dataTypes.ts";
import type { CustomizeAction } from "./action/CustomizeAction.ts";
import type { OrderAction } from "./action/OrderAction.ts";
import type { OrderedAction } from "./action/OrderedAction.ts";
import { customizeReducer } from "./reducer/CustomizeReducer.ts";
import { orderReducer } from "./reducer/OrderReducer.ts";
import { orderedReducer } from "./reducer/OrderedReducer.ts";

interface CustomizeQueryDispatcher {
  customizeQuery?: OrderMenu;
  customizeDispatch: (action: CustomizeAction) => void;
}

export const useCustomizeStore = create<CustomizeQueryDispatcher>((set) => ({
  customizeQuery: undefined,
  customizeDispatch: (action) =>
    set((state) => {
      return { customizeQuery: customizeReducer(action, state.customizeQuery) };
    }),
}));

interface OrderQueryDispatcher {
  orderQuery: OrderMenu[];
  orderDispatch: (action: OrderAction) => void;
}

export const useOrderStore = create<OrderQueryDispatcher>((set) => ({
  orderQuery: [],
  orderDispatch: (action) =>
    set((state) => {
      return { orderQuery: orderReducer(action, state.orderQuery) };
    }),
}));

interface OrderedQueryDispatcher {
  orderedQuery: Order[];
  orderedDispatch: (action: OrderedAction) => void;
}

export const useOrderedStore = create<OrderedQueryDispatcher>((set) => ({
  orderedQuery: [],
  orderedDispatch: (action: OrderedAction) =>
    set((state) => {
      return { orderedQuery: orderedReducer(action, state.orderedQuery) };
    }),
}));
