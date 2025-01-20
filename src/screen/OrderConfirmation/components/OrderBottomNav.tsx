import OrderTotal from "@/screen/OrderConfirmation/components/OrderTotal.tsx";
import { orderBottomNavStyle } from "@/screen/OrderConfirmation/components/style/OrderBottomNav.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function OrderBottomNav() {
  const { orderQuery } = useOrderStore();

  const orderHandler = () => {
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
