import Button from "@/parts/components/Button.tsx";
import { buttonStyle } from "@/parts/components/style/Button.css.ts";
import ProdAmount from "@/screen/productDetail/components/ProdAmount.tsx";
import { actionNavStyle } from "@/screen/productDetail/components/style/ActionNav.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { addProduct } from "@/store/action/OrderAction.ts";
import type { ProductModel } from "@/types.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

type ActionNavigationProps = {
  product: ProductModel;
  amount: number;
  setAmount: (amount: number) => void;
};

function ActionNav({ product, amount, setAmount }: ActionNavigationProps) {
  const { orderQuery, orderDispatch } = useOrderStore();

  const addOrder = () => {
    const prod = {
      id: product.id,
      name: product.name,
      price: product.price,
      amount: amount,
    };
    orderDispatch(addProduct(prod));
    setAmount(1);
  };

  const addToCartHandler = () => {
    addOrder();
    toast.success("商品をカートに追加しました");
  };

  return (
    <Fragment>
      <div className={actionNavStyle.actionNav}>
        <ProdAmount
          price={product.price}
          amount={amount}
          setAmount={setAmount}
        />

        <div className={actionNavStyle.buttonContainer}>
          <Link to={"/orderConfirmation"}>
            <Button
              name={"注文確定に進む"}
              style={buttonStyle.actionButton}
              execute={addOrder}
            />
            {orderQuery.length !== 0 ? (
              <div className={actionNavStyle.orderQuantity}>
                {orderQuery.length}
              </div>
            ) : (
              ""
            )}
          </Link>

          <Link to={"/"}>
            <Button
              name={"カートに追加する"}
              style={buttonStyle.actionButton}
              execute={addToCartHandler}
            />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default ActionNav;
