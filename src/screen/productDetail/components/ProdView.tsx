import { prodViewStyle } from "@/screen/productDetail/components/style/ProdView.css.ts";
import type { ProductDetails } from "@/types.ts";

type ProdViewProps = {
  product: ProductDetails;
};

function ProdView({ product }: ProdViewProps) {
  return (
    <div className={prodViewStyle.prodContainer}>
      <img
        src={`http://100.77.238.23:3650/images/${product.id}`}
        className={prodViewStyle.img}
        alt={product.name}
      />
      <p className={prodViewStyle.desc}>{product.desc}</p>
      <p className={prodViewStyle.price}>{product.price.toLocaleString()}</p>
    </div>
  );
}

export default ProdView;
