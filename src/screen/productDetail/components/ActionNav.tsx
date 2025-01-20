import type { ProductModel } from "@/dataTypes.ts";
import Button from "@/parts/components/Button.tsx";
import { buttonStyle } from "@/parts/components/style/Button.css.ts";
import ProdAmount from "@/screen/productDetail/components/ProdAmount.tsx";
import { actionNavStyle } from "@/screen/productDetail/components/style/ActionNav.css.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

type ActionNavigationProps = {
  product: ProductModel;
  amount: number;
  setAmount: (amount: number) => void;
};

function ActionNav({ product, amount, setAmount }: ActionNavigationProps) {
  const { orderQuery } = useOrderStore();

  const orderAddProcess = () => {
    //todo: 数量をリセットする
  };

  const moveOrderHandler = () => orderAddProcess();

  const orderAddHandler = () => {
    orderAddProcess();
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
          <Link to={"/OrderConfirmation"}>
            <Button
              name={"注文確定に進む"}
              style={buttonStyle.actionButton}
              execute={moveOrderHandler}
            />
            {orderQuery.length !== 0 ? (
              <div className={actionNavStyle.orderQuantity}>{5}</div>
            ) : (
              ""
            )}
          </Link>

          <Link to={"/"}>
            <Button
              name={"カートに追加する"}
              style={buttonStyle.actionButton}
              execute={orderAddHandler}
            />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default ActionNav;
