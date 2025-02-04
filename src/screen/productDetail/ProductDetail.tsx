import AnimationFrame from "@/parts/components/AnimationFrame.tsx";
import ScreenFrame from "@/parts/components/ScreenFrame.tsx";
import { contentsStyle } from "@/parts/components/style/Contents.css.ts";
import { footerStyle } from "@/parts/components/style/Footer.css.ts";
import { headerStyle } from "@/parts/components/style/Header.css.ts";
import DetailBottomNav from "@/screen/productDetail/components/DetailBottomNav.tsx";
import DetailTopNav from "@/screen/productDetail/components/DetailTopNav.tsx";
import ProdView from "@/screen/productDetail/components/ProdView.tsx";
import { useOrderStore } from "@/store/OrderStore.ts";
import type { ProductDetails } from "@/types.ts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

type ProductState = {
  productId: string;
};

function ProductDetail() {
  const { productId } = useLocation().state as ProductState;
  const { orderQuery } = useOrderStore();

  const prodAmount = orderQuery.find((prod) => prod.id === productId);
  const [amount, setAmount] = useState<number>(
    prodAmount ? prodAmount.amount : 1,
  );

  const { data } = useQuery({
    queryKey: ["products", `product=${productId}`],
    queryFn: async () => {
      const { data } = await axios.get<ProductDetails>(
        `http://100.77.238.23:3650/products/${productId}`,
      );
      return data;
    },
  });

  if (!data) return;

  return (
    <Fragment>
      <AnimationFrame
        element={
          <ScreenFrame
            header={<DetailTopNav name={data.name} setAmount={setAmount} />}
            contents={<ProdView product={data} />}
            footer={
              <DetailBottomNav
                product={data}
                amount={amount}
                setAmount={setAmount}
              />
            }
            headerStyle={headerStyle.detailFrame}
            contentsStyle={contentsStyle.detailFrame}
            footerStyle={footerStyle.detailFrame}
          />
        }
      />
    </Fragment>
  );
}

export default ProductDetail;
