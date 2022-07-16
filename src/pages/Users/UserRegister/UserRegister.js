import React, { useState, useRef, useEffect } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";

function UserRegister() {
    
    return (
      
        <Row className="mt-5">
          <Col md className="text-center ">
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
          <Col className="text-center d-sm-none d-md-block">
            <img src={"https://res.cloudinary.com/lithin-stay/image/upload/v1654499190/stay/animation_500_l42e2r1l_zcfgcx.gif"} alt="loading..." width="80%" />
          </Col>
        </Row>
      
    );
  }

export default UserRegister

  
