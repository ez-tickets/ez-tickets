import ConfirmModal from "@/screen/modal/confirmModal/ConfirmModal.tsx";
import EditModal from "@/screen/modal/editModal/EditModal.tsx";
import { orderStyle } from "@/screen/orderConfirmation/components/style/Order.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { deleteProduct } from "@/store/action/OrderAction.ts";
import type { OrderProduct } from "@/types.ts";
import { IconTrash } from "@tabler/icons-react";
import { Fragment, useState } from "react";

type OrderProps = {
  order: OrderProduct;
};

function Order({ order }: OrderProps) {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const { orderDispatch } = useOrderStore();

  const openEditHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setEditModal(true);
  };

  const deleteModalHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation(); // Stop event propagation
    setModalFlag(true);
  };

  return (
    <Fragment>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        key={order.id}
        className={orderStyle.order}
        onClick={(e) => openEditHandler(e)}
      >
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
          onClick={(e) => deleteModalHandler(e)}
        />
      </div>

      <EditModal
        order={order}
        editModal={editModal}
        setEditModal={setEditModal}
      />

      <ConfirmModal
        executeHandler={() => orderDispatch(deleteProduct(order.id))}
        modalFlag={modalFlag}
        setModalFlag={setModalFlag}
      />
    </Fragment>
  );
}

export default Order;
