import backSVG from "../assets/back.svg";
import { Fragment } from "react";
import { menuDetail, slidePage } from "./style/MenuDetail.css.ts";
import OptionalMenuContainer from "../components/OptionalMenuContainer.tsx";
import {selectMenuData1, selectMenuData2} from "../mockData.ts";
import { Link } from "react-router-dom";
import OrderAmount from "../components/OrderAmount.tsx";
import PriceTotalView from "../components/PriceTotalView.tsx";

function MenuDetail() {
    const getData = selectMenuData1;
    const getData2 = selectMenuData2;

    return (
        <Fragment>
            <div className={slidePage}>
                <div className={menuDetail.screen}>
                    <div className={menuDetail.topBar}>
                        <Link to={"/"}>
                            <img
                                src={backSVG}
                                className={menuDetail.backImg}
                                alt={"戻る"}
                            />
                        </Link>
                        <h1 className={menuDetail.menuTitle}>{getData.name}</h1>
                    </div>

                    {/*//-----------------------------------------------------------menu1*/}
                    <div className={menuDetail.main}>
                        <img
                            src={getData.image}
                            className={menuDetail.menuImg}
                            alt={getData.name}
                        />

                        <p className={menuDetail.menuDescription}>{getData.description}</p>

                        {getData.options.length != 0 ? <OptionalMenuContainer options={getData.options} /> : ""}

                        <PriceTotalView menuPrice={getData.price}/>
                    </div>
                    {/*--------------------------------------------------------------------*/}

                    <div className={menuDetail.buttonContainer}>
                        <button className={menuDetail.actionButton}>注文確定に進む</button>
                        <button className={menuDetail.actionButton}>カートに追加する</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuDetail;