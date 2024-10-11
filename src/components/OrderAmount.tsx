import { Fragment } from 'react';
import { orderAmount } from "./style/OrderAmount.css.ts";
import decrementSVG from "../assets/decrement.svg";
import incrementSVG from "../assets/increment.svg";
import {create} from "zustand";

type OrderAmount = {
    amount: number;
    inc: () => void;
    dec: () => void;
}

export const orderAmountStore = create<OrderAmount>()((set) => ({
    amount: 1,
    inc: () => set((state) => ({amount: state.amount + 1})),
    dec: () => set((state) => ({amount: state.amount - 1})),
}));


function OrderAmount() {
    const {amount, inc, dec} = orderAmountStore();
    const maxAmount = 10;
    const minAmount = 1;

    return (
        <Fragment>
            <div className={orderAmount.amountContainer}>
                <button
                    className={orderAmount.decrementButton}
                    onClick={dec}
                    disabled={amount <= minAmount}
                >
                    <img src={decrementSVG} alt="減らす"/>
                </button>

                <div className={orderAmount.amountDisplay}>{ amount }</div>

                <button
                    className={orderAmount.incrementButton}
                    onClick={inc}
                    disabled={amount >= maxAmount}
                >
                    <img src={incrementSVG}　alt="増やす"/>
                </button>
            </div>
        </Fragment>
    );
}

export default OrderAmount;