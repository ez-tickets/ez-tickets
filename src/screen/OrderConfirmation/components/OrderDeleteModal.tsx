import { Fragment } from "react";
import { orderDeleteModalStyle } from "./style/OrderDeleteModal.css.ts";

type OrderDeleteModalProps = {
  productID: string;
  setModalFlag: (Flag: boolean) => void;
};

function OrderDeleteModal({ productID, setModalFlag }: OrderDeleteModalProps) {
  return (
    <Fragment>
      <div className={orderDeleteModalStyle.modalOverlay}>
        <div className={orderDeleteModalStyle.confirmContainer}>
          <p className={orderDeleteModalStyle.text}>この商品を削除しますか？</p>
          <div className={orderDeleteModalStyle.buttonContainer}>
            <button
              type={"button"}
              className={orderDeleteModalStyle.yesButton}
              onClick={() => setModalFlag(false)}
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
