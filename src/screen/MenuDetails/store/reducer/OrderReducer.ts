import type { OrderMenu } from "../../../../dataTypes.ts";
import { ADD_SELECTED_ORDER, type OrderAction } from "../action/OrderAction.ts";
import { DISPERSION } from "../action/OrderedAction.ts";

export const orderReducer = (
  action: OrderAction,
  prev: OrderMenu[],
): OrderMenu[] => {
  const state = prev ?? [];

  switch (action.type) {
    case ADD_SELECTED_ORDER:
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
