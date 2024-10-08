import {Fragment} from 'react';
import {menuStyle} from "./style/Menu.css.ts";
import {menuData} from "../mockData.ts";

function Menu() {
    return (
        <Fragment>
            {menuData.map((menu) => (
                <div className={menuStyle.menuCard} key={menu.id}>
                    <img
                        src={menu.image}
                        className={menuStyle.menuImg}
                    />
                    <div className={menuStyle.menuName}>{menu.name}</div>
                    <div className={menuStyle.menuPrice}>{menu.price}</div>
                </div>
            ))}
        </Fragment>
    );
}

export default Menu;