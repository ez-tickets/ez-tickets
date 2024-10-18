import { Fragment } from "react";
import { decisionNavStyle } from "./style/DecisionNav.css.ts";

function DecisionNav() {
  return (
    <Fragment>
      <div className={decisionNavStyle.footer}>
        <button type={"button"} className={decisionNavStyle.decisionButton}>
          注文確定に進む
        </button>
      </div>
    </Fragment>
  );
}

export default DecisionNav;
