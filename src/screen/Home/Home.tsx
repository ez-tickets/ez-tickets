import type { ProductModel } from "@/dataTypes.ts";
import { slideBottom, slideLeft, slideRight, slideTop } from "@/global.css.ts";
import { homeStyle } from "@/screen/Home/Home.css.ts";
import ActionBar from "@/screen/Home/components/ActionBar.tsx";
import Categories from "@/screen/Home/components/Categories.tsx";
import Products from "@/screen/Home/components/Products.tsx";
import { Fragment, useEffect, useState } from "react";
import { create } from "zustand/index";

type SlideAnime = {
  animation: string;
  changeTopAnimation: () => void;
  changeBottomAnimation: () => void;
  changeLeftAnimation: () => void;
  changeRightAnimation: () => void;
};

export const useSlideAnimeStore = create<SlideAnime>()((set) => ({
  animation: "",
  changeTopAnimation: () => set({ animation: slideTop }),
  changeBottomAnimation: () => set({ animation: slideBottom }),
  changeLeftAnimation: () => set({ animation: slideLeft }),
  changeRightAnimation: () => set({ animation: slideRight }),
}));

function Home() {
  const { animation } = useSlideAnimeStore();
  const [products, setProducts] = useState<ProductModel[]>([]);

  //商品情報を省いたCategoryの配列を取得する、そこからcategoryのidをサーバーに渡して初期の商品情報を取得して表示する。
  //id, name, price, img情報が欲しい
  //todo: 初期表示するカテゴリーの商品情報を取得するAPI
  // useEffect(() => {
  //   (async => {
  //     // const getProducts  = await ________;
  //     // setProducts(getProducts);
  //   })
  // }, []);

  return (
    <Fragment>
      <div className={animation}>
        <div className={homeStyle.screen}>
          <Categories setProducts={setProducts} />
          <Products products={products} />
          <ActionBar />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
