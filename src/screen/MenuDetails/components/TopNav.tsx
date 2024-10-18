import { Fragment } from "react";
import { Link } from "react-router-dom";
import backSVG from "../../../assets/back.svg";
import { useSlideAnimeStore } from "../../Home/Home.tsx";
import { useOrderStore } from "../store/Order.ts";
import { dispersion } from "../store/action/OrderAction.ts";
import { useSelectedOptionsStore } from "./MenuDescription.tsx";
import { useOrderAmountStore } from "./OrderAmount.tsx";
import { topNavStyle } from "./style/TopNav.css.ts";

type TopNavProps = {
  menuName: string;
};

function TopNav({ menuName }: TopNavProps) {
  const { resetAmount } = useOrderAmountStore();
  const { resetHandler } = useSelectedOptionsStore();
  const { dispatch } = useOrderStore();
  const { changeLeftAnimation } = useSlideAnimeStore();

  const backHandler = () => {
    resetHandler();
    resetAmount();
    dispatch(dispersion());
    changeLeftAnimation();
  };

  return (
    <Fragment>
      <div className={topNavStyle.topBar}>
        <Link to={"/"} onClick={backHandler}>
          <img src={backSVG} className={topNavStyle.backImg} alt={"戻る"} />
        </Link>
        <h1 className={topNavStyle.menuTitle}>{menuName}</h1>
      </div>
    </Fragment>
  );
}

export default TopNav;
