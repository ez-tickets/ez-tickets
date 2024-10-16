import { Fragment, useState } from 'react';
import { create } from "zustand/index";
import { Option } from "../../../dataTypes.ts";
import { optionalMenuStyle } from "./style/OptionalMenu.css.ts";
import {orderAmountStyle} from "../../MenuDetails/components/style/OrderAmount.css.ts";
import decrementSVG from "../../../assets/decrement.svg";
import incrementSVG from "../../../assets/increment.svg";

type OptionalMenuProps = {
    options: Option[];
};

type OrderOption = {
    id: string;
    name: string;
    price: number;
    amount: number;
}

type OrderOptions = {
    orderOption: OrderOption[];
    inc: (id: string, name: string, price: number) => void;
    dec: (id: string, name: string, price: number) => void;
    reset: () => void;
}


export const useOptionAmountStore = create<OrderOptions>()((set) => ({
    orderOption: [],
    inc: (id, name, price) => set((state) => ({
        orderOption: [...state.orderOption, {id: id, name: name, price: price, amount: 0}],
    })),
    dec: () => set((state) => ({})),
    reset: () => set({}),
}));

type OptionTotal = {
    optionTotal: number;
    sum: (price: number) => void;
    subtraction: (price: number) => void;
    resetOptionTotal: () => void;
};

export const useOptionsPriceStore = create<OptionTotal>()((set) => ({
    optionTotal: 0,
    sum: (price) => set((state) => ({optionTotal: state.optionTotal + price})),
    subtraction: (price) => set((state) => ({optionTotal: state.optionTotal - price})),
    resetOptionTotal: () => set({optionTotal: 0}),
}));


type OrderOptionSample = {
    id: string;
    name: string;
    price: number;
    amount: number;
}

function OptionalMenu({ options }:OptionalMenuProps) {
    const maxAmount = 5;
    const minAmount = 0;

    const [newOptions, setNewOptions] = useState<OrderOptionSample[]>(
        options.map((option) => ({
            ...option, amount: 0
        }))
    );

    const incrementHandler = (id: string) => {
        setNewOptions((prev) =>
            prev.map((option) => {
                return option.id == id ? { ...option, amount: option.amount + 1 } : option
            })
        )
    }

    const decrementHandler = (id: string) => {
        setNewOptions((prev) =>
            prev.map((option) => {
                return option.id == id ? { ...option, amount: option.amount - 1 } : option
            })
        )
    }

    return (
        <Fragment>
            {newOptions.map((option) => (
                <div className={optionalMenuStyle.optionContainer} key={option.id}>
                    <span>{option.name}</span>
                    <p className={optionalMenuStyle.optionPrice}>+{option.price}円</p>

                    <div className={optionalMenuStyle.buttonContainer}>
                        <button
                            className={orderAmountStyle.decrementButton}
                            onClick={() => {decrementHandler(option.id)}}
                            disabled={option.amount <= minAmount}
                        >
                            <img src={decrementSVG} alt="減らす"/>
                        </button>

                        <div className={optionalMenuStyle.amountDisplay}>{option.amount}</div>

                        <button
                            className={orderAmountStyle.incrementButton}
                            onClick={() => {incrementHandler(option.id)}}
                            disabled={option.amount >= maxAmount}
                        >
                            <img src={incrementSVG} alt="増やす"/>
                        </button>
                    </div>
                </div>
            ))}
        </Fragment>
    );
}

export default OptionalMenu;