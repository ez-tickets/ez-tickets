import { useOrderStore } from "@/screen/MenuDetails/store/Order.ts";
import Order from "@/screen/OrderConfirmation/components/Order.tsx";
import { orderListStyle } from "@/screen/OrderConfirmation/components/style/OrderList.css.ts";
import { Fragment } from "react";

function OrderList() {
  const { orderQuery } = useOrderStore();

  return (
    <Fragment>
      <div className={orderListStyle.main}>
        <div className={orderListStyle.orderContainer}>
          {orderQuery.map((order) => (
            <Order order={order} key={order.product.id} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default OrderList;
