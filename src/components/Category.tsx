import {Fragment} from "react";
import {categoryData} from "../mockData.ts";
import {category} from "./style/Category.css.ts"

function Category() {
    return (
        <Fragment>
            {categoryData.map((card) => (
                <li key={card.id} className={category.item}>{card.name}</li>
            ))}
        </Fragment>
    );
}

export default Category;