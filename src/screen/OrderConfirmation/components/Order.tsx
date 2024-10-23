import React, { Fragment, useState } from "react";
import trashSVG from "../../../assets/trash.svg";
import type { OrderMenu } from "../../../dataTypes.ts";
import Option from "./Option.tsx";
import { orderStyle } from "./style/Order.css.ts";
type OrderProps = {
  order: OrderMenu;
};

function Order({ order }: OrderProps) {
  const [modalFrag, setModalFrag] = useState<boolean>(false);
  const basePrice = order.product.price * order.product.amount;
  const orderPrice = order.options.reduce(
    (acc, option) => acc + option.price * option.amount,
    basePrice,
  );

  return (
    <Fragment>
      <div className={orderStyle.order} key={order.product.id}>
        <div className={orderStyle.orderProduct}>
          <span className={orderStyle.productName}>{order.product.name}</span>
          <p className={orderStyle.productAmount}>
            × 数量 {order.product.amount}
          </p>
        </div>
        <p className={orderStyle.productPrice}>{order.product.price}円</p>

        {order.options.map((option) => (
          <Option option={option} key={option.id} />
        ))}

        <div className={orderStyle.totalContainer}>
          <span className={orderStyle.totalPrice}>
            合計 {orderPrice.toLocaleString()}円
          </span>
        </div>

        <button
          className={orderStyle.deleteIcon}
          type={"button"}
          onClick={() => setModalFrag(true)}
        >
          <img src={trashSVG} alt={"削除"} />
        </button>
      </div>
    </Fragment>
  );
}

export default Order;
