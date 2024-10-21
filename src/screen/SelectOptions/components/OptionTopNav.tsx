import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import backSVG from "../../../assets/back.svg";
import { useSlideAnimeStore } from "../../Home/Home.tsx";
import { useSelectedOptionsStore } from "../../MenuDetails/components/MenuDescription.tsx";
import ModalOverlay from "./ModalOverlay.tsx";
import { optionTopNavStyle } from "./style/OptionTopNav.css.ts";

function OptionTopNav() {
  const [modalFlag, setModalFlag] = useState<boolean>(false);
  const { changeLeftAnimation } = useSlideAnimeStore();
  const { initOptions, stateOptions, resetHandler } = useSelectedOptionsStore();

  const backHandler = () => {
    if (stateOptions.length !== 0) {
      initOptions.map((initOption) => {
        const orderOptions = stateOptions.find(
          (stateOption) => initOption.id === stateOption.id,
        );
        if (orderOptions) {
          initOption.amount = orderOptions.amount;
        } else {
          initOption.amount = 0;
        }
      });
      changeLeftAnimation();
      setModalFlag(true);
      return;
    }
    resetHandler();
  };

  return (
    <Fragment>
      <div className={optionTopNavStyle.topBar}>
        {stateOptions.length === 0 ? (
          <Link to={"/MenuDetail"}>
            <button type={"button"} onClick={backHandler}>
              <img
                src={backSVG}
                className={optionTopNavStyle.backImg}
                alt={"戻る"}
              />
            </button>
          </Link>
        ) : (
          <button type={"button"} onClick={backHandler}>
            <img
              src={backSVG}
              className={optionTopNavStyle.backImg}
              alt={"戻る"}
            />
          </button>
        )}

        <h1 className={optionTopNavStyle.menuTitle}>Topping</h1>
      </div>
      {modalFlag ? <ModalOverlay setModalFlag={setModalFlag} /> : ""}
    </Fragment>
  );
}

export default OptionTopNav;
