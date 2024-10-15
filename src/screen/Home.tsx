import { Fragment } from 'react';
import { home } from "./style/Home.css.ts";
import CategoryNav from "../components/CategoryNav.tsx";
import MenuCardList from "../components/MenuCardList.tsx";
import { useSlideAnimeStore } from "./MenuDetail.tsx";

function Home() {
    const {animation} = useSlideAnimeStore();

    return (
        <Fragment>
            <div className={animation}>
                <div className={home.parent}>
                    <CategoryNav/>
                    <MenuCardList/>

                    <div className={home.footer}>
                        <button className={home.decisionButton}>注文確定に進む</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;