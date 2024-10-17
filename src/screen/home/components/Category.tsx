import { Fragment } from "react";
import { Link } from "react-router-dom";
import { categoryData } from "../../../mockData.ts";
import { categoryStyle } from "./style/Category.css.ts"

function Category() {
    return (
        <Fragment>
            {categoryData.map((card) => (
                <Link
                    to={"/"}
                    key={card.id}
                >
                    <li className={categoryStyle.item}>{card.name}</li>
                </Link>
            ))}
        </Fragment>
    );
}
export default Category;