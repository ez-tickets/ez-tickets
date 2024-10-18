import { create } from "zustand/index";
import type { Order } from "../../../dataTypes.ts";
import type { OrderAction } from "./action/OrderAction.ts";
import { orderReducer } from "./reducer/OrderReducer.ts";

export interface OrderQueryDispatcher {
  query?: Order;
  dispatch: (action: OrderAction) => void;
}

export const useOrderStore = create<OrderQueryDispatcher>((set) => ({
  query: undefined,
  dispatch: (action) =>
    set((state) => {
      return { query: orderReducer(action, state.query) };
    }),
}));
