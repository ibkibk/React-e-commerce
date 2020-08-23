import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Component/Context";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { id, title, img, price, inBasket } = product;
  return (
    <div className="col-9  mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ProductConsumer>
          {(value) => (
            <div
              className="img-container p-5"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                className="card-btn"
                disabled={inBasket ? true : false}
                onClick={() => {
                  value.addToBasket(id);
                  value.onModal(id);
                }}
              >
                {inBasket ? (
                  <p disabled>in basket</p>
                ) : (
                  <p>not in the basket</p>
                )}{" "}
              </button>
            </div>
          )}
        </ProductConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 style={{ marginBottom: "25px" }}>
            <span>£</span>
            {price}
          </h5>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inBasket: PropTypes.bool,
  }).isRequired,
};

export default Product;
