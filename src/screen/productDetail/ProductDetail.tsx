import AnimationFrame from "@/parts/components/AnimationFrame.tsx";
import ScreenFrame from "@/parts/components/ScreenFrame.tsx";
import { contentsStyle } from "@/parts/components/style/Contents.css.ts";
import { footerStyle } from "@/parts/components/style/Footer.css.ts";
import { headerStyle } from "@/parts/components/style/Header.css.ts";
import DetailBottomNav from "@/screen/productDetail/components/DetailBottomNav.tsx";
import DetailTopNav from "@/screen/productDetail/components/DetailTopNav.tsx";
import ProdDesc from "@/screen/productDetail/components/ProdDesc.tsx";
import { useOrderStore } from "@/store/OrderStore.ts";
import type { ProductModel } from "@/types.ts";
import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

type ProductState = {
  product: ProductModel;
};

function ProductDetail() {
  const { product } = useLocation().state as ProductState;
  const { orderQuery } = useOrderStore();

  const prodAmount = orderQuery.find((prod) => prod.id === product.id);
  const [amount, setAmount] = useState<number>(
    prodAmount ? prodAmount.amount : 1,
  );

  return (
    <Fragment>
      <AnimationFrame
        element={
          <ScreenFrame
            header={<DetailTopNav name={product.name} setAmount={setAmount} />}
            contents={<ProdDesc product={product} />}
            footer={
              <DetailBottomNav
                product={product}
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
