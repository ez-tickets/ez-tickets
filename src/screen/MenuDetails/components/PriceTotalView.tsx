import { priceTotalViewStyle } from "@/screen/MenuDetails/components/style/PriceTotalView.css.ts";
import { useCustomizeStore } from "@/screen/MenuDetails/store/Order.ts";
import { Fragment, useState } from "react";

function PriceTotalView() {
  const [totalPrice, setTotalPrice] = useState<number>();

  useCustomizeStore.subscribe((state, _) => {
    if (state.customizeQuery === undefined) return;
    const basePrice =
      state.customizeQuery.product.price * state.customizeQuery.product.amount;
    const totalPrice = state.customizeQuery.options.reduce(
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
