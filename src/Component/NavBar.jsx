import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Menu inverted style={{ borderRadius: "0" }} size="huge">
        <Menu.Item> E-Commerce</Menu.Item>
        <Menu.Item>
          <Link to="/">Products</Link>
        </Menu.Item>
        <Menu inverted floated="right" size="huge">
          <Menu.Item>
            <Link to="/card">Your Basket:10</Link>
          </Menu.Item>
        </Menu>
      </Menu>

      <Menu.Item>
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>
      <h3>hello from navbar</h3>
    </div>
  );
}

export default NavBar;
