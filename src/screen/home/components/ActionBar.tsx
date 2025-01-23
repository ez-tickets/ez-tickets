import Button from "@/parts/components/Button.tsx";
import { buttonStyle } from "@/parts/components/style/Button.css.ts";
import { actionBarStyle } from "@/screen/home/components/style/ActionBar.css.ts";
import { useSlideAnimeStore } from "@/store/AnimationStore.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function ActionBar() {
  const { orderQuery } = useOrderStore();
  const { changeTopAnimation } = useSlideAnimeStore();

  return (
    <Fragment>
      {orderQuery.length !== 0 ? (
        <div className={actionBarStyle.container}>
          <Link
            to={"/orderConfirmation"}
            className={actionBarStyle.link}
            onClick={changeTopAnimation}
          >
            注文確定に進む
          </Link>
          <div className={actionBarStyle.quantity}>{orderQuery.length}</div>
        </div>
      ) : (
        <Button
          name={"メニューを選択してください"}
          style={buttonStyle.emptyButton}
          disabled={true}
        />
      )}
    </Fragment>
  );
}

export default ActionBar;
