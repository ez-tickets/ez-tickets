import * as React from "react";
import {Fragment, useState} from 'react';
import { Option, Order } from "../dataTypes.ts";
import { create } from "zustand";

type OptionalMenuProps = {
    options: Option[];
};

type OptionTotal = {
    optionTotal: number;
    sum: (price: number) => void;
    subtraction: (price: number) => void;
};

export const useOptionsPrice = create<OptionTotal>()((set) => ({
    optionTotal: 0,
    sum: (price) => set((state) => ({optionTotal: state.optionTotal + price})),
    subtraction: (price) => set((state) => ({optionTotal: state.optionTotal - price})),
}))

function OptionalMenu({ options }: OptionalMenuProps) {
    const [state, setState] = useState<string[]>([])!;
    const {sum, subtraction} = useOptionsPrice();

    const selectedOptions = (id: string,  price: number) => {
        if (!state.includes(id)) {
            setState([...state, id]);
            sum(price);
        } else {
            setState((prev) => prev.filter((target) => target !== id));
            subtraction(price);
        }
    }

    return (
        <Fragment>
            {options.map((option) => (
                <p style={{margin: "10px 0", borderBottom: "1px solid gainsboro", position: "relative"}}>
                    <label key={option.id}>
                        {option.name}
                        <input
                            style={{position: "absolute", top: "10px", right: "10px"}}
                            type={"checkbox"}
                            checked={state.includes(option.id)}
                            onChange={() => selectedOptions(option.id, option.price)}
                        />
                        <p style={{fontSize: "12px"}}>+{option.price}円</p>
                    </label>
                </p>
            ))}
        </Fragment>
    );
}

export default OptionalMenu;