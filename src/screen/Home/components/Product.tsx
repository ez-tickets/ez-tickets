import type { ProductModel } from "@/dataTypes.ts";
import { useSlideAnimeStore } from "@/screen/Home/Home.tsx";
import { productStyle } from "@/screen/Home/components/style/Product.css.ts";
import { Fragment } from "react";
import { Link } from "react-router-dom";

type ProductProps = {
  product: ProductModel;
};

function Product({ product }: ProductProps) {
  const { changeRightAnimation } = useSlideAnimeStore();

  return (
    <Fragment>
      <Link
        key={product.id}
        to={"/MenuDetail"}
        state={{ product: product }}
        onClick={changeRightAnimation}
      >
        <div className={productStyle.prod}>
          <img
            src={product.img}
            className={productStyle.prodImg}
            alt={product.name}
          />
          <div className={productStyle.prodName}>{product.name}</div>
          <div className={productStyle.prodPrice}>{product.price}</div>
        </div>
      </Link>
    </Fragment>
  );
}

export default Product;
