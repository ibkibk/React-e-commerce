import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Component/Context";

const NavBar = ({ value }) => {
  const { basket } = value;
  return (
    <div>
      <ProductConsumer>
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
      </ProductConsumer>
    </div>
  );
};

export default NavBar;
