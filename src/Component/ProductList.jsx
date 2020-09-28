import React from "react";
import Product from "./Product";
import { ProductConsumer } from "./Context";
import Pagination from "./Pagination";

const ProductList = () => {
  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
