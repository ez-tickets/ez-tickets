import { Fragment } from "react";
import Menu from "./Menu.tsx";
import { menuCardListStyle } from "./style/MenuCardList.css.ts";

function MenuCardList() {
  return (
    <Fragment>
      <div className={menuCardListStyle.main}>
        <div className={menuCardListStyle.menuContainer}>
          <Menu />
        </div>
      </div>
    </Fragment>
  );
}

export default MenuCardList;
