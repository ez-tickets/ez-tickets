import Order from "@/screen/orderConfirmation/components/Order.tsx";
import { orderListStyle } from "@/screen/orderConfirmation/components/style/OrderList.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";

function OrderList() {
  const { orderQuery } = useOrderStore();

  return (
    <div className={orderListStyle.orderContainer}>
      {orderQuery.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderList;
