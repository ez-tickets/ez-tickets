import type { OrderProduct } from "@/types.ts";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  type OrderAction,
  RESET_PRODUCT,
  UPDATE_PRODUCT,
} from "../action/OrderAction.ts";

export const orderReducer = (
  action: OrderAction,
  prev: OrderProduct[],
): OrderProduct[] => {
  const state = prev ?? [];

  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case UPDATE_PRODUCT:
      return state.map((order) =>
        order.id === action.payload.id ? action.payload : order,
      );
    case DELETE_PRODUCT:
      return state.filter((order) => order.id !== action.payload);
    case RESET_PRODUCT:
      return [];
    default: {
      // linting error DO NOT TOUCH!
      const _: never = action;
    }
  }
  return state;
};
