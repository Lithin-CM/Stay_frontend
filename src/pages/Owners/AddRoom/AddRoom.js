import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import NavBar from '../../../components/NavBar/NavBar'


function AddRoom() {
  return (
    <div className='MainContainer'>
      <NavBar/>
      <div className="shadow p-5 rounded" style={{ width: "70%", marginLeft: "15%", marginRight: "15%"}}>
      <h1>Devils 1</h1>
      <h5>123, padamukal</h5>
        <Form>
            
          <Row className="mb-3">
            
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Room catecory name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Sharing Type</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Single</option>
                <option>2 Sharing</option>
                <option>3 Sharing</option>
                <option>4 Sharing</option>
                <option>5 Sharing</option>
              </Form.Select>
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
                <Form.Label>Number of rooms available</Form.Label>
                <Form.Control type="Text" placeholder="0" />
            </Form.Group>
            <Form.Group as={Col} controlId="formName">
                <Form.Label>Amount for 10 days</Form.Label>
                <Form.Control type="Text" placeholder="000" />
            </Form.Group>
            <Form.Group as={Col} controlId="formName">
                <Form.Label>Amount for 20 days</Form.Label>
                <Form.Control type="Text" placeholder="000" />
            </Form.Group>
            <Form.Group as={Col} controlId="formName">
                <Form.Label>Amount per month</Form.Label>
                <Form.Control type="Text" placeholder="000" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Facilities" />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Facilities" />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Facilities" />
          </Form.Group>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Facilities" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AddRoom
