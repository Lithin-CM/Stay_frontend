import React, { useEffect, useState } from "react";
import "./UserLogin.css";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import jwt_decode from 'jwt-decode'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function Login() {
  const navigate = useNavigate();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (datas) => {
    try {
      const { data } = await axios.post("http://localhost:8000/user/api/token/", datas);
      localStorage.setItem("access", data.access)
      localStorage.setItem("refresh", data.refresh)
      console.log(data);
      var decode = jwt_decode(data.access)

      if(decode.is_superuser){
        navigate(`/OwnerHome`);
      }else if(decode.is_owner){
        navigate(`/`);
      }else{
        navigate(`/`);
      }

    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Container>
      <Row style={{ marginTop: "10vh" }}>
        <Col className="text-center">
          <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
            <h1 style={{ color: "#4D4C7D" }}> Check In </h1>
            <div className="">
              <input
                type="text"
                className="inputLogin mt-3"
                placeholder="Enter your username"
                name="email"
                {...register("username")}
              />
              <p>{errors.username?.message}</p>

              <input
                type="password"
                className="inputLogin m-3"
                placeholder="Enter the password"
                name="password"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>

            <div className="submit">
              <button
                type="submit"
                style={{ backgroundColor: "#4D4C7D" }}
                className="submitButton"
              >
                {" "}
                Login{" "}
              </button>
              <p style={{ fontSize: "0.8rem", cursor: "pointer" }}>
                Don't Have an Account ? Signup Now
              </p>
            </div>
          </form>
        </Col>
        <Col className="imageee mt-0">
          <img
            src="https://res.cloudinary.com/lithin-stay/image/upload/v1654414081/stay/animation_500_l40zbyz1_qdzgoo.gif"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
