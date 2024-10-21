import { Fragment } from "react";
import { create } from "zustand";
import decrementSVG from "../../../assets/decrement.svg";
import decrementLimitSVG from "../../../assets/decrementLimit.svg";
import incrementSVG from "../../../assets/increment.svg";
import incrementLimitSVG from "../../../assets/incrementLimit.svg";
import { useCustomizeStore } from "../store/Order.ts";
import { orderAmountStyle } from "./style/OrderAmount.css.ts";
import {decreaseAmount, increaseAmount} from "../store/action/CustomizeAction.ts";

type OrderAmount = {
  amount: number;
  inc: () => void;
  dec: () => void;
  resetAmount: () => void;
};

export const useOrderAmountStore = create<OrderAmount>()((set) => ({
  amount: 1,
  inc: () => set((state) => ({ amount: state.amount + 1 })),
  dec: () => set((state) => ({ amount: state.amount - 1 })),
  resetAmount: () => set({ amount: 1 }),
}));

function OrderAmount() {
  const { amount, inc, dec } = useOrderAmountStore();
  const { dispatch } = useCustomizeStore();
  const maxAmount = 10;
  const minAmount = 1;

  const incHandler = () => {
    inc();
    dispatch(increaseAmount());
  };

  const decHandler = () => {
    dec();
    dispatch(decreaseAmount());
  };

  return (
    <Fragment>
      <p className={orderAmountStyle.text}>数量: </p>

      <button
        type={"button"}
        className={orderAmountStyle.decrementButton}
        onClick={decHandler}
        disabled={amount <= minAmount}
      >
        {amount <= minAmount ? (
          <img src={decrementLimitSVG} alt="減らせません" />
        ) : (
          <img src={decrementSVG} alt="減らす" />
        )}
      </button>

      <div className={orderAmountStyle.amountDisplay}>{amount}</div>

      <button
        type={"button"}
        className={orderAmountStyle.incrementButton}
        onClick={incHandler}
        disabled={amount >= maxAmount}
      >
        {amount >= maxAmount ? (
          <img src={incrementLimitSVG} alt="増やせません" />
        ) : (
          <img src={incrementSVG} alt="増やす" />
        )}
      </button>
    </Fragment>
  );
}

export default OrderAmount;
