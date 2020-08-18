import React from "react";
import { Input, Menu } from "semantic-ui-react";

function NavBar() {
  return (
    <div>
      <Menu inverted color="blue" size="huge">
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default NavBar;
