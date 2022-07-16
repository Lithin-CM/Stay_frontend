import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Card, ListGroup } from 'react-bootstrap'

function HostelCard({data}) {
  return (
    <div className='p-2 rounded ' style={{width:"100%",height: "fit-content", backgroundColor: "white"}}>
        <div className='d-flex'>
            <img width={50} src="https://icon-library.com/images/hotel-icon-map/hotel-icon-map-12.jpg" alt="" />
            <div>
                <h2 className='m-0'>{data.Hostel_name}</h2>
                <h5 className='m-0'>{data.location}</h5>
            </div>
        </div>
        <div className='p-2'>
        <Card >
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            
            <ListGroup.Item> Cras justo odio <Badge bg="primary" pill>14</Badge> </ListGroup.Item>
            
          </ListGroup>
        </Card>
        </div>
    </div>
    
  )
}

export default HostelCard
