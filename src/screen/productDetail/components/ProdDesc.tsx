import { prodDescStyle } from "@/screen/productDetail/components/style/ProdDesc.css.ts";
import type { ProductModel } from "@/types.ts";

type MenuDescriptionProps = {
  product: ProductModel;
};

function ProdDesc({ product }: MenuDescriptionProps) {
  return (
    <div className={prodDescStyle.prodContainer}>
      <img src={product.img} className={prodDescStyle.img} alt={product.name} />
      <p className={prodDescStyle.desc}>{product.desc}</p>
      <p className={prodDescStyle.price}>{product.price.toLocaleString()}</p>
    </div>
  );
}

export default ProdDesc;
