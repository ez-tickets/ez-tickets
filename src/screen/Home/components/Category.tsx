import { Fragment } from "react";
import { Link } from "react-router-dom";
import { categoryStyle } from "./style/Category.css.ts";
import useSWR from "swr";
import type {Category} from "../../../dataTypes.ts";

function Category() {
  const { data, error } = useSWR<Category[]>("categories", () =>
    fetch("http://localhost:8080/categories").then((res) => res.json())
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
