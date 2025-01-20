import xSVG from "@/assets/x.svg";
import { orderTopNavStyle } from "@/screen/OrderConfirmation/components/style/OrderTopNav.css.ts";
import { useSlideAnimeStore } from "@/store/AnimationStore.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

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
