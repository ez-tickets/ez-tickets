import { Fragment } from "react";
import type { Option } from "@/dataTypes.ts";
import ConfirmButton from "@/screen/MenuDetails/components/ConfirmButton.tsx";
import OrderAmount from "@/screen/MenuDetails/components/OrderAmount.tsx";
import PriceTotalView from "@/screen/MenuDetails/components/PriceTotalView.tsx";
import { bottomNavStyle } from "@/screen/MenuDetails/components/style/BottomNav.css.ts";

type BottomNavProps = {
  options: Option[];
};

function BottomNav({ options }: BottomNavProps) {
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
        <ConfirmButton />
      </div>
    </Fragment>
  );
}

export default BottomNav;
