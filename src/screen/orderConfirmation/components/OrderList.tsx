import Order from "@/screen/orderConfirmation/components/Order.tsx";
import { orderListStyle } from "@/screen/orderConfirmation/components/style/OrderList.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { Fragment } from "react";

function OrderList() {
  const { orderQuery } = useOrderStore();

  return (
    <Fragment>
      <div className={orderListStyle.main}>
        <div className={orderListStyle.orderContainer}>
          {orderQuery.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default OrderList;
