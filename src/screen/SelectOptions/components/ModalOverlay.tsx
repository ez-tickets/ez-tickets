import { Fragment } from "react";
import { Link } from "react-router-dom";
import { modalOverlayStyle } from "@/screen/SelectOptions/components/style/ModalOverlay.css.ts";

type ModalOverlayProps = {
  setModalFlag: (flag: boolean) => void;
};

function ModalOverlay({ setModalFlag }: ModalOverlayProps) {
  return (
    <Fragment>
      <div className={modalOverlayStyle.modalOverlay}>
        <div className={modalOverlayStyle.confirmContainer}>
          <p className={modalOverlayStyle.text}>
            内容は変更されていません
            <br />
            よろしいですか？
          </p>
          <div className={modalOverlayStyle.buttonContainer}>
            <Link to={"/MenuDetail"}>
              <button
                type={"button"}
                className={modalOverlayStyle.yesButton}
                onClick={() => setModalFlag(false)}
              >
                はい
              </button>
            </Link>
            <button
              type={"button"}
              className={modalOverlayStyle.noButton}
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

export default ModalOverlay;
