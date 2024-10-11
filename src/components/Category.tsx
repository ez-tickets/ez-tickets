import { Fragment } from "react";
import { categoryData } from "../mockData.ts";
import { category } from "./style/Category.css.ts"
import { Link } from "react-router-dom";

function Category() {
    return (
        <Fragment>
            {categoryData.map((card) => (
                <Link to={"/"} key={card.id}>
                    <li className={category.item}>{card.name}</li>
                </Link>
            ))}
        </Fragment>
    );
}

export default Category;