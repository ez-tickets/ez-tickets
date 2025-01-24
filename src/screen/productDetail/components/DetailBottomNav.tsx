import OrderAmount from "@/screen/productDetail/components/OrderAmount.tsx";
import OrderButtons from "@/screen/productDetail/components/OrderButtons.tsx";
import type { ProductModel } from "@/types.ts";
import { Fragment } from "react";

type ActionNavigationProps = {
  product: ProductModel;
  amount: number;
  setAmount: (amount: number) => void;
};

function DetailBottomNav({
  product,
  amount,
  setAmount,
}: ActionNavigationProps) {
  return (
    <Fragment>
      <OrderAmount
        price={product.price}
        amount={amount}
        setAmount={setAmount}
      />

      <OrderButtons product={product} amount={amount} setAmount={setAmount} />
    </Fragment>
  );
}

export default DetailBottomNav;
