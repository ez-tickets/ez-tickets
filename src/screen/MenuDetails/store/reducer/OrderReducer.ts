import type { Order } from "../../../../dataTypes.ts";
import {
  DECREASE_AMOUNT,
  DISPERSION,
  INCREASE_AMOUNT,
  INITIALIZE,
  type OrderAction,
  REPLACE,
} from "../action/OrderAction.ts";

export const orderReducer = (
  action: OrderAction,
  prev?: Order,
): Order | undefined => {
  const state = prev;

  switch (action.type) {
    case INITIALIZE:
      if (state === undefined) {
        return {
          product: { id: action.payload, amount: 1, price: action.price },
          options: [],
        };
      }
      break;
    case INCREASE_AMOUNT:
      if (state === undefined) {
        return state;
      }
      state.product.amount += 1;
      break;
    case DECREASE_AMOUNT:
      if (state === undefined) {
        return state;
      }
      state.product.amount -= 1;
      break;
    case REPLACE:
      if (state === undefined) {
        return state;
      }
      state.options = action.payload;
      break;

    case DISPERSION:
      return undefined;
    default: {
      // linting error DO NOT TOUCH!
      const _: never = action;
    }
  }
  return state;
};
