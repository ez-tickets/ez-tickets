import type { OrderMenu } from "../../../../dataTypes.ts";

export const ADD_SELECTED_ORDER = "add-selected-order" as const;
export const addSelectedOrder = (orderMenu: OrderMenu) => ({
  type: ADD_SELECTED_ORDER,
  payload: orderMenu,
});

export const DISPERSION = "dispersion" as const;
export const dispersion = () => ({
  type: DISPERSION,
});

export type OrderAction =
  | ReturnType<typeof addSelectedOrder>
  | ReturnType<typeof dispersion>;
