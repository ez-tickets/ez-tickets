import { Fragment } from 'react';
import { home } from "./style/Home.css.ts";
import CategoryNav from "../components/CategoryNav.tsx";
import MenuCardList from "../components/MenuCardList.tsx";

function Home() {
    return (
        <Fragment>
            <div className={home.parent}>
                <CategoryNav />
                <MenuCardList />

                <div className={home.footer}>
                    <button className={home.decisionButton}>注文確定に進む</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;