import React from "react";

const BasketItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="product"
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>£{price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="span-btn btn-black mx-1"
              onClick={() => decrement(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="span-btn btn-black mx-1"
              onClick={() => increment(id)}
            >
              {" "}
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <strong className="remove">Remove</strong>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong className="cart-icon">item total: £{total}</strong>
      </div>
    </div>
  );
};

export default BasketItem;
