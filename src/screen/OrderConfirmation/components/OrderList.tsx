import { Fragment } from "react";
import { orderListStyle } from "./style/OrderList.css.ts";

function OrderList() {
  return (
    <Fragment>
      <div className={orderListStyle.main}>
        <div className={orderListStyle.menuContainer}>{}</div>
      </div>
    </Fragment>
  );
}

export default OrderList;
