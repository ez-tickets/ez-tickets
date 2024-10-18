import type { ProdOptionOrder } from "../../../../dataTypes.ts";

export const INITIALIZE = "initialize" as const;
export const initialize = (id: string, price: number) => ({
  type: INITIALIZE,
  payload: id,
  price: price,
});

export const INCREASE_AMOUNT = "increase-amount" as const;
export const increaseAmount = () => ({
  type: INCREASE_AMOUNT,
});

export const DECREASE_AMOUNT = "decrease-amount" as const;
export const decreaseAmount = () => ({
  type: DECREASE_AMOUNT,
});

export const REPLACE = "replace" as const;
export const replaceOption = (options: ProdOptionOrder[]) => ({
  type: REPLACE,
  payload: options,
});

export const DISPERSION = "dispersion" as const;
export const dispersion = () => ({
  type: DISPERSION,
});

export type OrderAction =
  | ReturnType<typeof initialize>
  | ReturnType<typeof increaseAmount>
  | ReturnType<typeof decreaseAmount>
  | ReturnType<typeof replaceOption>
  | ReturnType<typeof dispersion>;
