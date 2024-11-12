import {Fragment} from "react";
import {Link} from "react-router-dom";
import {categoryData} from "@/mockData";
import {categoryStyle} from "@/screen/Home/components/style/Category.css.ts";

function Category() {
  return (
    <Fragment>
      {categoryData.map((category) => (
        <Link to={"/"} key={category.id}>
          <li className={categoryStyle.item}>{category.name}</li>
        </Link>
      ))}
    </Fragment>
  );
}

export default Category;
