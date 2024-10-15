import { Fragment } from 'react';
import { useOrderAmountStore } from "./OrderAmount.tsx";
import { priceTotalViewStyle } from "./style/PriceTotalView.css.ts";
import { useSizePriceStore } from "./MenuSize.tsx";
import { useOptionsPriceStore } from "../../SelectOptions/components/OptionalMenu.tsx";

type PriceTotalViewProps = {
    menuPrice: number;
}

function PriceTotalView({ menuPrice }: PriceTotalViewProps) {
    const {price} = useSizePriceStore();
    const {optionTotal} = useOptionsPriceStore();
    const {amount} = useOrderAmountStore();
    let result;

    if (price == 0) {
        result = (menuPrice * amount) + optionTotal;
    } else {
        result = (price * amount) + optionTotal;
    }

    return (
        <Fragment>
            <p className={priceTotalViewStyle.total}>{result.toLocaleString()}</p>
        </Fragment>
    );
}

export default PriceTotalView;