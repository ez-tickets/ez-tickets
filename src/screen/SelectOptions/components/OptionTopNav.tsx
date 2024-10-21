import { Fragment } from "react";
import {Link} from "react-router-dom";
import backSVG from "../../../assets/back.svg";
import {useSelectedOptionsStore} from "../../MenuDetails/components/MenuDescription.tsx";
import {useSlideAnimeStore} from "../../Home/Home.tsx";
import {optionTopNavStyle} from "./style/OptionTopNav.css.ts";

function OptionTopNav() {
  const { changeLeftAnimation } = useSlideAnimeStore();
  const {initOptions, stateOptions, resetHandler} = useSelectedOptionsStore();

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
      confirm("内容が変更されていませんがよろしいですか？"); //todo: なんかいいライブラリない？
      return;
    }
    resetHandler();
  };

  return (
      <Fragment>
        <div className={optionTopNavStyle.topBar}>
          <Link to={"/MenuDetail"} onClick={backHandler}>
            <img
                src={backSVG}
                className={optionTopNavStyle.backImg}
                alt={"戻る"}
            />
          </Link>

          <h1 className={optionTopNavStyle.menuTitle}>Topping</h1>
        </div>
      </Fragment>
  );
}

export default OptionTopNav;
