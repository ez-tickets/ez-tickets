import backSVG from "../assets/back.svg";
import incrementSVG from "../assets/increment.svg";
import decrementSVG from "../assets/decrement.svg";
import {Fragment, useState} from "react";
import { menuDetail, slidePage} from "./style/MenuDetail.css.ts";
import OptionalMenu from "../components/OptionalMenu.tsx";
import { selectMenuData } from "../mockData.ts";
import { Link } from "react-router-dom";
import OrderAmount from "../components/OrderAmount.tsx";

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

                    <div style={{
                        flex: "1",
                        marginBottom: "40px",
                        overflowY: "auto",
                        padding: "20px"
                    }}>
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

                        <OrderAmount/>

                        <p className={menuDetail.price}>{getData.price}</p>
                    </div>

                    {/*todo -------------------------------------------------style変更*/}
                    <div style={{  //todo
                        backgroundColor: "aqua",
                        padding: "20px",
                        position: "fixed",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        zIndex: "1"}}>

                        <button className={menuDetail.decisionButton}>カートに入れる</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuDetail;