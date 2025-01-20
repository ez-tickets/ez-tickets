import { orderDeleteModalStyle } from "@/screen/OrderConfirmation/components/style/OrderDeleteModal.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { deleteProduct } from "@/store/action/OrderAction.ts";
import { Fragment } from "react";

type OrderDeleteModalProps = {
  productID: string;
  setModalFlag: (Flag: boolean) => void;
};

function OrderDeleteModal({ productID, setModalFlag }: OrderDeleteModalProps) {
  const { orderDispatch } = useOrderStore();

  const orderDeleteHandler = (id: number) => {
    setModalFlag(false);
    // orderDispatch(deleteProduct(id));
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
              onClick={() => orderDeleteHandler(1)} //out
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
