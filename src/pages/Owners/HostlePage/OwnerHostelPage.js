import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import NavBar from '../../../components/NavBar/NavBar'

function OwnerHostelPage() {
  const location = useLocation()
  const hostel_id = location.state.id
  return (
    <div className='MainContainer'>
      <NavBar />
      <Container fluid>
      <Row>
      <Col md={3}>
        <Link style={{textDecoration:"none",color:"black"}}
              to= "/AddRoom"
              // state = {{id : value.id}}
              >
            <Card className="bg-dark text-white m-1">
              <Card.Img src="https://res.cloudinary.com/lithin-stay/image/upload/v1657522741/samples/simple1_hmcdm2.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <h1> Add New Room Category </h1>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col md={3}>
          <Card className="bg-dark text-white m-1">
            <Card.Img src="https://res.cloudinary.com/lithin-stay/image/upload/v1657522741/samples/simple1_hmcdm2.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Golden</Card.Title>
              <ListGroup >
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default OwnerHostelPage
