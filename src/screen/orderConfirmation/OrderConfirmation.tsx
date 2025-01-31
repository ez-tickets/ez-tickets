import AnimationFrame from "@/parts/components/AnimationFrame.tsx";
import ScreenFrame from "@/parts/components/ScreenFrame.tsx";
import { contentsStyle } from "@/parts/components/style/Contents.css.ts";
import { footerStyle } from "@/parts/components/style/Footer.css.ts";
import { headerStyle } from "@/parts/components/style/Header.css.ts";
import OrderBottomNav from "@/screen/orderConfirmation/components/OrderBottomNav.tsx";
import OrderList from "@/screen/orderConfirmation/components/OrderList.tsx";
import OrderTopNav from "@/screen/orderConfirmation/components/OrderTopNav.tsx";
import { Fragment } from "react";

function OrderConfirmation() {
  return (
    <Fragment>
      <AnimationFrame
        element={
          <ScreenFrame
            header={<OrderTopNav />}
            contents={<OrderList />}
            footer={<OrderBottomNav />}
            headerStyle={headerStyle.confirmFrame}
            contentsStyle={contentsStyle.confirmFrame}
            footerStyle={footerStyle.confirmFrame}
          />
        }
      />
    </Fragment>
  );
}

export default OrderConfirmation;
