import backSVG from "../assets/back.svg";
import {Fragment } from "react";
import { menuDetail, slidePage} from "./style/MenuDetail.css.ts";
import OptionalMenu from "../components/OptionalMenu.tsx";
import { selectMenuData } from "../mockData.ts";
import { Link } from "react-router-dom";
import { create } from "zustand";

function MenuDetail() {
    const getData = selectMenuData;

    return (
        <Fragment>
            <div className={slidePage}>
                <div className={menuDetail.screen}>
                    <div className={menuDetail.topBar}>
                        <Link to={"/"}>
                            <img
                                src={backSVG}
                                className={menuDetail.backImg}
                            />
                        </Link>
                        <h1 className={menuDetail.menuTitle}>{getData.name}</h1>
                    </div>

                    <div>
                        <img
                            src={getData.image}
                            className={menuDetail.menuImg}
                        />

                        <p className={menuDetail.menuDescription}>{getData.description}</p>

                        <div className={menuDetail.menuOptionContainer}>
                            <h3>Topping</h3>

                            <div className={menuDetail.menuOptions}>
                                <OptionalMenu options={getData.options}/>
                            </div>
                        </div>

                        <p className={menuDetail.price}>{getData.price}</p>
                    </div>

                    <button className={menuDetail.decisionButton}>カートに入れる</button>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuDetail;