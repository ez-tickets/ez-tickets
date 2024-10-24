import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCustomizeStore,
  useOrderStore,
  useOrderedStore,
} from "../../MenuDetails/store/Order.ts";
import {
  dispersion,
  resetID,
} from "../../MenuDetails/store/action/CustomizeAction.ts";
import OrderTotal from "./OrderTotal.tsx";
import { orderBottomNavStyle } from "./style/OrderBottomNav.css.ts";

function OrderBottomNav() {
  const { customizeDispatch } = useCustomizeStore();
  const { orderQuery, orderDispatch } = useOrderStore();
  const { orderedDispatch } = useOrderedStore();

  const orderHandler = () => {
    customizeDispatch(dispersion());
    customizeDispatch(resetID());
    orderDispatch(dispersion());
    orderedDispatch(dispersion());
    toast.success("注文が完了しました");
  };

  return (
    <Fragment>
      <div className={orderBottomNavStyle.footer}>
        <OrderTotal />

        <Link to={"/"}>
          {orderQuery.length !== 0 ? (
            <button
              type={"button"}
              className={orderBottomNavStyle.confirmButton}
              onClick={orderHandler}
            >
              注文を確定する
            </button>
          ) : (
            <button
              type={"button"}
              className={orderBottomNavStyle.confirmButton}
            >
              メニュー選択に戻る
            </button>
          )}
        </Link>
      </div>
    </Fragment>
  );
}

export default OrderBottomNav;
