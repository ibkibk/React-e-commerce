import React from "react";
import { Link } from "react-router-dom";

const BasketTotal = ({ value }) => {
  const { subTotal, tax, total, clearBasket } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-capitalize mb-3 px-5"
              type="button"
              onClick={() => clearBasket()}
            >
              clear the basket
            </button>
          </Link>
          <h5>
            <span className="text-title">subtotal:</span>
            <strong>£{subTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax:</span>
            <strong>£{tax}</strong>
          </h5>
          <h5>
            <span className="text-title">total:</span>
            <strong>£{total}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BasketTotal;
