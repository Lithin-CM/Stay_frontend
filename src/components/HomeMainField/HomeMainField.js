import React from "react";
import "./HomeMainField.css";
import Sugession from "../Sugession/Sugession";
import HomeSingleContent from "../HomeSingleContent/HomeSingleContent";
import { useNavigate } from "react-router-dom";

function HomeMainField({ data,heading }) {
  const _id = 1;
  const navigate = useNavigate();
  const ViewAll = () => {
    navigate(`/ListMainItems/${_id}`);
  };



  console.log(data, "++++++++++++++++++++++++++++++++++++++=");

  return (
    <div className="main">
      <div className="head">
        <h3 style={{ cursor: "pointer", color: "#105555", marginLeft: "1.5rem" }} onClick={ViewAll}>
          {heading} near you
        </h3>
        <div className="suggestion">
          <Sugession />
          <Sugession />
          <Sugession />
        </div>
      </div>
      <body className="body">
        {
          data.map(value =><HomeSingleContent data={value} />)
        }
        
      </body>
    </div>
  );
}

export default HomeMainField;
