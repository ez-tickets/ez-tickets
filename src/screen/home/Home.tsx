import AnimationFrame from "@/parts/components/AnimationFrame.tsx";
import ScreenFrame from "@/parts/components/ScreenFrame.tsx";
import { contentsStyle } from "@/parts/components/style/Contents.css.ts";
import { footerStyle } from "@/parts/components/style/Footer.css.ts";
import { headerStyle } from "@/parts/components/style/Header.css.ts";
import ActionBar from "@/screen/home/components/ActionBar.tsx";
import Categories from "@/screen/home/components/Categories.tsx";
import Products from "@/screen/home/components/Products.tsx";
import type { BasicCategory, ProductModel } from "@/types.ts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";

function Home() {
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  //カテゴリ情報{ id: string, name: string, ordering: number }[]を取得する
  const { data: fetchedCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get<BasicCategory[]>(
        "http://100.77.238.23:3650/categories",
      );
      return data;
    },
    select: (data) => data.sort((a, b) => a.ordering - b.ordering),
  });

  const categories = fetchedCategories ?? [];

  //商品情報{ id: string, name: string, price: number, ordering: number }[]を取得する
  const { data: products } = useQuery({
    queryKey: ["products", `selected_category=${selected}`],
    queryFn: async () => {
      const { data } = await axios.get<ProductModel[]>(
        `http://100.77.238.23:3650/categories/${categories[selected].id}`,
      );
      return data;
    },
    select: (data) => data.sort((a, b) => a.ordering - b.ordering),
    enabled: !!categories,
  });

  return (
    <AnimationFrame
      element={
        <ScreenFrame
          header={
            <Categories
              categories={categories}
              selected={selected}
              setSelected={setSelected}
            />
          }
          contents={<Products products={products} />}
          footer={<ActionBar />}
          headerStyle={headerStyle.homeFrame}
          contentsStyle={contentsStyle.homeFrame}
          footerStyle={footerStyle.homeFrame}
        />
      }
    />
  );
}

export default Home;
