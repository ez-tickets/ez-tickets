import { productStyle } from "@/screen/home/components/style/Product.css.ts";
import { useSlideAnimeStore } from "@/store/AnimationStore.ts";
import type { ProductModel } from "@/types.ts";
import { Link } from "react-router-dom";

type ProductProps = {
  product: ProductModel;
};

function Product({ product }: ProductProps) {
  const { changeRightAnimation } = useSlideAnimeStore();

  return (
    <Link
      key={product.id}
      to={"/ProductDetail"}
      state={{ productId: product.id }}
      onClick={changeRightAnimation}
      className={productStyle.link}
    >
      <div className={productStyle.prod}>
        <img
          src={`http://100.77.238.23:3650/images/${product.id}`}
          className={productStyle.prodImg}
          alt={product.name}
        />
        <div className={productStyle.prodName}>{product.name}</div>
        <div className={productStyle.prodPrice}>
          {product.price.toLocaleString()}
        </div>
      </div>
    </Link>
  );
}

export default Product;
