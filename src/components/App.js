import React from "react";
import { Row, Col, Jumbotron } from "reactstrap";
import PostList from "./PostList";
const App = () => {
  return (
    <div>
      <Row>
        <Col sm="12" className="text-center">
          <h1>React / Redux Template</h1>
        </Col>
        <Col sm="12" className="text-center">
          <PostList />
        </Col>
      </Row>
    </div>
  );
};

export default App;
