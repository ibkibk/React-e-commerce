import React, { Component } from "react";
import { storeProducts, detailProduct } from "../Static/Data";

export const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    basket: [],
    subTotal: 0,
    tax: 0,
    total: 0,
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
        this.addTotal();
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

  increment = (id) => {
    let tempBasket = [...this.state.basket];
    const selectedProduct = tempBasket.find((item) => item.id === id);
    const index = tempBasket.indexOf(selectedProduct);
    const product = tempBasket[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { basket: [...tempBasket] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  decrement = (id) => {
    let tempBasket = [...this.state.basket];
    const selectedProduct = tempBasket.find((item) => item.id === id);
    const index = tempBasket.indexOf(selectedProduct);
    const product = tempBasket[index];

    product.count = product.count - 1;
    if (product.count === 0) {
      return this.removeItem(id);
    } else {
      product.total = product.count * product.price;
    }

    this.setState(
      () => {
        return { basket: [...tempBasket] };
      },
      () => {
        this.addTotal();
      }
    );
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempBasket = [...this.state.basket];
    tempBasket = tempBasket.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inBasket = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(
      () => {
        return {
          basket: [...tempBasket],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearBasket = () => {
    this.setState(
      () => {
        return { basket: [] };
      },
      () => {
        this.setProducts();
        this.addTotal();
      }
    );
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.basket.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        subTotal: subTotal,
        tax: tax,
        total: total,
      };
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
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearBasket: this.clearBasket,
          setProducts: this.setProducts,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
