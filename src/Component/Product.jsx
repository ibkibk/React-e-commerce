import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Component/Context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inBasket } = this.props.product;
    return (
      <div>
        <Link to="/details">
          <img src={img} />
        </Link>
        <h3>hello from product</h3>
      </div>
    );
  }
}
