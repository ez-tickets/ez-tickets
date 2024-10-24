import type { OrderMenu } from "../../../../dataTypes.ts";
import {
  type CustomizeAction,
  DECREASE_AMOUNT,
  DISPERSION,
  INCREASE_AMOUNT,
  INITIALIZE,
  REPLACE,
  RESET_ID,
} from "../action/CustomizeAction.ts";

let orderID = 1;

export const customizeReducer = (
  action: CustomizeAction,
  prev?: OrderMenu,
): OrderMenu | undefined => {
  const state = prev;

  switch (action.type) {
    case INITIALIZE:
      if (state === undefined) {
        return {
          product: {
            id: orderID++,
            name: action.payload.name,
            price: action.payload.price,
            amount: 1,
          },
          options:
            action.payload.options.map((option) => ({
              ...option,
              amount: 0,
            })) || [],
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
    case RESET_ID:
      orderID = 1;
      return;
    default: {
      // linting error DO NOT TOUCH!
      const _: never = action;
    }
  }
  return state;
};
