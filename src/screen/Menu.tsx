import { Fragment } from 'react';
import {menu} from "./style/Menu.css.ts";
import sampleMenu from "../assets/sampleMenu.jpeg"

function Menu() {
    return (
        <Fragment>
            <div className={menu.parent}>
                <div className={menu.header}>
                    <ul className={menu.menuCard}>
                        <li className={menu.li}>card1</li>
                        <li className={menu.li}>card2</li>
                        <li className={menu.li}>card3</li>
                        <li className={menu.li}>card4</li>
                        <li className={menu.li}>card5</li>
                        <li className={menu.li}>card6</li>
                        <li className={menu.li}>card7</li>
                        <li className={menu.li}>card8</li>
                        <li className={menu.li}>card9</li>
                        <li className={menu.li}>card10</li>
                        <li className={menu.li}>card10</li>
                    </ul>
                </div>

                <div className={menu.main}>
                    <div className={menu.menuContainer}>
                        <div className={menu.menu}>
                            <img
                                src={sampleMenu}
                                className={menu.menuImg}
                            />
                            <div className={menu.menuName}>SampleMenu</div>
                            <div className={menu.menuPrice}>850円</div>
                        </div>      <div className={menu.menu}>
                            <img
                                src={sampleMenu}
                                className={menu.menuImg}
                            />
                            <div className={menu.menuName}>SampleMenu</div>
                            <div className={menu.menuPrice}>850円</div>
                        </div>      <div className={menu.menu}>
                            <img
                                src={sampleMenu}
                                className={menu.menuImg}
                            />
                            <div className={menu.menuName}>SampleMenu</div>
                            <div className={menu.menuPrice}>850円</div>
                        </div>      <div className={menu.menu}>
                            <img
                                src={sampleMenu}
                                className={menu.menuImg}
                            />
                            <div className={menu.menuName}>SampleMenu</div>
                            <div className={menu.menuPrice}>850円</div>
                        </div>      <div className={menu.menu}>
                            <img
                                src={sampleMenu}
                                className={menu.menuImg}
                            />
                            <div className={menu.menuName}>SampleMenu</div>
                            <div className={menu.menuPrice}>850円</div>
                        </div>      <div className={menu.menu}>
                            <img
                                src={sampleMenu}
                                className={menu.menuImg}
                            />
                            <div className={menu.menuName}>SampleMenu</div>
                            <div className={menu.menuPrice}>850円</div>
                        </div>      <div className={menu.menu}>
                            <img
                                src={sampleMenu}
                                className={menu.menuImg}
                            />
                            <div className={menu.menuName}>SampleMenu</div>
                            <div className={menu.menuPrice}>850円</div>
                        </div>
                    </div>
                </div>

                <div className={menu.footer}>
                    <p>footerです</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Menu;