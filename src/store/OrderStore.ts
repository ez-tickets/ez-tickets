import type { OrderAction } from "@/store/action/OrderAction.ts";
import { orderReducer } from "@/store/reducer/OrderReducer.ts";
import type { OrderProduct } from "@/types.ts";
import { create } from "zustand/index";

type OrderQueryDispatcher = {
  orderQuery: OrderProduct[];
  orderDispatch: (action: OrderAction) => void;
};

export const useOrderStore = create<OrderQueryDispatcher>((set) => ({
  orderQuery: [],
  orderDispatch: (action) =>
    set((state) => {
      return { orderQuery: orderReducer(action, state.orderQuery) };
    }),
}));
