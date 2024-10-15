import { Fragment } from "react";
import Category from "./Category.tsx";
import { categoryNavStyle } from "./style/CategoryNav.css.ts";

function CategoryNav() {

    return (
        <Fragment>
            <div className={categoryNavStyle.header}>
                <ul className={categoryNavStyle.menuCard}>
                    <Category/>
                </ul>
            </div>
        </Fragment>
    );
}

export default CategoryNav;