import { categoryData } from "@/mockData.ts";
import Category from "@/screen/home/components/Category.tsx";
import { categoriesStyle } from "@/screen/home/components/style/Categories.css.ts";
import type { BasicCategory, ProductModel } from "@/types.ts";
import { Fragment, useEffect, useState } from "react";

type CategoriesProps = {
  selectedCategoryId: string;
  setSelectedCategoryId: (id: string) => void;
  setProducts: (prod: ProductModel[]) => void;
};

function Categories({
  selectedCategoryId,
  setSelectedCategoryId,
  setProducts,
}: CategoriesProps) {
  const [categories, setCategories] = useState<BasicCategory[]>([]);

  //todo: カテゴリー情報のみを取得するAPI
  // useEffect(() => {
  //   (async => {
  //     const getCategories = await;     //カテゴリー情報を取得するAPI
  //     const getInitProducts = await;   //初期表示するカテゴリーの商品情報を取得するAPI
  //     setCategories(getCategories);
  //     setProducts(getInitProducts);
  //   })
  // }, []);

  return (
    <Fragment>
      <div className={categoriesStyle.categories}>
        {/*mockData*/}
        {categoryData.map((category) => (
          <Category
            key={category.id}
            category={category}
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId}
            setProducts={setProducts}
          />
        ))}

        {/*todo: 以下に置き換える*/}
        {/*{categories.map((category) => (*/}
        {/*  <Category*/}
        {/*    key={category.id}*/}
        {/*    category={category}*/}
        {/*    setProducts={setProducts}*/}
        {/*  />*/}
        {/*))}*/}
      </div>
    </Fragment>
  );
}

export default Categories;
