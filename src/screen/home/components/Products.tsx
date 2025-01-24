import { menuData } from "@/mockData.ts";
import Product from "@/screen/home/components/Product.tsx";
import { productsStyle } from "@/screen/home/components/style/Products.css.ts";
import type { ProductModel } from "@/types.ts";

type ProductsProps = {
  products: ProductModel[];
};

function Products({ products }: ProductsProps) {
  return (
    <div className={productsStyle.prodsContainer}>
      {/* mockData */}
      {menuData.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {/*todo: 以下に置き換える*/}
      {/*{products.map((product) => (*/}
      {/*  <Product key={product.id} product={product} />*/}
      {/*))}*/}
    </div>
  );
}

export default Products;
