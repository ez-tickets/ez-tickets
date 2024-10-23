import { Fragment } from "react";
import { useOrderStore } from "../../MenuDetails/store/Order.ts";
import { deleteOrder } from "../../MenuDetails/store/action/OrderAction.ts";
import { orderDeleteModalStyle } from "./style/OrderDeleteModal.css.ts";

type OrderDeleteModalProps = {
  productID: number;
  setModalFlag: (Flag: boolean) => void;
};

function OrderDeleteModal({ productID, setModalFlag }: OrderDeleteModalProps) {
  const { orderDispatch } = useOrderStore();

  const orderDeleteHandler = (id: number) => {
    setModalFlag(false);
    orderDispatch(deleteOrder(id));
  };

  return (
    <Fragment>
      <div className={orderDeleteModalStyle.modalOverlay}>
        <div className={orderDeleteModalStyle.confirmContainer}>
          <p className={orderDeleteModalStyle.text}>この商品を削除しますか？</p>
          <div className={orderDeleteModalStyle.buttonContainer}>
            <button
              type={"button"}
              className={orderDeleteModalStyle.yesButton}
              onClick={() => orderDeleteHandler(productID)}
            >
              はい
            </button>

            <button
              type={"button"}
              className={orderDeleteModalStyle.noButton}
              onClick={() => setModalFlag(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OrderDeleteModal;
