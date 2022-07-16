import React, { useEffect, useState } from "react";
import { Carousel, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./Carousel.css";
import { urlKey } from "../../utils";

const Carosal = ({data}) => {
  return (
    <div className="main">
      {
        data &&
      <Carousel className="rounded-pill" style={{ maxWidth: "100%"}}>
        {
          data.map(value =>value.image &&
            <Carousel.Item >
              <img
                className="img d-block w-100"
                src = {urlKey +value.image}
                alt= {value.id}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
          
          }
      </Carousel>
      }
    </div>
  );
};

export default Carosal;
