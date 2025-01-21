import Button from "@/parts/components/Button.tsx";
import { buttonStyle } from "@/parts/components/style/Button.css.ts";
import {
  confirmModalContainer,
  confirmModalStyle,
} from "@/screen/modal/ConfirmModal.css.ts";
import Modal from "react-modal";

type ConfirmModalProps = {
  modalFlag: boolean;
  setModalFlag: (flag: boolean) => void;
  executeHandler?: () => void;
};

function ConfirmModal({
  modalFlag,
  setModalFlag,
  executeHandler,
}: ConfirmModalProps) {
  return (
    // @ts-ignore react version incompatible
    <Modal
      isOpen={modalFlag}
      style={confirmModalContainer}
      onRequestClose={() => setModalFlag(false)}
    >
      <div>
        <p className={confirmModalStyle.text}>この商品を削除しますか？</p>
        <div className={confirmModalStyle.buttonContainer}>
          <Button
            name={"キャンセル"}
            style={buttonStyle.noButton}
            execute={() => setModalFlag(false)}
          />
          <Button
            name={"はい"}
            style={buttonStyle.yesButton}
            execute={executeHandler}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
