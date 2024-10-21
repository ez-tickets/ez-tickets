import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import backSVG from "../../assets/back.svg";
import type { ProdOptionOrder } from "../../dataTypes.ts";
import { useSlideAnimeStore } from "../Home/Home.tsx";
import { slideRightPage } from "../MenuDetails/MenuDetail.css.ts";
import {
  type OrderOptions,
  useSelectedOptionsStore,
} from "../MenuDetails/components/MenuDescription.tsx";
import { useCustomizeStore } from "../MenuDetails/store/Order.ts";
import { selectOptionsStyle } from "./SelectOptions.css.ts";
import OptionalMenu from "./components/OptionalMenu.tsx";
import {replaceOption} from "../MenuDetails/store/action/CustomizeAction.ts";

function SelectOptions() {
  const { changeLeftAnimation } = useSlideAnimeStore();
  const { dispatch } = useCustomizeStore();
  const { initOptions, stateOptions, stateOptionsAddHandler, resetHandler } =
    useSelectedOptionsStore();

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
      confirm("内容が変更されていませんがよろしいですか？");//todo: なんかいいライブラリない？
      return;
    }
    resetHandler();
  };

  const confirmedHandler = () => {
    const selectedOption = initOptions.filter((item) => item.amount > 0);
    stateOptionsAddHandler(selectedOption);
    dispatch(replaceOption(selectedOption));

    toast.success("トッピングを追加しました");
  };

  return (
    <Fragment>
      <div className={slideRightPage}>
        <div className={selectOptionsStyle.screen}>
          <div className={selectOptionsStyle.topBar}>
            <Link to={"/MenuDetail"} onClick={backHandler}>
              <img
                src={backSVG}
                className={selectOptionsStyle.backImg}
                alt={"戻る"}
              />
            </Link>

            <h1 className={selectOptionsStyle.menuTitle}>Topping</h1>
          </div>

          <div className={selectOptionsStyle.menuOptionContainer}>
            <div className={selectOptionsStyle.menuOptions}>
              <OptionalMenu />
            </div>
          </div>

          <div className={selectOptionsStyle.footer}>
            <Link to={"/MenuDetail"}>
              <button
                type={"button"}
                className={selectOptionsStyle.confirmButton}
                onClick={confirmedHandler}
              >
                追加・変更する
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SelectOptions;
