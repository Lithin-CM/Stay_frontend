import React, { useEffect, useState } from "react";
import "./HostelPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import Carosal from "../../../components/HomeCarousel/Carousel";
import Reviews from "../../../components/Reviews/Reviews";
import NavBar from "../../../components/NavBar/NavBar";
import NavSuggesion from "../../../components/NavSuggesion/NavSuggesion";

import { AXIOS } from "../../../axios";
import { Col, Row } from "react-bootstrap";
import RoomPackages from "../../../components/RoomPackages/RoomPackages";


function HostelPage() {

  const location = useLocation()
  const hostel_id = location.state.id
  const selected = 1;
  const navigate = useNavigate();
  const BookRoom = () => {
    navigate(`/booking/${selected}`);
  };

  const [hostel, setHostel] = useState([]);
  const [hostleImages,setHostleImages] = useState([]);
  const fetchHostel = async () => {
    try {
      var { data } = await AXIOS.get(`user/Hostel/${hostel_id}`);
      console.log(data)
      setHostel(data)

      var {data}= await AXIOS.get(`user/HostelImage/${hostel_id}`);
      setHostleImages(data)
      console.log("+++++++++++++++++++++++")
      console.log(data)
      console.log("+++++++++++++++++++++++")

    } catch (error) {
      console.log(error.response, "...........................");
    }
  };

  useEffect(() => {
    fetchHostel();
    console.log(hostleImages)
  }, []);
  console.log(hostel,"hostles...........");
  console.log(hostleImages,"hostle Images...........");

  return (
    <div className="MainContainer">
      <NavBar />
      <NavSuggesion />
      <div className="ViewMorePageMainDiv">
        {hostleImages && <Carosal data={hostleImages}/>}
        <Row className="ViewMorePageContent">
          <Col className="ContentDetails" md={8}>
            <div className="cardHead">
              <div className="cardHeading">
                <h3>{hostel && hostel.Hostel_name}</h3>
                <p>{hostel && hostel.location}</p>
              </div>
              <div className="cardHeadStar">
                <img
                  src="https://res.cloudinary.com/lithin-stay/image/upload/v1653735368/stay/icons8-rating-24_fusvnu.png"
                  alt=""
                />
                <h5>3.5</h5>
              </div>
            </div>
            <div className="cardBody">
              <p>
              {hostel && hostel.details}
              </p>
            </div>
          </Col>
          { hostel &&
          <Col className="ContentFacilities" md={4}>
            <ul class="list-group list-group-flush">
              {hostel.facility1 && <li key={1} class="list-group-item">{hostel.facility1}</li>}
              {hostel.facility2 && <li key={2} class="list-group-item">{hostel.facility2}</li>}
              {hostel.facility3 && <li key={3} class="list-group-item">{hostel.facility3}</li>}
              {hostel.facility4 && <li key={4} class="list-group-item">{hostel.facility4}</li>}
              {hostel.facility5 && <li key={5} class="list-group-item">{hostel.facility5}</li>}
            </ul>
          </Col>
          }
        </Row>
        <Row style={{backgroundColor: "#00d5ff26", borderRadius:"10px"}} className="m-1 p-3"> 
        
          { hostleImages && hostleImages.map(value=>
              <Col col={4}>
                <RoomPackages data={value}/>
              </Col>
            )}
            
        </Row>
        <Reviews />
      </div>
    </div>
  );
}

export default HostelPage;
