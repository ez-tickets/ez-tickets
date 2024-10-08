import backSVG from "../assets/back.svg";
import sampleMenuImg from "../assets/sampleMenu.jpeg";
import { Fragment } from "react";
import { menuDetail } from "./style/MenuDetail.css.ts";

function MenuDetail() {
    return (
        <Fragment>
            <div className={menuDetail.screen}>
                <div className={menuDetail.topBar}>
                    <img
                        src={backSVG}
                        className={menuDetail.backImg}
                    />
                    <h1 className={menuDetail.menuTitle}>sampleMenu</h1>
                </div>

                <div>
                    <img
                        src={sampleMenuImg}
                        className={menuDetail.menuImg}
                    />

                    <p className={menuDetail.menuDescription}>
                        サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
                    </p>

                    <div className={menuDetail.menuOptionContainer}>
                        <h3>Topping</h3>

                        <div className={menuDetail.menuOptions}>
                            <label>
                                <input type={"checkbox"}/> topping
                            </label>

                            <label>
                                <input type={"checkbox"}/> topping
                            </label>

                            <label>
                                <input type={"checkbox"}/> topping
                            </label>

                            <label>
                                <input type={"checkbox"}/> topping
                            </label>

                            <label>
                                <input type={"checkbox"}/> topping
                            </label>
                        </div>
                    </div>

                    <p className={menuDetail.price}>850円</p>
                </div>

                <button className={menuDetail.decisionButton}>カートに入れる</button>
            </div>
        </Fragment>
    );
}

export default MenuDetail;