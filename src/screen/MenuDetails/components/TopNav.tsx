import { Fragment } from "react";
import { Link } from "react-router-dom";
import backSVG from "../../../assets/back.svg";
import { useSlideAnimeStore } from "../../Home/Home.tsx";
import { useOrderAmountStore } from "./OrderAmount.tsx";
import { topNavStyle } from "./style/TopNav.css.ts";

type TopNavProps = {
  menuName: string;
};

function TopNav({ menuName }: TopNavProps) {
  const { resetAmount } = useOrderAmountStore();
  const { changeLeftAnimation } = useSlideAnimeStore();

  const backHandler = () => {
    resetAmount();
    changeLeftAnimation();
    //storeを空にする関数を用意する
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
