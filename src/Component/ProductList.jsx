import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "./Context";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <div>
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
