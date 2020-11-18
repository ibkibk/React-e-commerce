import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Component/Context";
import PropTypes from "prop-types";
import style from "./Product.module.scss";

const Product = ({ product }) => {
  const { id, title, img, price, inBasket } = product;
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <ProductConsumer>
          {(value) => (
            <div className={style.img} onClick={() => value.handleDetail(id)}>
              <Link to="/details">
                <img src={img} alt="product" className={style.cardImg} />
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
                    <p>Add to the basket</p>
                  )}
              </button>
            </div>
          )}
        </ProductConsumer>
        <hr />
        <div className={style.footer}>
          <p className={style.title}>{title}</p>
          <h5>
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
