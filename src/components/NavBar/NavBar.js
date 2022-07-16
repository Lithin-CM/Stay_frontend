import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import jwt_decode from 'jwt-decode'

function NavBar() {
  const token = localStorage.getItem('access')
  if(token){
    var decode = jwt_decode(token)
  }
  const _id =1
  const navigate = useNavigate();
  const ViewUserProfile = () =>{ 
      navigate(`/UserProfile/${_id}`);
  }
  return (
    <Row className="navbar shadow-sm " style={{ position: "fixed" }}>
      <Col sm={3}>
        <img
          className="navLogo"
          src="https://notelmelbourne.com.au/wp-content/uploads/2016/04/Notel_Headings_STAY.png"
          alt=""
        />
      </Col>
      <Col className="d-none d-sm-block" sm={5} >
        <input className="navSearch" type="text" placeholder=" &#61442;" />
      </Col>
      <Col className="d-none d-sm-block " sm={4} >
        <div className="location-user">
          <h6>
            <span>
              <img
                className="location"
                src="https://www.freeiconspng.com/thumbs/location-icon-png/location-pin-icon-12.png"
                alt=""
              />
            </span>123,kochi
          </h6>
          
          {token ? <h6>Hii {decode.username}</h6> :
          <img onClick={ViewUserProfile}
            className="user"
            src="https://res.cloudinary.com/lithin-stay/image/upload/v1653735646/stay/User_font_awesome.svg_uxtymj.png"
            alt=""
          />}
        </div>
      </Col>
      <Col className="d-block d-sm-none">
        <h6>123,kochi</h6>
      </Col>
    </Row>
  );
}

export default NavBar;
