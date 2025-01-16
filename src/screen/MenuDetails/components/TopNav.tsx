import backSVG from "@/assets/back.svg";
import { useSlideAnimeStore } from "@/screen/Home/Home.tsx";
import { useSelectedOptionsStore } from "@/screen/MenuDetails/components/MenuDescription.tsx";
import { useOrderAmountStore } from "@/screen/MenuDetails/components/OrderAmount.tsx";
import { topNavStyle } from "@/screen/MenuDetails/components/style/TopNav.css.ts";
import { useCustomizeStore } from "@/screen/MenuDetails/store/Order.ts";
import { dispersion } from "@/screen/MenuDetails/store/action/CustomizeAction.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

type TopNavProps = {
  menuName: string;
};

function TopNav({ menuName }: TopNavProps) {
  const { resetAmount } = useOrderAmountStore();
  const { resetHandler } = useSelectedOptionsStore();
  const { customizeDispatch } = useCustomizeStore();
  const { changeLeftAnimation } = useSlideAnimeStore();

  const backHandler = () => {
    resetAmount();
    resetHandler();
    customizeDispatch(dispersion());
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
