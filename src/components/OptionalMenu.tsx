import { Fragment, useState } from 'react';
import { create } from "zustand/index";
import { Option } from "../dataTypes.ts";
import { optionalMenuStyle } from "./style/OptionalMenu.css.ts";

type OptionalMenuProps = {
    options: Option[];
};

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


function OptionalMenu({ options }:OptionalMenuProps) {
    const [state, setState] = useState<string[]>([])!;
    const {sum, subtraction} = useOptionsPriceStore();

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
                <div className={optionalMenuStyle.optionContainer} key={option.id}>
                    <label>
                        {option.name}
                        <input
                            className={optionalMenuStyle.checkBox}
                            type={"checkbox"}
                            checked={state.includes(option.id)}
                            onChange={() => selectedOptions(option.id, option.price)}
                        />
                        <p className={optionalMenuStyle.optionPrice}>+{option.price}円</p>
                    </label>
                </div>
            ))}
        </Fragment>
    );
}

export default OptionalMenu;