import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h3>404 page not found</h3>
        <p>
          the requested url <span>{this.props.location.pathname}</span>
          <br />
          was not found
        </p>
      </div>
    );
  }
}
