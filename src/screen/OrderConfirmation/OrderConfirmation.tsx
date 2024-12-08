import { Fragment } from "react";
import { slideBottom } from "@/global.css.ts";
import { orderConfirmationStyle } from "@/screen/OrderConfirmation/OrderConfirmation.css.ts";
import OrderBottomNav from "@/screen/OrderConfirmation/components/OrderBottomNav.tsx";
import OrderList from "@/screen/OrderConfirmation/components/OrderList.tsx";
import OrderTopNav from "@/screen/OrderConfirmation/components/OrderTopNav.tsx";

function OrderConfirmation() {
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
