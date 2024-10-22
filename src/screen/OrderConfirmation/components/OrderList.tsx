import { Fragment, useState } from "react";
import { useOrderStore } from "../../MenuDetails/store/Order.ts";
import { orderListStyle } from "./style/OrderList.css.ts";

function OrderList() {
  const [orderPriceTotal, setOrderPriceTotal] = useState<number>(0);
  const { orderQuery } = useOrderStore();

  useOrderStore.subscribe((state, _) => {
    if (state.orderQuery === undefined) return;
    state.orderQuery.map((order) => {
      const basePrice = order.product.price * order.product.amount;
      const totalPrice = order.options.reduce(
        (acc, option) => acc + option.price * option.amount,
        basePrice,
      );
      setOrderPriceTotal(totalPrice);
    });
  });

  return (
    <Fragment>
      <div className={orderListStyle.main}>
        <div className={orderListStyle.orderContainer}>
          {orderQuery.map((order) => {
            const basePrice = order.product.price * order.product.amount;
            const orderPrice = order.options.reduce(
              (acc, option) => acc + option.price * option.amount,
              basePrice,
            );

            return (
              <div className={orderListStyle.order} key={order.product.id}>
                <div className={orderListStyle.orderProduct}>
                  <span className={orderListStyle.productName}>
                    {order.product.name}
                  </span>
                  <p className={orderListStyle.productAmount}>
                    ×　数量　{order.product.amount}
                  </p>
                </div>
                <p className={orderListStyle.productPrice}>
                  {order.product.price}円
                </p>

                {order.options.map((option) => (
                  <div className={orderListStyle.orderOption} key={option.id}>
                    <ul>
                      <li className={orderListStyle.optionList}>
                        <span>{option.name}</span>
                        <p>+{option.price}円</p>
                        <p className={orderListStyle.optionPrice}>
                          × 数量 {option.amount}
                        </p>
                      </li>
                    </ul>
                  </div>
                ))}
                <div className={orderListStyle.totalContainer}>
                  <span className={orderListStyle.totalPrice}>
                    合計 {orderPrice.toLocaleString()}円
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default OrderList;
