import trashSVG from "@/assets/trash.svg";
import type { OrderProduct } from "@/dataTypes.ts";
import Option from "@/screen/OrderConfirmation/components/Option.tsx";
import OrderDeleteModal from "@/screen/OrderConfirmation/components/OrderDeleteModal.tsx";
import { orderStyle } from "@/screen/OrderConfirmation/components/style/Order.css.ts";
import React, { Fragment, useState } from "react";

type OrderProps = {
  order: OrderProduct;
};

function Order({ order }: OrderProps) {
  const [modalFlag, setModalFlag] = useState<boolean>(false);

  const basePrice = order.price * order.amount;

  return (
    <Fragment>
      <div className={orderStyle.order} key={order.id}>
        <div className={orderStyle.orderProduct}>
          <span className={orderStyle.productName}>{order.name}</span>
          <p className={orderStyle.productAmount}>× 数量 {order.amount}</p>
        </div>
        <p className={orderStyle.productPrice}>{order.price}円</p>

        <div className={orderStyle.totalContainer}>
          <span className={orderStyle.totalPrice}>
            合計 {basePrice.toLocaleString()}円
          </span>
        </div>

        <button
          className={orderStyle.deleteIcon}
          type={"button"}
          onClick={() => setModalFlag(true)}
        >
          <img src={trashSVG} alt={"削除"} />
        </button>
      </div>

      {modalFlag ? (
        <OrderDeleteModal productID={order.id} setModalFlag={setModalFlag} />
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Order;
