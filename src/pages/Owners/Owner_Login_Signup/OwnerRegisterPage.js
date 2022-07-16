import React from 'react'
import { Button, Col, Modal, Row } from "react-bootstrap";

function OwnerRegisterPage() {
  return (
    <Row className='mt-5'>
          <Col md={6} className="text-center ">
            <form >
              <h1 style={{ color: "#4D4C7D" }}> Welcome To Our Family... </h1>
              <div className="input">
               
                <input
                  type="text"
                  className="inputLogin"
                  placeholder="Enter your full name"
                  name="username"
                 
                />
  
                <input
                  type="email"
                  className="inputLogin"
                  placeholder="Enter your email Address"
                  name="email"
                  
                />
  
                <input
                  type="number"
                  className="inputLogin"
                  placeholder="Enter your phone"
                  name="phone"
                  
                />
  
                
                <input
                  type="number"
                  className="inputLogin"
                  placeholder="Enter your age"
                  name="age"
                  
                />
  
                <div className="d-flex">
                  <div className="me-2">
                    <input
                      type="radio"
                      className="genderSelector"
                      value="Male"
                      name="gender"
                      
                    />{" "}
                    Male
                  </div>
                  <div className="me-2" >
                    <input
                      type="radio"
                      className="genderSelector"
                      value="Female"
                      name="gender"
                      
                    />{" "}
                    Female
                  </div>
                  <div className="me-2">
                    <input
                      type="radio"
                      className="genderSelector"
                      value="Other"
                      name="gender"
                     
                    />{" "}
                    Other
                  </div>
                </div>
  
                
                <input
                  type="password"
                  className="inputLogin"
                  placeholder="Enter the password"
                  name="password"
                  
                />
  
               
                <input
                  type="password"
                  className="inputLogin"
                  placeholder="Confirm the password"
                  name="password"
                  
                />
              </div>
  
              <div className="submit">
                <button type="submit" className="submitButton">
                  {" "}
                  Sign Up{" "}
                </button>
                <p
                 
                  style={{ fontSize: "0.8rem", cursor: "pointer" }}
                >
                  Already Have an Account ? Login Now
                </p>
                
              </div>
            </form>
          </Col>
          <Col md={6} className="text-center d-sm-none d-md-block">
            <img src={"https://res.cloudinary.com/lithin-stay/image/upload/v1654925316/stay/animation_500_l49fqd2g_zvbw7l.gif"} alt="loading..." width="80%" />
          </Col>
        </Row>
  )
}

export default OwnerRegisterPage
