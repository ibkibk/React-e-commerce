import React from "react";
import { Link } from "react-router-dom";

function BasketTotal({ value }) {
  const { SubTotal, Tax, Total, clearBasket } = value;
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
            <strong>${SubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax:</span>
            <strong>${Tax}</strong>
          </h5>
          <h5>
            <span className="text-title">total:</span>
            <strong>${Total}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default BasketTotal;
