import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Component/Context";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Menu inverted style={{ borderRadius: "0" }} size="huge">
          <Menu.Item>
            E-COMMERCE <br></br>APP
          </Menu.Item>
          <Menu.Item>
            <Link to="/">Products</Link>
          </Menu.Item>
          <Menu inverted floated="right" size="huge">
            <ProductConsumer>
              {(value) => {
                const { basket } = value;
                return (
                  <Menu.Item>
                    <Link to="/basket">Your Basket:{basket.length}</Link>
                  </Menu.Item>
                );
              }}
            </ProductConsumer>
          </Menu>
        </Menu>
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </div>
    );
  }
}
