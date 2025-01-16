import { useSlideAnimeStore } from "@/screen/Home/Home.tsx";
import { actionBarStyle } from "@/screen/Home/components/style/ActionBar.css.ts";
import { useOrderStore } from "@/screen/MenuDetails/store/Order.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function ActionBar() {
  const { orderQuery } = useOrderStore();
  const { changeTopAnimation } = useSlideAnimeStore();

  return (
    <Fragment>
      <div className={actionBarStyle.footer}>
        {orderQuery.length !== 0 ? (
          <div className={actionBarStyle.buttonContainer}>
            <Link to={"/OrderConfirmation"}>
              <button
                type={"button"}
                className={actionBarStyle.existButton}
                onClick={changeTopAnimation}
              >
                注文確定に進む
              </button>
            </Link>

            <div className={actionBarStyle.orderQuantity}>
              {orderQuery.length}
            </div>
          </div>
        ) : (
          <div className={actionBarStyle.buttonContainer}>
            <button
              type={"button"}
              className={actionBarStyle.emptyButton}
              disabled={true}
            >
              メニューを選択してください
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default ActionBar;
