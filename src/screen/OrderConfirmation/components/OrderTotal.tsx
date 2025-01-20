import { orderTotalStyle } from "@/screen/OrderConfirmation/components/style/OrderTotal.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import React, { Fragment, useEffect, useState } from "react";

function OrderTotal() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { orderQuery } = useOrderStore();

  useEffect(() => {
    const total = orderQuery.reduce((acc, cur) => {
      return acc + cur.price * cur.amount;
    }, 0);

    setTotalPrice(total);
  }, [orderQuery]);

  return (
    <Fragment>
      <p className={orderTotalStyle.total}>
        合計 {totalPrice.toLocaleString()}
      </p>
    </Fragment>
  );
}

export default OrderTotal;
