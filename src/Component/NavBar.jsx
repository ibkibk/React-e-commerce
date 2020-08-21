import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Component/Context";

export default class NavBar extends Component {
  static contextType = ProductContext;
  render() {
    const { basket } = this.context;
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
            <Menu.Item>
              <Link to="/basket">Your Basket:{basket.length}</Link>
            </Menu.Item>
          </Menu>
        </Menu>

        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </div>
    );
  }
}
