import type { ProductModel } from "@/dataTypes.ts";
import AnimationFrame from "@/parts/components/AnimationFrame.tsx";
import ScreenFrame from "@/parts/components/ScreenFrame.tsx";
import { contentsStyle } from "@/parts/components/style/Contents.css.ts";
import { footerStyle } from "@/parts/components/style/Footer.css.ts";
import { headerStyle } from "@/parts/components/style/Header.css.ts";
import ActionBar from "@/screen/home/components/ActionBar.tsx";
import Categories from "@/screen/home/components/Categories.tsx";
import Products from "@/screen/home/components/Products.tsx";
import { useEffect, useState } from "react";

function Home() {
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
    <AnimationFrame
      element={
        <ScreenFrame
          header={<Categories setProducts={setProducts} />}
          contents={<Products products={products} />}
          footer={<ActionBar />}
          // 7%, 85%, 8%
          headerStyle={headerStyle.homeFrame}
          contentsStyle={contentsStyle.homeFrame}
          footerStyle={footerStyle.homeFrame}
        />
      }
    />
  );
}

export default Home;
