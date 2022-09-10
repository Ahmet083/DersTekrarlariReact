import React, { Component } from "react";
import {ListGroup, ListGroupItem} from "reactstrap"

export default class ProductyList extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.info.title}-{this.props.currentCategory}</h2>
        
      </div>
    )
  }
}
