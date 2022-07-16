import React from "react";
import { Card, Col, Container, ListGroup, Row, Tab, Tabs } from "react-bootstrap";
import NavBar from "../../../components/NavBar/NavBar";

function UserProfilePage() {
  return (
    <div className="MainContainer">
      <NavBar />
      <div className="Home">
        <Container fluid >
          <Row>
            <Col sm={3}>
              <img
                style={{ width: "25vh", borderRadius: "2vh" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU"
                alt=""
              />
              <h3>Leon Dcruz</h3>
            </Col>
            <Col sm={3}>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col className="shadow rounded bg-dark" sm={6}>
              <h1 style={{color:"white"}}>dfghjkl</h1>
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default UserProfilePage;
