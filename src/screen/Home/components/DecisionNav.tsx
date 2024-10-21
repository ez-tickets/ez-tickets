import { Fragment } from "react";
import { useOrderStore } from "../../MenuDetails/store/Order.ts";
import { decisionNavStyle } from "./style/DecisionNav.css.ts";

function DecisionNav() {
  const { orderQuery } = useOrderStore();
  return (
    <Fragment>
      <div className={decisionNavStyle.footer}>
        {orderQuery.length !== 0 ? (
          <div className={decisionNavStyle.buttonContainer}>
            <button type={"button"} className={decisionNavStyle.existButton}>
              注文確定に進む
            </button>
            <div className={decisionNavStyle.orderQuantity}>
              {orderQuery.length}
            </div>
          </div>
        ) : (
          <div className={decisionNavStyle.buttonContainer}>
            <button type={"button"} className={decisionNavStyle.emptyButton}>
              注文確定に進む
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default DecisionNav;
