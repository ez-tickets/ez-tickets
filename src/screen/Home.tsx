import { Fragment } from 'react';
import { home } from "./style/Home.css.ts";
import MenuDetail from "./MenuDetail.tsx";
import CategoryNav from "../components/CategoryNav.tsx";
import MenuCardList from "../components/MenuCardList.tsx";

function Home() {
    return (
        <Fragment>
            <div className={home.parent}>
                <CategoryNav />
                <MenuCardList />


                <div className={home.footer}>
                    <p>footerです</p>
                </div>
            </div>

            <MenuDetail />
        </Fragment>
    );
}



export default Home;