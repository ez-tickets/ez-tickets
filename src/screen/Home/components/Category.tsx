import { Fragment } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import type { Category as CategoryApi } from "../../../dataTypes.ts";
import { categoryStyle } from "./style/Category.css.ts";

function Category() {
  const { data, error } = useSWR<CategoryApi[]>("categories", () =>
    fetch("http://localhost:8080/categories").then((res) => res.json()),
  );

  return (
    <Fragment>
      {error}
      {data?.map((card) => (
        <Link to={"/"} key={card.id}>
          <li className={categoryStyle.item}>{card.name}</li>
        </Link>
      ))}
    </Fragment>
  );
}

export default Category;
