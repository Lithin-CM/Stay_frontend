import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AXIOS } from "../../../axios";
import NavBar from "../../../components/NavBar/NavBar";
import HostelCard from "../../../ComponentsForHostel/HostelCard/HostelCard";
import jwt_decode from 'jwt-decode'


function OwnerHomePage() {
  const [hostels, setHostels] = useState([]);

  const token = localStorage.getItem('access')
  if(token){
    var decode = jwt_decode(token)
  }

  const fetchHostels = async () => {
    try {
      const { data } = await AXIOS.get(`hostal/hsotelsOfanOwner/${decode.user_id}`);
      setHostels(data)
    } catch (error) {
      console.log(error.response, "...........................");
    }
  };

  useEffect(()=>{
    fetchHostels();
  }, []);

  return (
    <div className="MainContainer">
      <NavBar />
      <Container fluid>
        <Row style={{marginLeft: ""}} >
          
          <Col  md={12}>
              <div style={{backgroundColor: "rgb(236, 236, 236)"}} className="p-3 ">
                <Row>
                    <Col md={3}>
                    <Link style={{textDecoration:"none",color:"black"}}
                        to= "/AddHostel"
                        >
                        <div className='m-1 p-2 rounded bg-white' style={{width:"100%",height: "fit-content"}}>
                            <h1>Add new Hostel</h1>
                            <img width={50} src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="" />
                        </div>
                    </Link>
                    </Col>
                    {
                      hostels.map(value=>
                          <Col md={3}>
                              <Link style={{textDecoration:"none",color:"black"}}
                                    to= "/OwnerHostelPage"
                                    state = {{id : value.id}}
                                    >
                                    <div className="m-1" style={{width:"100%",height: "fit-content"}}>
                                      <HostelCard data={value}/>
                                    </div>
                              </Link>
                          </Col>
                    )}
                </Row>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OwnerHomePage;
