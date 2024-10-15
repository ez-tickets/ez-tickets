import { Fragment } from 'react';
import { Link } from "react-router-dom";
import OptionalMenu from "./components/OptionalMenu.tsx";
import { selectMenuData1 } from "../../mockData.ts";
import { useSlideAnimeStore } from "../home/Home.tsx";
import backSVG from "../../assets/back.svg";
import { selectOptionsStyle } from "./SelectOptions.css.ts";
import { slideRightPage } from "../MenuDetails/MenuDetail.css.ts";

function SelectOptions() {
    const getDate = selectMenuData1;
    const {changeLeftAnimation} = useSlideAnimeStore();

    return (
        <Fragment>
            <div className={slideRightPage}>
                <div className={selectOptionsStyle.topBar}>
                    <Link
                        to={"/MenuDetail"}
                        onClick={changeLeftAnimation}
                    >
                        <img
                            src={backSVG}
                            className={selectOptionsStyle.backImg}
                            alt={"戻る"}
                        />
                    </Link>

                    <h1 className={selectOptionsStyle.menuTitle}>Topping</h1>
                </div>

                <div className={selectOptionsStyle.menuOptionContainer}>
                    <div className={selectOptionsStyle.menuOptions}>
                        <OptionalMenu options={getDate.options}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SelectOptions;