import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useOrderStore } from "@/screen/MenuDetails/store/Order.ts";
import { useSlideAnimeStore } from "@/screen/Home/Home.tsx";
import { decisionNavStyle } from "@/screen/Home/components/style/DecisionNav.css.ts";

function DecisionNav() {
  const { orderQuery } = useOrderStore();
  const { changeTopAnimation } = useSlideAnimeStore();

  return (
    <Fragment>
      <div className={decisionNavStyle.footer}>
        {orderQuery.length !== 0 ? (
          <div className={decisionNavStyle.buttonContainer}>
            <Link to={"/OrderConfirmation"}>
              <button
                type={"button"}
                className={decisionNavStyle.existButton}
                onClick={changeTopAnimation}
              >
                注文確定に進む
              </button>
            </Link>

            <div className={decisionNavStyle.orderQuantity}>
              {orderQuery.length}
            </div>
          </div>
        ) : (
          <div className={decisionNavStyle.buttonContainer}>
            <button
              type={"button"}
              className={decisionNavStyle.emptyButton}
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

export default DecisionNav;
