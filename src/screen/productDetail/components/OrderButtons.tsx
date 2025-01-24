import { orderButtonsStyle } from "@/screen/productDetail/components/style/OrderButtons.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { addProduct, updateProduct } from "@/store/action/OrderAction.ts";
import type { ProductModel } from "@/types";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

type OrderButtonsProps = {
  product: ProductModel;
  amount: number;
  setAmount: (amount: number) => void;
};

function OrderButtons({ product, amount, setAmount }: OrderButtonsProps) {
  const { orderQuery, orderDispatch } = useOrderStore();

  const addOrder = () => {
    const prod = {
      id: product.id,
      name: product.name,
      price: product.price,
      amount: amount,
    };

    if (orderQuery.find((prod) => prod.id === product.id)) {
      orderDispatch(updateProduct(prod));
      toast.success("数量を変更しました");
    } else {
      orderDispatch(addProduct(prod));
      toast.success("商品をカートに追加しました");
    }
    setAmount(1);
  };

  return (
    <Fragment>
      <div className={orderButtonsStyle.buttonContainer}>
        <div className={orderButtonsStyle.orderLinkContainer}>
          <Link
            to={"/orderConfirmation"}
            className={orderButtonsStyle.orderLink}
            onClick={addOrder}
          >
            注文確定に進む
          </Link>

          {orderQuery.length !== 0 ? (
            <div className={orderButtonsStyle.quantity}>
              {orderQuery.length}
            </div>
          ) : (
            ""
          )}
        </div>

        <Link to={"/"} className={orderButtonsStyle.addLink} onClick={addOrder}>
          カートに追加する
        </Link>
      </div>
    </Fragment>
  );
}

export default OrderButtons;
