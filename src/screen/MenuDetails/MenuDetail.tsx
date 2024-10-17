import { Fragment } from "react";
import { selectMenuData1, selectMenuData2 } from "../../mockData.ts";
import TopNav from "./components/TopNav.tsx";
import MenuDescription from "./components/MenuDescription.tsx";
import BottomNav from "./components/BottomNav.tsx";
import { useSlideAnimeStore } from "../home/Home.tsx";
import { topNavStyle } from "./MenuDetail.css.ts";
import SelectedOptionsView from "./components/SelectedOptionsView.tsx";

function MenuDetail() {
    const getData = selectMenuData1;
    const {animation} = useSlideAnimeStore();

    return (
        <Fragment>
            <div className={animation}>
                <div className={topNavStyle.screen}>
                    <TopNav menuName={getData.name}/>
                    <MenuDescription data={getData}/>
                    <BottomNav options={getData.options} price={getData.price}/>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuDetail;