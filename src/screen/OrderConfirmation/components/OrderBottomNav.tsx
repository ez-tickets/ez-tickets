import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { orderBottomNavStyle } from "./style/OrderBottomNav.css.ts";

function OrderBottomNav() {
  const orderHandler = () => {};

  return (
    <Fragment>
      <div className={orderBottomNavStyle.footer}>
        <Link to={"/"}>
          <button
            type={"button"}
            className={orderBottomNavStyle.confirmButton}
            onClick={orderHandler}
          >
            注文を確定する
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default OrderBottomNav;
