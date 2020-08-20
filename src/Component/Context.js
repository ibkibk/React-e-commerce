import React, { Component } from "react";
import { storeProducts, detailProduct } from "../Static/Data";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    basket: [],
    isModalOpen: false,
    productOfModal: detailProduct,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToBasket = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inBasket = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          basket: [...this.state.basket, product],
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { productOfModal: product, isModalOpen: true };
    });
  };

  offModal = () => {
    this.setState(() => {
      return { isModalOpen: false };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToBasket: this.addToBasket,
          onModal: this.onModal,
          offModal: this.offModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
