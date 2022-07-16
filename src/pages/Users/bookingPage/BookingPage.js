import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NavBar from "../../../components/NavBar/NavBar";


function BookingPage() {

  return (

    <div className='MainContainer'>
      <NavBar/>
      
      <div className="shadow p-5 rounded" style={{ width: "70%", marginLeft: "15%", marginRight: "15%"}}>
        <Form>
          <Row className="mb-3">
            
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Hostel</Form.Label>
            <Form.Control placeholder="Devils Hostel, 1234 Main St" />
          </Form.Group>

        

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Booking for </Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>10 Days</option>
                <option>20 Days</option>
                <option>1 Month</option>
                <option>2 Month</option>
                <option>3 Month</option>
                <option>4 Month</option>
                <option>5 Month</option>
                <option>6 Month</option>
                <option>7 Month</option>
                <option>8 Month</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Check in Date</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>01/03/2022</option>
                <option>02/03/2022</option>
                <option>03/03/2022</option>
                <option>04/03/2022</option>
                <option>05/03/2022</option>
                <option>06/03/2022</option>
                <option>07/03/2022</option>
                <option>08/03/2022</option>
                <option>09/03/2022</option>
                <option>10/03/2022</option>
              </Form.Select>
            </Form.Group>

            <Col>
              <h5>Check out date:</h5>
              <h5><span style={{color: "red"}}>11/4/2022</span></h5>
            </Col>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BookingPage;
