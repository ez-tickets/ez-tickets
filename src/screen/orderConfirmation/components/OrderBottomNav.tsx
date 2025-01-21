import Button from "@/parts/components/Button.tsx";
import { buttonStyle } from "@/parts/components/style/Button.css.ts";
import { orderBottomNavStyle } from "@/screen/orderConfirmation/components/style/OrderBottomNav.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { resetProduct } from "@/store/action/OrderAction.ts";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function OrderBottomNav() {
  const [total, setTotal] = useState<number>(0);
  const { orderQuery, orderDispatch } = useOrderStore();

  useEffect(() => {
    const total = orderQuery.reduce((acc, cur) => {
      return acc + cur.price * cur.amount;
    }, 0);

    setTotal(total);
  }, [orderQuery]);

  const orderHandler = () => {
    const orderData = [];

    for (const order of orderQuery) {
      orderData.push({ id: order.id, amount: order.amount });
    }
    console.log(orderData);
    //注文データをサーバーに送るAPI

    toast.success("注文が完了しました");
    orderDispatch(resetProduct());
  };

  return (
    <Fragment>
      <div className={orderBottomNavStyle.footer}>
        <p className={orderBottomNavStyle.total}>
          合計 {total.toLocaleString()}
        </p>

        <Link to={"/"}>
          {orderQuery.length !== 0 ? (
            <Button
              name={"注文を確定する"}
              style={buttonStyle.confirmButton}
              execute={orderHandler}
            />
          ) : (
            <Button
              name={"メニュー選択に戻る"}
              style={buttonStyle.confirmButton}
            />
          )}
        </Link>
      </div>
    </Fragment>
  );
}

export default OrderBottomNav;
