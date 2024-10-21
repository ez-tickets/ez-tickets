import {
  DISPERSION, ORDER_ADD, type OrderedAction,
} from "../action/OrderedAction.ts";
import type {Order} from "../../../../dataTypes.ts";


export const orderedReducer = (
  action: OrderedAction,
  prev: Order[],
):Order[] => {
  const state = prev ?? [];

  switch (action.type) {
    case ORDER_ADD:
      return [...state, action.payload];
    case DISPERSION:
      return [];
    default: {
      // linting error DO NOT TOUCH!
      const _: never = action;
    }
  }
  return state;
};
