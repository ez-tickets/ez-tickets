import React, { Fragment } from "react";
import { useOrderStore } from "@/screen/MenuDetails/store/Order.ts";
import { orderTotalStyle } from "@/screen/OrderConfirmation/components/style/OrderTotal.css.ts";

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
      <p className={orderTotalStyle.total}>
        合計　{totalPrice.toLocaleString()}
      </p>
    </Fragment>
  );
}

export default OrderTotal;
