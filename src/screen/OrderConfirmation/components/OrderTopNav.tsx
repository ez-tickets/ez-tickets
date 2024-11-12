import { Fragment } from "react";
import { Link } from "react-router-dom";
import xSVG from "@/assets/x.svg";
import { useSlideAnimeStore } from "@/screen/Home/Home.tsx";
import { orderTopNavStyle } from "@/screen/OrderConfirmation/components/style/OrderTopNav.css.ts";

function OrderTopNav() {
  const { changeTopAnimation } = useSlideAnimeStore();

  const backHandler = () => {
    changeTopAnimation();
  };

  return (
    <Fragment>
      <div className={orderTopNavStyle.topBar}>
        <Link to={"/"}>
          <button type={"button"} onClick={backHandler}>
            <img src={xSVG} className={orderTopNavStyle.backImg} alt={"戻る"} />
          </button>
        </Link>
        <h1 className={orderTopNavStyle.menuTitle}>注文内容</h1>
      </div>
    </Fragment>
  );
}

export default OrderTopNav;
