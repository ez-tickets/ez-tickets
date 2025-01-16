import type { ProductModel } from "@/dataTypes.ts";
import { menuData } from "@/mockData.ts";
import Product from "@/screen/Home/components/Product.tsx";
import { productsStyle } from "@/screen/Home/components/style/Products.css.ts";
import { Fragment } from "react";

type ProductsProps = {
  products: ProductModel[];
};

function Products({ products }: ProductsProps) {
  return (
    <Fragment>
      <div className={productsStyle.mainContainer}>
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
      </div>
    </Fragment>
  );
}

export default Products;
