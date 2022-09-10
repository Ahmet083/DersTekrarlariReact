import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductyList from "./ProductyList";
import { Container, Row, Col } from "reactstrap";

function App() {
  const ProductInfo ={title:"ProductList", BaskaBirSey:"Baska Sey"}
  let CategoryInfo ={title:"CategoryList"}
  
  return (
    <div>
      <Container>
        <Row>
          <Navi title="Navi"/>
        </Row>
        <Row>
          <Col xs="3">
            <ProductyList info={ProductInfo} />
          </Col>
          <Col xs="9">
            <CategoryList info={CategoryInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
