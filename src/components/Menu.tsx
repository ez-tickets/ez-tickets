import { Fragment } from 'react';
import sampleMenu from "../assets/sampleMenu.jpeg";
import {menu} from "./style/Menu.css.ts";

function Menu() {
    return (
        <Fragment>
            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>

            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>

            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>

            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>

            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>

            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>

            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>

            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>

            <div className={menu.menu}>
                <img
                    src={sampleMenu}
                    className={menu.menuImg}
                />
                <div className={menu.menuName}>SampleMenu</div>
                <div className={menu.menuPrice}>850円</div>
            </div>
        </Fragment>
    );
}

export default Menu;