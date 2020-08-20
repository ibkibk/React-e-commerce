import React, { Component } from "react";
import BasketCol from "./BasketCol";
import EmptyBasket from "./EmptyBasket";
import { ProductConsumer } from "../Context";
import BasketList from "./BasketList";

export default class Basket extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const { basket } = value;
            if (basket.length > 0) {
              return (
                <div>
                  <h3>Your Basket</h3>
                  <BasketCol />
                  <BasketList />
                </div>
              );
            } else {
              return <EmptyBasket />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}