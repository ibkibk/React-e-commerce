import React from "react";
import { Input, Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <div>
      <Menu inverted style={{ borderRadius: "0" }} size="huge">
        <Menu.Item> E-Commerce</Menu.Item>
        <Menu.Item> Products</Menu.Item>
        <Menu inverted floated="right" size="huge">
          <Menu.Item> Your Basket</Menu.Item>
        </Menu>
      </Menu>

      <Menu.Item>
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>
    </div>
  );
}

export default NavBar;
