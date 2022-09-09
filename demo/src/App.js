import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductyList from "./ProductyList";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <ProductyList />
          </Col>
          <Col xs="9">
            <CategoryList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
