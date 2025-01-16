import {
  useCustomizeStore,
  useOrderStore,
  useOrderedStore,
} from "@/screen/MenuDetails/store/Order.ts";
import {
  dispersion,
  resetID,
} from "@/screen/MenuDetails/store/action/CustomizeAction.ts";
import OrderTotal from "@/screen/OrderConfirmation/components/OrderTotal.tsx";
import { orderBottomNavStyle } from "@/screen/OrderConfirmation/components/style/OrderBottomNav.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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
