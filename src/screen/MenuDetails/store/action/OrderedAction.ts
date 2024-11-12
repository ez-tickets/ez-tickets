import type { Order } from "@/dataTypes.ts";

export const ORDER_ADD = "order-add" as const;
export const orderAdd = (order: Order) => ({
  type: ORDER_ADD,
  payload: order,
});

export const DISPERSION = "dispersion" as const;
export const dispersion = () => ({
  type: DISPERSION,
});

export type OrderedAction =
  | ReturnType<typeof orderAdd>
  | ReturnType<typeof dispersion>;
