import { categoryStyle } from "@/screen/home/components/style/Category.css.ts";
import type { BasicCategory, ProductModel } from "@/types.ts";
import { Link } from "react-router-dom";

type CategoryProps = {
  selectedCategoryId: string;
  setSelectedCategoryId: (id: string) => void;
  category: BasicCategory;
  setProducts: (prod: ProductModel[]) => void;
};

function Category({
  selectedCategoryId,
  setSelectedCategoryId,
  category,
  setProducts,
}: CategoryProps) {
  const fetchProductsByCategory = async (id: string) => {
    setSelectedCategoryId(id);
    //todo: カテゴリーのidをサーバーに渡して商品情報を取得するAPI
    // const products = await;
    // setProducts(products);
  };

  return (
    <Link
      to={""}
      key={category.id}
      className={
        selectedCategoryId === category.id
          ? categoryStyle.selected
          : categoryStyle.category
      }
      onClick={() => fetchProductsByCategory(category.id)}
    >
      {category.name}
    </Link>
  );
}

export default Category;
