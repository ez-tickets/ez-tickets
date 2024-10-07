import { Fragment } from "react";
import Menu from "./Menu.tsx";
import {menuCardList} from "./style/MenuCardList.css.ts";

function MenuCardList() {
    return (
        <Fragment>
            <div className={menuCardList.main}>
                <div className={menuCardList.menuContainer}>
                    <Menu/>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuCardList;