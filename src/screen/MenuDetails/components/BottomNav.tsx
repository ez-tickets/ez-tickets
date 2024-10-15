import { Fragment } from 'react';
import { Link } from "react-router-dom";
import OrderAmount from "./OrderAmount.tsx";
import PriceTotalView from "./PriceTotalView.tsx";
import { Option } from "../../../dataTypes.ts";
import { bottomNavStyle } from "./style/BottomNav.css.ts";

type BottomNavProps = {
    options: Option[];
    price: number;
}

function BottomNav({ options, price }: BottomNavProps) {
    const orderHandler = () => {
        alert("注文を追加しました");
    };

    return (
        <Fragment>
            <div className={bottomNavStyle.buttonContainer}>
                <div className={bottomNavStyle.amountContainer}>
                    {options.length != 0 ?
                        <>
                            <p className={bottomNavStyle.text}>数量: </p>
                            <div className={bottomNavStyle.amountDisplay}>1</div>
                        </> : <OrderAmount/>
                }
                </div>

                <PriceTotalView menuPrice={price}/>

                <Link to={"/"}>
                    <button className={bottomNavStyle.actionButton}>注文確定に進む</button>
                </Link>

                <Link to={"/"} onClick={orderHandler}>
                    <button className={bottomNavStyle.actionButton}>カートに追加する</button>
                </Link>
            </div>
        </Fragment>
    );
}

export default BottomNav;