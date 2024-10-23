import { Fragment } from "react";
import { useOrderStore } from "../../MenuDetails/store/Order.ts";
import Order from "./Order.tsx";
import { orderListStyle } from "./style/OrderList.css.ts";

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
