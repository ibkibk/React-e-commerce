import React from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { Button } from "./Utility/Button";

const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          company,
          price,
          img,
          info,
          title,
          inBasket,
        } = value.detailProduct;
        return (
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-capitalize  my-3">
                <img src={img} alt="product" className="img-fluid" />
              </div>
              <div className="col-10 mx-auto col-md-6 text-capitalize  my-3">
                <h2>model:{title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  mad by: <span className="text-uppercase">{company}</span>
                </h4>
                <h4>
                  <strong>
                    price: <span>£</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
                </p>
                <p className="text-muted lead">{info}</p>
                <div>
                  <Link to="/">
                    <Button>back to product</Button>
                  </Link>
                  <Button
                    disabled={inBasket ? true : false}
                    onClick={() => {
                      value.addToBasket(id);
                      value.onModal(id);
                    }}
                  >
                    {inBasket ? "inBasket" : "add to basket"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
