import OrderAmount from "@/screen/productDetail/components/OrderAmount.tsx";
import OrderButtons from "@/screen/productDetail/components/OrderButtons.tsx";
import type { ProductDetails } from "@/types.ts";
import { Fragment } from "react";

type DetailBottomNavProps = {
  product: ProductDetails;
  amount: number;
  setAmount: (amount: number) => void;
};

function DetailBottomNav({ product, amount, setAmount }: DetailBottomNavProps) {
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
