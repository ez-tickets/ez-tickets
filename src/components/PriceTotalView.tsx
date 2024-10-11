import { Fragment } from 'react';
import { menuDetail } from "../screen/style/MenuDetail.css.ts";
import {orderAmountStore} from "./OrderAmount.tsx";
import {useOptionsPrice} from "./OptionalMenu.tsx";

type PriceTotalViewProps = {
    menuPrice: number;
}

function PriceTotalView({menuPrice}: PriceTotalViewProps) {
    const {optionTotal} = useOptionsPrice();
    const {amount} = orderAmountStore();
    const result = ((menuPrice * amount) + optionTotal).toLocaleString();

    return (
        <Fragment>
            <p className={menuDetail.price}>{result}</p>
        </Fragment>
    );
}

export default PriceTotalView;