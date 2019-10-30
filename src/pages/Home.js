import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>Google Books Search</h1>
                </Jumbotron>
                </Col>
        </Row>
      </Container>
        );
    }
}

export default Home;
