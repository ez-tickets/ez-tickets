import type { OrderProduct } from "@/types.ts";

export const ADD_PRODUCT = "add-product" as const;
export const addProduct = (orderProd: OrderProduct) => ({
  type: ADD_PRODUCT,
  payload: orderProd,
});

export const UPDATE_PRODUCT = "update-product" as const;
export const updateProduct = (updatedProd: OrderProduct) => ({
  type: UPDATE_PRODUCT,
  payload: updatedProd,
});

export const DELETE_PRODUCT = "delete-product" as const;
export const deleteProduct = (id: string) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export const RESET_PRODUCT = "reset-product" as const;
export const resetProduct = () => ({
  type: RESET_PRODUCT,
});

export type OrderAction =
  | ReturnType<typeof addProduct>
  | ReturnType<typeof updateProduct>
  | ReturnType<typeof deleteProduct>
  | ReturnType<typeof resetProduct>;
