import type { OrderProduct } from "@/dataTypes.ts";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  type OrderAction,
} from "../action/OrderAction.ts";

export const orderReducer = (
  action: OrderAction,
  prev: OrderProduct[],
): OrderProduct[] => {
  const state = prev ?? [];

  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case DELETE_PRODUCT:
      return state.filter((order) => order.id !== action.payload);
    default: {
      // linting error DO NOT TOUCH!
      const _: never = action;
    }
  }
  return state;
};
