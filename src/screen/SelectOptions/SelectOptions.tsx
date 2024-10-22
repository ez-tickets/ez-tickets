import { Fragment } from "react";
import { slideRight } from "../../global.css.ts";
import { optionTopNavStyle } from "./SelectOptions.css.ts";
import OptionBottomNav from "./components/OptionBottomNav.tsx";
import OptionTopNav from "./components/OptionTopNav.tsx";
import OptionalMenu from "./components/OptionalMenu.tsx";

function SelectOptions() {
  return (
    <Fragment>
      <div className={slideRight}>
        <div className={optionTopNavStyle.screen}>
          <OptionTopNav />

          <div className={optionTopNavStyle.menuOptionContainer}>
            <div className={optionTopNavStyle.menuOptions}>
              <OptionalMenu />
            </div>
          </div>

          <OptionBottomNav />
        </div>
      </div>
    </Fragment>
  );
}

export default SelectOptions;
