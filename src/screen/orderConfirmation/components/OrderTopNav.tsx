import { orderTopNavStyle } from "@/screen/orderConfirmation/components/style/OrderTopNav.css.ts";
import { useSlideAnimeStore } from "@/store/AnimationStore.ts";
import { IconX } from "@tabler/icons-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function OrderTopNav() {
  const { changeTopAnimation } = useSlideAnimeStore();

  return (
    <Fragment>
      <Link to={"/"} onClick={changeTopAnimation}>
        <IconX className={orderTopNavStyle.backImg} />
      </Link>

      <h1 className={orderTopNavStyle.menuTitle}>注文内容</h1>
    </Fragment>
  );
}

export default OrderTopNav;
