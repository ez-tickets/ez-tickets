import { actionType } from "@/mockData.ts";
import Button from "@/parts/components/Button.tsx";
import { buttonStyle } from "@/parts/components/style/Button.css.ts";
import {
  editModalContainer,
  editModalStyle,
} from "@/screen/modal/editModal/EditModal.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { updateProduct } from "@/store/action/OrderAction.ts";
import type { OrderProduct } from "@/types.ts";
import { IconCircleMinus, IconCirclePlus } from "@tabler/icons-react";
import React, { useState } from "react";
import Modal from "react-modal";

type EditModalProd = {
  order: OrderProduct;
  editModal: boolean;
  setEditModal: (flag: boolean) => void;
};

// biome-ignore format: enable ts-ignore.
function EditModal({ order, editModal, setEditModal }: EditModalProd) {
  const [amount, setAmount] = useState<number>(order.amount);
  const { orderDispatch } = useOrderStore();
  const max = 10;
  const min = 1;

  const editAmountHandler = (task: string) => {
    switch (task) {
      case actionType.INCREMENT:
        if (amount < max) setAmount(amount + 1);
        break;
      case actionType.DECREMENT:
        if (amount > min) setAmount(amount - 1);
        break;
    }
  };

  const confirmHandler = () => {
    const prod = {
      id: order.id,
      name: order.name,
      price: order.price,
      amount: amount,
    };
    orderDispatch(updateProduct(prod));
    setEditModal(false);
  };

  return (
    // @ts-ignore react version incompatible
    <Modal isOpen={editModal} style={editModalContainer} onRequestClose={() => setEditModal(false)}>
      <div>
        <p className={editModalStyle.name}>{order.name}</p>

        <div className={editModalStyle.editContainer}>
          <p className={editModalStyle.text}>数量変更 : </p>
          <IconCircleMinus
            className={
              amount > min
                ? editModalStyle.decrementButton
                : editModalStyle.limitDecrementButton
            }
            onClick={() => editAmountHandler(actionType.DECREMENT)}
          />

          <div className={editModalStyle.amount}>{amount}</div>

          <IconCirclePlus
            className={
              amount < max
                ? editModalStyle.incrementButton
                : editModalStyle.limitIncrementButton
            }
            onClick={() => editAmountHandler(actionType.INCREMENT)}
          />
        </div>

        <div className={editModalStyle.buttonContainer}>
          <Button
              name={"キャンセル"}
              style={buttonStyle.noButton}
              execute={() => setEditModal(false)}
          />
          <Button
              name={"変更する"}
              style={buttonStyle.yesButton}
              execute={confirmHandler}
          />
        </div>
      </div>
    </Modal>
  );
}

export default EditModal;
