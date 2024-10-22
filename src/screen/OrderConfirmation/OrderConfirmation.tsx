import { Fragment } from "react";
import { slideBottom } from "../../global.css.ts";
import { orderConfirmationStyle } from "./OrderConfirmation.css.ts";
import OrderBottomNav from "./components/OrderBottomNav.tsx";
import OrderList from "./components/OrderList.tsx";
import OrderTopNav from "./components/OrderTopNav.tsx";

function OrderConfirmation() {
  const backHandler = () => {};
  const confirmedHandler = () => {};

  return (
    <Fragment>
      <div className={slideBottom}>
        <div className={orderConfirmationStyle.screen}>
          <OrderTopNav />
          <OrderList />
          <OrderBottomNav />
        </div>
      </div>
    </Fragment>
  );
}

export default OrderConfirmation;
