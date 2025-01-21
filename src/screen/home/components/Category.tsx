import { categoryStyle } from "@/screen/home/components/style/Category.css.ts";
import type { BasicCategory, ProductModel } from "@/types.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

type CategoryProps = {
  category: BasicCategory;
  setProducts: (prod: ProductModel[]) => void;
};

function Category({ category, setProducts }: CategoryProps) {
  const moveCategoryHandler = async (id: string) => {
    //todo: カテゴリーのidをサーバーに渡して商品情報を取得するAPI
    // const products = await;
    // setProducts(products);
  };

  return (
    <Fragment>
      <Link to={"/"} key={category.id}>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className={categoryStyle.category}
          onClick={() => moveCategoryHandler(category.id)}
        >
          {category.name}
        </div>
      </Link>
    </Fragment>
  );
}

export default Category;
