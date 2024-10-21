import {Fragment} from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import type {Option} from "../../../dataTypes.ts";
import {useOrderedStore, useCustomizeStore} from "../store/Order.ts";
import { useSelectedOptionsStore } from "./MenuDescription.tsx";
import OrderAmount, { useOrderAmountStore } from "./OrderAmount.tsx";
import PriceTotalView from "./PriceTotalView.tsx";
import { bottomNavStyle } from "./style/BottomNav.css.ts";
import {dispersion} from "../store/action/CustomizeAction.ts";
import {orderAdd} from "../store/action/OrderedAction.ts";

type BottomNavProps = {
  options: Option[];
};

function BottomNav({ options }: BottomNavProps) {
  const { query, dispatch } = useCustomizeStore();
  const { dispatcher } = useOrderedStore();
  const { resetHandler } = useSelectedOptionsStore();
  const { resetAmount } = useOrderAmountStore();

  const orderAddHandler = () => {
    resetHandler();
    resetAmount();

    if (query === undefined) return;
      const order = {
        product: {
          id: query.product.id,
          amount: query.product.amount
        },
        options: query.options.map((option) => ({
          id: option.id,
          amount: option.amount
        }))
      };
      dispatcher(orderAdd(order));

    dispatch(dispersion());
    toast.success("商品をカートに追加しました");
  };

  return (
    <Fragment>
      <div className={bottomNavStyle.buttonContainer}>
        <div className={bottomNavStyle.amountContainer}>
          {options.length !== 0 ? (
            <>
              <p className={bottomNavStyle.text}>数量: </p>
              <div className={bottomNavStyle.amountDisplay}>1</div>
            </>
          ) : (
            <OrderAmount />
          )}
        </div>

        <PriceTotalView />

        <Link to={"/"}>
          <button type={"button"} className={bottomNavStyle.actionButton}>
            注文確定に進む
          </button>
        </Link>

        <Link to={"/"}>
          <button
            type={"button"}
            className={bottomNavStyle.actionButton}
            onClick={orderAddHandler}
          >
            カートに追加する
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default BottomNav;
