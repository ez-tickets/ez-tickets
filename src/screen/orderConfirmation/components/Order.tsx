import ConfirmModal from "@/screen/modal/ConfirmModal.tsx";
import { orderStyle } from "@/screen/orderConfirmation/components/style/Order.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { deleteProduct } from "@/store/action/OrderAction.ts";
import type { OrderProduct } from "@/types.ts";
import { IconTrash } from "@tabler/icons-react";
import React, { Fragment, useState } from "react";

type OrderProps = {
  order: OrderProduct;
};

function Order({ order }: OrderProps) {
  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const { orderDispatch } = useOrderStore();

  return (
    <Fragment>
      <div className={orderStyle.order} key={order.id}>
        <div className={orderStyle.orderProduct}>
          <span className={orderStyle.productName}>{order.name}</span>
          <p className={orderStyle.productAmount}>数量 {order.amount}</p>
        </div>

        <p className={orderStyle.productPrice}>{order.price}円</p>

        <div className={orderStyle.totalContainer}>
          <span className={orderStyle.totalPrice}>
            合計 {(order.price * order.amount).toLocaleString()}円
          </span>
        </div>

        <IconTrash
          className={orderStyle.deleteIcon}
          onClick={() => setModalFlag(true)}
        />
      </div>

      <ConfirmModal
        executeHandler={() => orderDispatch(deleteProduct(order.id))}
        modalFlag={modalFlag}
        setModalFlag={setModalFlag}
      />
    </Fragment>
  );
}

export default Order;
