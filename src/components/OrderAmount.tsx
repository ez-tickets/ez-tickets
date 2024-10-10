import React, {Fragment, useState} from 'react';
import decrementSVG from "../assets/decrement.svg";
import incrementSVG from "../assets/increment.svg";
import {orderAmount} from "./style/OrderAmount.css.ts";

function OrderAmount() {
    const [amount, setAmount] = useState<number>(0);
    const maxAmount = 10;
    const minAmount = 1;

    return (
        <Fragment>
            <div className={ orderAmount.amountContainer }>
                <button
                    className={ orderAmount.decrementButton }
                    onClick={ () => setAmount((prev) => prev - 1) }
                    disabled={ amount <= minAmount }
                >
                    <img src={ decrementSVG } alt="減らす"/>
                </button>

                <div className={ orderAmount.amountDisplay }>{ amount }</div>

                <button
                    className={ orderAmount.incrementButton }
                    onClick={ () => setAmount((prev) => prev + 1) }
                    disabled={ amount >= maxAmount }
                >
                    <img src={ incrementSVG }　alt="増やす"/>
                </button>
            </div>
        </Fragment>
    );
}

export default OrderAmount;