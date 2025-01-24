import { actionType } from "@/mockData.ts";
import { orderAmountStyle } from "@/screen/productDetail/components/style/OrderAmount.css.ts";
import { IconCircleMinus, IconCirclePlus } from "@tabler/icons-react";
import { Fragment } from "react";

type OrderAmountProps = {
  price: number;
  amount: number;
  setAmount: (amount: number) => void;
};

function OrderAmount({ price, amount, setAmount }: OrderAmountProps) {
  const max = 10;
  const min = 1;

  const changeAmountHandler = (task: string) => {
    switch (task) {
      case actionType.INCREMENT:
        if (amount < max) setAmount(amount + 1);
        break;
      case actionType.DECREMENT:
        if (amount > min) setAmount(amount - 1);
        break;
    }
  };

  return (
    <Fragment>
      <div className={orderAmountStyle.amountContainer}>
        <div className={orderAmountStyle.text}>数量:</div>

        <IconCircleMinus
          className={
            amount > min
              ? orderAmountStyle.decrementButton
              : orderAmountStyle.limitDecrementButton
          }
          onClick={() => changeAmountHandler(actionType.DECREMENT)}
        />

        <div className={orderAmountStyle.amount}>{amount}</div>

        <IconCirclePlus
          className={
            amount < max
              ? orderAmountStyle.incrementButton
              : orderAmountStyle.limitIncrementButton
          }
          onClick={() => changeAmountHandler(actionType.INCREMENT)}
        />

        <p className={orderAmountStyle.total}>
          {(price * amount).toLocaleString()}
        </p>
      </div>
    </Fragment>
  );
}

export default OrderAmount;
