import backSVG from "../assets/back.svg";
import { Fragment } from "react";
import { menuDetail, slidePage } from "./style/MenuDetail.css.ts";
import OptionalMenuContainer from "../components/OptionalMenuContainer.tsx";
import { selectMenuData1, selectMenuData2 } from "../mockData.ts";
import { Link } from "react-router-dom";
import PriceTotalView from "../components/PriceTotalView.tsx";
import OrderAmount from "../components/OrderAmount.tsx";
import MenuSizeContainer from "../components/MenuSizeContainer.tsx";
import { orderAmount } from "../components/style/OrderAmount.css.ts";

function MenuDetail() {
    const getData = selectMenuData1;

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


                        {getData.sizes.length != 0 ? <MenuSizeContainer sizes={getData.sizes} /> : ""}
                        {getData.options.length != 0 ? <OptionalMenuContainer options={getData.options}/> : ""}

                    </div>
                    {/*--------------------------------------------------------------------*/}

                    <div className={menuDetail.buttonContainer}>
                        {getData.options.length != 0
                            ?
                            <div className={orderAmount.amountContainer}>
                                <p className={orderAmount.text}>数量: </p>
                                <div className={orderAmount.amountDisplay}>1</div>
                            </div>
                            :
                            <OrderAmount/>}

                        <PriceTotalView menuPrice={getData.price}/>

                        <button className={menuDetail.actionButton}>注文確定に進む</button>
                        <button className={menuDetail.actionButton}>カートに追加する</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuDetail;