import { Fragment, useState } from "react";
import { create } from "zustand/index";
import type { Size } from "../../../dataTypes.ts";
import { menuSizeStyle } from "./style/MenuSize.css.ts";

type MenuSizeProps = {
  sizes: Size[];
};

type SizePrice = {
  price: number;
  setPrice: (price: number) => void;
  resetPrice: () => void;
};

export const useSizePriceStore = create<SizePrice>()((set) => ({
  price: 0,
  // biome-ignore lint: no-cond-assign
  setPrice: (price) => set((state) => ({ price: (state.price = price) })),
  resetPrice: () => set({ price: 0 }),
}));

function MenuSize({ sizes }: MenuSizeProps) {
  const [state, setState] = useState<string>(sizes[1].id); //todo
  const { setPrice } = useSizePriceStore();

  const selectedOptions = (id: string, price: number) => {
    setState(id);
    setPrice(price);
  };

  return (
    <Fragment>
      {sizes.map((size) => (
        <div className={menuSizeStyle.sizeContainer} key={size.id}>
          <label>
            {size.name}
            <input
              className={menuSizeStyle.radio}
              type={"radio"}
              checked={state === size.id}
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
