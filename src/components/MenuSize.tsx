import { Fragment, useState } from 'react';
import { Size } from "../dataTypes.ts";
import { menuSizeStyle } from "./style/MenuSize.css.ts";
import { create } from "zustand/index";

type MenuSizeProps = {
    sizes: Size[];
}

type SizePrice = {
    price: number;
    setPrice: (price: number) => void;
};

export const useSizePrice = create<SizePrice>()((set) => ({
    price: 0,
    setPrice: (price) => set((state) => ({price: state.price = price}))
}));

function MenuSize({ sizes }: MenuSizeProps) {
    const [state, setState] = useState<string>(sizes[1].id);
    const {setPrice} = useSizePrice();

    const selectedOptions = (id: string,  price: number) => {
        setState(id);
        setPrice(price);
    }

    return (
        <Fragment>
            {sizes.map((size) => (
                <div className={menuSizeStyle.sizeContainer} key={size.id}>
                    <label>
                        {size.name}
                        <input
                            className={menuSizeStyle.radio}
                            type={"radio"}
                            checked={state == size.id}
                            onChange={() => selectedOptions(size.id, size.price)}
                        />
                        <p className={menuSizeStyle.sizePrice}>{size.price}円</p>
                    </label>
                </div>
            ))}
        </Fragment>
    );
}

export default MenuSize;