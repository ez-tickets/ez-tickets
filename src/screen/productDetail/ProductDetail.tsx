import type { ProductModel } from "@/dataTypes.ts";
import AnimationFrame from "@/parts/components/AnimationFrame.tsx";
import ScreenFrame from "@/parts/components/ScreenFrame.tsx";
import { contentsStyle } from "@/parts/components/style/Contents.css.ts";
import { footerStyle } from "@/parts/components/style/Footer.css.ts";
import { headerStyle } from "@/parts/components/style/Header.css.ts";
import ActionNav from "@/screen/productDetail/components/ActionNav.tsx";
import NavBar from "@/screen/productDetail/components/NavBar.tsx";
import ProdDesc from "@/screen/productDetail/components/ProdDesc.tsx";
import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

type ProductState = {
  product: ProductModel;
};

function ProductDetail() {
  const { product } = useLocation().state as ProductState;
  const [amount, setAmount] = useState<number>(1);

  return (
    <Fragment>
      <AnimationFrame
        element={
          <ScreenFrame
            header={<NavBar name={product.name} setAmount={setAmount} />}
            contents={<ProdDesc product={product} />}
            footer={
              <ActionNav
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
