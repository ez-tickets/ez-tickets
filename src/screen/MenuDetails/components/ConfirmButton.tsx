import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCustomizeStore,
  useOrderStore,
  useOrderedStore,
} from "../store/Order.ts";
import { dispersion, replaceOption } from "../store/action/CustomizeAction.ts";
import { addSelectedOrder } from "../store/action/OrderAction.ts";
import { orderAdd } from "../store/action/OrderedAction.ts";
import { useSelectedOptionsStore } from "./MenuDescription.tsx";
import { useOrderAmountStore } from "./OrderAmount.tsx";
import { confirmButtonStyle } from "./style/ConfirmButton.css.ts";

function ConfirmButton() {
  const { customizeQuery, customizeDispatch } = useCustomizeStore();
  const { orderQuery } = useOrderStore();
  const { orderDispatch } = useOrderStore();
  const { orderedDispatch } = useOrderedStore();
  const { resetHandler } = useSelectedOptionsStore();
  const { resetAmount } = useOrderAmountStore();

  const orderAddHandler = () => {
    resetHandler();
    resetAmount();

    if (customizeQuery === undefined) return;
    const initCustomizeOrder = customizeQuery.options.filter(
      (option) => option.amount > 0,
    );
    customizeDispatch(replaceOption(initCustomizeOrder));
    orderDispatch(addSelectedOrder(customizeQuery));

    const order = {
      product: {
        id: customizeQuery.product.id,
        amount: customizeQuery.product.amount,
      },
      options: customizeQuery.options.map((option) => ({
        id: option.id,
        amount: option.amount,
      })),
    };
    orderedDispatch(orderAdd(order));

    customizeDispatch(dispersion());
    toast.success("商品をカートに追加しました");
  };

  return (
    <Fragment>
      <Link to={"/OrderConfirmation"}>
        <div className={confirmButtonStyle.buttonContainer}>
          <button type={"button"} className={confirmButtonStyle.actionButton}>
            注文確定に進む
          </button>
          {orderQuery.length !== 0 ? (
            <div className={confirmButtonStyle.orderQuantity}>
              {orderQuery.length}
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>

      <Link to={"/"}>
        <div className={confirmButtonStyle.buttonContainer}>
          <button
            type={"button"}
            className={confirmButtonStyle.actionButton}
            onClick={orderAddHandler}
          >
            カートに追加する
          </button>
        </div>
      </Link>
    </Fragment>
  );
}

export default ConfirmButton;
