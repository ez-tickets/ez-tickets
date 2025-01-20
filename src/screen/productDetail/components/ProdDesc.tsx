import type { ProductModel } from "@/dataTypes.ts";
import { prodDescStyle } from "@/screen/productDetail/components/style/ProdDesc.css.ts";
import { Fragment } from "react";

type MenuDescriptionProps = {
  product: ProductModel;
};

function ProdDesc({ product }: MenuDescriptionProps) {
  return (
    <Fragment>
      <div className={prodDescStyle.prodContainer}>
        <img
          src={product.img}
          className={prodDescStyle.img}
          alt={product.name}
        />
        <p className={prodDescStyle.desc}>{product.desc}</p>
        <p className={prodDescStyle.price}>{product.price}</p>
      </div>
    </Fragment>
  );
}

export default ProdDesc;
