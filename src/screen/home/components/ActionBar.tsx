import Button from "@/parts/components/Button.tsx";
import { buttonStyle } from "@/parts/components/style/Button.css.ts";
import { actionBarStyle } from "@/screen/home/components/style/ActionBar.css.ts";
import { useSlideAnimeStore } from "@/store/AnimationStore.ts";
import { useOrderStore } from "@/store/OrderStore.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function ActionBar() {
  const { orderQuery } = useOrderStore();
  const { changeTopAnimation } = useSlideAnimeStore();

  return (
    <Fragment>
      <div className={actionBarStyle.container}>
        {orderQuery.length !== 0 ? (
          <Link to={"/OrderConfirmation"}>
            <Button
              name={"注文確定に進む"}
              style={buttonStyle.existButton}
              execute={changeTopAnimation}
            />
            <div className={actionBarStyle.orderQuantity}>
              {/*{orderQuery.length}*/}
              {2}
            </div>
          </Link>
        ) : (
          <Button
            name={"メニューを選択してください"}
            style={buttonStyle.emptyButton}
            disabled={true}
          />
        )}
      </div>
    </Fragment>
  );
}

export default ActionBar;
