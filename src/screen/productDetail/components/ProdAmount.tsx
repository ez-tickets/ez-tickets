import { actionType } from "@/mockData.ts";
import { actionNavStyle } from "@/screen/productDetail/components/style/ActionNav.css.ts";
import { prodAmountStyle } from "@/screen/productDetail/components/style/ProdAmount.css.ts";
import { IconCircleMinus, IconCirclePlus } from "@tabler/icons-react";
import { Fragment } from "react";

type OrderAmountProps = {
  price: number;
  amount: number;
  setAmount: (amount: number) => void;
};

function ProdAmount({ price, amount, setAmount }: OrderAmountProps) {
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
      <div className={prodAmountStyle.amountContainer}>
        <div className={prodAmountStyle.text}>数量:</div>

        <IconCircleMinus
          className={
            amount > min
              ? prodAmountStyle.decrementButton
              : prodAmountStyle.limitDecrementButton
          }
          onClick={() => changeAmountHandler(actionType.DECREMENT)}
        />

        <div className={prodAmountStyle.amount}>{amount}</div>

        <IconCirclePlus
          className={
            amount < max
              ? prodAmountStyle.incrementButton
              : prodAmountStyle.limitIncrementButton
          }
          onClick={() => changeAmountHandler(actionType.INCREMENT)}
        />

        <p className={prodAmountStyle.total}>
          {(price * amount).toLocaleString()}
        </p>
      </div>
    </Fragment>
  );
}

export default ProdAmount;
