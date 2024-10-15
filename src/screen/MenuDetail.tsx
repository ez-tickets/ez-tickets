import backSVG from "../assets/back.svg";
import { Fragment } from "react";
import {menuDetail, slideLeftPage, slideRightPage} from "./style/MenuDetail.css.ts";
import { selectMenuData1, selectMenuData2 } from "../mockData.ts";
import { Link } from "react-router-dom";
import PriceTotalView from "../components/PriceTotalView.tsx";
import OrderAmount, { useOrderAmountStore } from "../components/OrderAmount.tsx";
import MenuSizeContainer from "../components/MenuSizeContainer.tsx";
import { orderAmount } from "../components/style/OrderAmount.css.ts";
import { useOptionsPriceStore } from "../components/OptionalMenu.tsx";
import { useSizePriceStore } from "../components/MenuSize.tsx";
import carSVG from "../assets/cart.svg"
import { create } from "zustand/index";

type SlideAnime = {
    animation: string;
    changeLeftAnimation: () => void;
    changeRightAnimation: () => void;
}

export const useSlideAnimeStore = create<SlideAnime>()((set) => ({
    animation: "",
    changeLeftAnimation: () => set({animation: slideLeftPage}),
    changeRightAnimation: () => set({animation: slideRightPage})
}));


function MenuDetail() {
    const getData = selectMenuData1;
    const {resetOptionTotal} = useOptionsPriceStore();
    const {resetPrice} = useSizePriceStore();
    const {resetAmount}  = useOrderAmountStore();
    const {animation, changeLeftAnimation} = useSlideAnimeStore();

    const backHandler = () => {
        resetOptionTotal();
        resetPrice();
        resetAmount();
        changeLeftAnimation();
    }

    const orderHandler = () => {
        alert("注文を追加しました");
        backHandler();
    }

    return (
        <Fragment>
            <div className={animation}>
                <div className={menuDetail.screen}>

                    <div className={menuDetail.topBar}> {/* header */}
                        <Link to={"/"} onClick={backHandler}>
                            <img
                                src={backSVG}
                                className={menuDetail.backImg}
                                alt={"戻る"}
                            />
                        </Link>
                        <h1 className={menuDetail.menuTitle}>{getData.name}</h1>

                        <img
                            src={carSVG}
                            alt={"カート"}
                        />
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
                        {getData.options.length != 0 ?
                            <Link
                                to={"/Options"}
                                onClick={changeLeftAnimation}
                            >
                                <button style={{
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    display: "flex",
                                    margin: "50px auto",
                                    color: "#f5f5f5",
                                    padding: "0.2em 1.5em",
                                    borderRadius: "0.5em",
                                    background: "#ffd700",
                                    border: "1px solid #e8e8e8",
                                    transition: "all 0.3s",
                                    boxShadow: "3px 3px 6px #c5c5c5, -3px -3px 6px",
                                }}>Topping</button>
                            </Link> : ""
                        }
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
                        <Link to={"/"} onClick={orderHandler}>
                            <button className={menuDetail.actionButton}>カートに追加する</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuDetail;