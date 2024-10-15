import { Fragment } from 'react';
import { create } from "zustand";
import decrementSVG from "../../../assets/decrement.svg";
import incrementSVG from "../../../assets/increment.svg";
import { orderAmountStyle } from "./style/OrderAmount.css.ts";

type OrderAmount = {
    amount: number;
    inc: () => void;
    dec: () => void;
    resetAmount: () => void;
}

export const useOrderAmountStore = create<OrderAmount>()((set) => ({
    amount: 1,
    inc: () => set((state) => ({amount: state.amount + 1})),
    dec: () => set((state) => ({amount: state.amount - 1})),
    resetAmount: () => set({amount: 1})
}));


function OrderAmount() {
    const {amount, inc, dec} = useOrderAmountStore();
    const maxAmount = 10;
    const minAmount = 1;

    return (
        <Fragment>
            <p className={orderAmountStyle.text}>数量: </p>

            <button
                className={orderAmountStyle.decrementButton}
                onClick={dec}
                disabled={amount <= minAmount}
            >
                <img src={decrementSVG} alt="減らす"/>
            </button>

            <div className={orderAmountStyle.amountDisplay}>{ amount }</div>

            <button
                className={orderAmountStyle.incrementButton}
                onClick={inc}
                disabled={amount >= maxAmount}
            >
                <img src={incrementSVG}　alt="増やす"/>
            </button>
        </Fragment>
    );
}

export default OrderAmount;