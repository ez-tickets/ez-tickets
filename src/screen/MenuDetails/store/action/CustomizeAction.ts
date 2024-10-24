import type { SelectMenu, SelectOption } from "../../../../dataTypes.ts";

export const INITIALIZE = "initialize" as const;
export const initialize = (menuData: SelectMenu) => ({
  type: INITIALIZE,
  payload: menuData,
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
export const replaceOption = (options: SelectOption[]) => ({
  type: REPLACE,
  payload: options,
});

export const DISPERSION = "dispersion" as const;
export const dispersion = () => ({
  type: DISPERSION,
});

export const RESET_ID = "reset-id" as const;
export const resetID = () => ({
  type: RESET_ID,
});

export type CustomizeAction =
  | ReturnType<typeof initialize>
  | ReturnType<typeof increaseAmount>
  | ReturnType<typeof decreaseAmount>
  | ReturnType<typeof replaceOption>
  | ReturnType<typeof dispersion>
  | ReturnType<typeof resetID>;
