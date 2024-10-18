import { Fragment } from "react";
import { Link } from "react-router-dom";
import type { Option } from "../../../dataTypes.ts";
import { useOrderStore } from "../store/Order.ts";
import { dispersion } from "../store/action/OrderAction.ts";
import { useSelectedOptionsStore } from "./MenuDescription.tsx";
import OrderAmount, { useOrderAmountStore } from "./OrderAmount.tsx";
import PriceTotalView from "./PriceTotalView.tsx";
import { bottomNavStyle } from "./style/BottomNav.css.ts";

type BottomNavProps = {
  options: Option[];
};

function BottomNav({ options }: BottomNavProps) {
  const { dispatch } = useOrderStore();
  const { resetHandler } = useSelectedOptionsStore();
  const { resetAmount } = useOrderAmountStore();

  const orderAddHandler = () => {
    resetHandler();
    resetAmount();
    dispatch(dispersion());
    alert("注文を追加しました");
  };

  return (
    <Fragment>
      <div className={bottomNavStyle.buttonContainer}>
        <div className={bottomNavStyle.amountContainer}>
          {options.length !== 0 ? (
            <>
              <p className={bottomNavStyle.text}>数量: </p>
              <div className={bottomNavStyle.amountDisplay}>1</div>
            </>
          ) : (
            <OrderAmount />
          )}
        </div>

        <PriceTotalView />

        <Link to={"/"}>
          <button type={"button"} className={bottomNavStyle.actionButton}>
            注文確定に進む
          </button>
        </Link>

        <Link to={"/"} onClick={orderAddHandler}>
          <button type={"button"} className={bottomNavStyle.actionButton}>
            カートに追加する
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default BottomNav;
