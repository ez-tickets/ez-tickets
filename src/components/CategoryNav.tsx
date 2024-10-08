import { Fragment } from "react";
import { categoryNav } from "./style/CategoryNav.css.ts";
import Category from "./Category.tsx";

function CategoryNav() {

    return (
        <Fragment>
            <div className={categoryNav.header}>
                <ul className={categoryNav.menuCard}>
                    <Category/>
                </ul>
            </div>
        </Fragment>
    );
}

export default CategoryNav;