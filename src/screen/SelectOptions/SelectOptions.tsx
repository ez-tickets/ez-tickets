import { slideRight } from "@/global.css.ts";
import { optionTopNavStyle } from "@/screen/SelectOptions/SelectOptions.css.ts";
import OptionBottomNav from "@/screen/SelectOptions/components/OptionBottomNav.tsx";
import OptionTopNav from "@/screen/SelectOptions/components/OptionTopNav.tsx";
import OptionalMenu from "@/screen/SelectOptions/components/OptionalMenu.tsx";
import { Fragment } from "react";

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
