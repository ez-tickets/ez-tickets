import Order from "@/screen/OrderConfirmation/components/Order.tsx";
import { orderListStyle } from "@/screen/OrderConfirmation/components/style/OrderList.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { Fragment } from "react";

function OrderList() {
  const { orderQuery } = useOrderStore();

  return (
    <Fragment>
      <div className={orderListStyle.main}>
        <div className={orderListStyle.orderContainer}>
          {orderQuery.map((order) => (
            <Order order={order} key={order.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default OrderList;
