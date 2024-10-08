import { Fragment } from "react";
import { category } from "./style/Category.css.ts";

function Category() {
    return (
        <Fragment>
            <li className={ category.item }>card1</li>
            <li className={ category.item }>card1</li>
            <li className={ category.item }>card1</li>
            <li className={ category.item }>card1</li>
            <li className={ category.item }>card1</li>
            <li className={ category.item }>card1</li>
            <li className={ category.item }>card1</li>
            <li className={ category.item }>card1</li>
            <li className={ category.item }>card1</li>
        </Fragment>
    );
}

export default Category;