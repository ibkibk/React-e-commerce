import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../Component/Context";
import Button from "./Utility/Button";
import { Link } from "react-router-dom";

const Model = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { isModalOpen, offModal } = value;
        const { img, title, price } = value.productOfModal;

        if (!isModalOpen) {
          return null;
        } else {
          return (
            <ModelContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                  >
                    <h5>item added to the basket</h5>
                    <img src={img} className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : ${price}</h5>
                    <Link to="/">
                      <Button onClick={() => offModal()}>
                        Back to Product
                      </Button>
                    </Link>
                    <Link to="/basket">
                      <Button onClick={() => offModal()}>go to basket</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ModelContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};
const ModelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
  }
`;
export default Model;
