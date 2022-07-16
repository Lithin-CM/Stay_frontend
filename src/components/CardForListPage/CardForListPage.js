import React from "react";
import "./CardForListPage.css"
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { urlKey } from "../../utils";

function CardForListPage({data}) {
    
  return (
    <Row className="cardMain shadow ">
        <Col className="cardImage" md={5}>
            <img style={{width: "100%", height: "100%", borderRadius:"20px"}} src={urlKey+data.image} alt="" />
        </Col>
        <Col className="cardContent" md={7}>
            <div className="cardHead">
                <div className="cardHeading">
                    <h3>{data.Hostel_name}</h3>
                    <p>{data.location}</p>
                </div>
                <div className="cardHeadStar">
                    <img src="https://res.cloudinary.com/lithin-stay/image/upload/v1653735368/stay/icons8-rating-24_fusvnu.png" alt="jk" />
                    <h5>{data.rating}</h5>
                </div>
            </div>
            <div className="cardBody">
                <p>{data.details}</p>
            </div>
            <div className="cardButtons">
                <button type="button" class="btn btn-secondary me-1">5000</button>
                <Link style={{textDecoration:"none",color:"black"}}
                    to= "/hostle"
                    state={{  id: data.id }} >
                <button type="button" class="btn btn-success" >View more</button>
                </Link>
            </div>
        </Col>
    </Row>
  );
}

export default CardForListPage;
