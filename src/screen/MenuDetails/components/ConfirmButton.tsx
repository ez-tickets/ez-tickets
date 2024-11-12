import { Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useCustomizeStore,
  useOrderStore,
  useOrderedStore,
} from "@/screen/MenuDetails/store/Order.ts";
import { dispersion, replaceOption } from "@/screen/MenuDetails/store/action/CustomizeAction.ts";
import { addSelectedOrder } from "@/screen/MenuDetails/store/action/OrderAction.ts";
import { orderAdd } from "@/screen/MenuDetails/store/action/OrderedAction.ts";
import { useSelectedOptionsStore } from "@/screen/MenuDetails/components/MenuDescription.tsx";
import { useOrderAmountStore } from "@/screen/MenuDetails/components/OrderAmount.tsx";
import { confirmButtonStyle } from "@/screen/MenuDetails/components/style/ConfirmButton.css.ts";

function ConfirmButton() {
  const { customizeQuery, customizeDispatch } = useCustomizeStore();
  const { orderQuery } = useOrderStore();
  const { orderDispatch } = useOrderStore();
  const { orderedDispatch } = useOrderedStore();
  const { resetHandler } = useSelectedOptionsStore();
  const { resetAmount } = useOrderAmountStore();

  const orderAddProcess = () => {
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
        id: customizeQuery.product.id.toString(),
        amount: customizeQuery.product.amount,
      },
      options: customizeQuery.options.map((option) => ({
        id: option.id,
        amount: option.amount,
      })),
    };
    orderedDispatch(orderAdd(order));
    customizeDispatch(dispersion());
  };

  const moveOrderHandler = () => orderAddProcess();
  const orderAddHandler = () => {
    orderAddProcess();
    toast.success("商品をカートに追加しました");
  };

  return (
    <Fragment>
      <div className={confirmButtonStyle.buttonContainer}>
        <Link to={"/OrderConfirmation"}>
          <button
            type={"button"}
            className={confirmButtonStyle.actionButton}
            onClick={moveOrderHandler}
          >
            注文確定に進む
          </button>

          {orderQuery.length !== 0 ? (
            <div className={confirmButtonStyle.orderQuantity}>
              {orderQuery.length}
            </div>
          ) : (
            ""
          )}
        </Link>
      </div>

      <div className={confirmButtonStyle.buttonContainer}>
        <Link to={"/"}>
          <button
            type={"button"}
            className={confirmButtonStyle.actionButton}
            onClick={orderAddHandler}
          >
            カートに追加する
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default ConfirmButton;
