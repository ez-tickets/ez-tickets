import { Fragment, useState } from "react";
import { useOrderStore } from "../store/Order.ts";
import { priceTotalViewStyle } from "./style/PriceTotalView.css.ts";

function PriceTotalView() {
  const [totalPrice, setTotalPrice] = useState<number>();

  useOrderStore.subscribe((state, _) => {
    if (state.query === undefined) return;
    const basePrice = state.query.product.price * state.query.product.amount;
    const totalPrice = state.query.options.reduce(
      (acc, price) => acc + price.price * price.amount,
      basePrice,
    );
    setTotalPrice(totalPrice);
  });

  return (
    <Fragment>
      <p className={priceTotalViewStyle.total}>
        {totalPrice?.toLocaleString()}
      </p>
    </Fragment>
  );
}

export default PriceTotalView;
