import { Fragment } from 'react';
import { useOrderAmountStore } from "./OrderAmount.tsx";
import { useOptionsPrice } from "./OptionalMenu.tsx";
import {priceTotalViewStyle} from "./style/PriceTotalView.css.ts";
import { useSizePrice } from "./MenuSize.tsx";

type PriceTotalViewProps = {
    menuPrice: number;
}

function PriceTotalView({ menuPrice }: PriceTotalViewProps) {
    const {price} = useSizePrice();
    const {optionTotal} = useOptionsPrice();
    const {amount} = useOrderAmountStore();
    let result;

    if (price == 0) {
        result = menuPrice * amount;
    } else {
        result = ((price * amount) + optionTotal);
    }

    return (
        <Fragment>
            <p className={priceTotalViewStyle.total}>{result.toLocaleString()}</p>
        </Fragment>
    );
}

export default PriceTotalView;