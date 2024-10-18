import { Fragment } from "react";
import type { Size } from "../../../dataTypes.ts";
import MenuSize from "./MenuSize.tsx";
import { menuSizeContainerStyle } from "./style/MenuSizeContainer.css.ts";

type MenuSizeContainerProps = {
  sizes: Size[];
};

function MenuSizeContainer({ sizes }: MenuSizeContainerProps) {
  return (
    <Fragment>
      <div className={menuSizeContainerStyle.menuSizeContainer}>
        <h3>Size</h3>

        <div className={menuSizeContainerStyle.menuSize}>
          <MenuSize sizes={sizes} />
        </div>
      </div>
    </Fragment>
  );
}

export default MenuSizeContainer;
