import {Fragment} from "react";
import {category} from "./style/Category.css.ts";

function CategoryNav() {
    return (
        <Fragment>
            <div className={category.header}>
                <ul className={category.menuCard}>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                    <li className={category.li}>card1</li>
                </ul>
            </div>
        </Fragment>
    );
}

export default CategoryNav;