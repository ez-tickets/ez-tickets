import React, { Fragment } from "react";
import { useOrderStore } from "../../MenuDetails/store/Order.ts";
import { orderBottomNavStyle } from "./style/OrderBottomNav.css.ts";

function OrderTotal() {
  const { orderQuery } = useOrderStore();
  let totalPrice = 0;

  orderQuery.map((order) => {
    const basePrice = order.product.price * order.product.amount;
    totalPrice += order.options.reduce(
      (acc, option) => acc + option.price * option.amount,
      basePrice,
    );
  });

  return (
    <Fragment>
      <p className={orderBottomNavStyle.total}>
        合計　{totalPrice.toLocaleString()}
      </p>
    </Fragment>
  );
}

export default OrderTotal;
