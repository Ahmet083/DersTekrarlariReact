import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductyList from "./ProductyList";
import { Container, Row, Col } from "reactstrap";


export default class App extends Component {

  state={currentCategory: ""}

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  };
  render() {
    let ProductInfo = { title: "ProductList"};
    let CategoryInfo ={ title: "CategoryList"};    

  return {
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
           <CategoryList currentCategory={this.state.currentCategory} 
           changeCategory={this.changeCategory} info={CategoryInfo} />
          </Col>
          <Col xs="9">
          <ProductyList currentCategory={this.state.currentCategory} info={ProductInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  };
