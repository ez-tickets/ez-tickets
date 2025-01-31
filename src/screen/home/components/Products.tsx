import Product from "@/screen/home/components/Product.tsx";
import { productsStyle } from "@/screen/home/components/style/Products.css.ts";
import type { ProductModel } from "@/types.ts";

type ProductsProps = {
  products?: ProductModel[];
};

function Products({ products }: ProductsProps) {
  if (!products) return <div>Loading...</div>;

  return (
    <div className={productsStyle.prodsContainer}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
