import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Carousel from "../../../components/HomeCarousel/Carousel";
import HomeMainField from "../../../components/HomeMainField/HomeMainField";
import NavBar from "../../../components/NavBar/NavBar";
import NavSuggesion from "../../../components/NavSuggesion/NavSuggesion";

import { AXIOS } from "../../../axios";
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";


function HomePage() {
  const [hostels, setHostels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const token = localStorage.getItem('access')
  const navigate = useNavigate();
  
  const fetchHostels = async () => {
    try {
      var { data } = await AXIOS.get(`user/Food_Hostel_PG`);
      setHostels(data)
      console.log(data,"%%%%%%%%%%%%%%%%%%%%%%%%%%%");
      var {data} = await AXIOS.get(`user/TopRooms`);
      setRooms(data)
      
      
      
    } catch (error) {
      console.log(error.response, "...........................");
    }
  };

      console.log(rooms);
  useEffect(() => {
    if(token){
      var decode = jwt_decode(token)
      if(decode.is_superuser){
        navigate(`/OwnerHome`);
      }else if(decode.is_owner){
        navigate(`/`);
      }else{
        navigate(`/`);
      }
    }
    fetchHostels();
  }, []);

  return (
    <div className="MainContainer">
      <NavBar />
      <NavSuggesion />
      <div className="Home">
        <Carousel />
        <HomeMainField data={(rooms.filter((value,index) => index < 5))} heading="Top Rated Hostel Rooms" />
        <HomeMainField data={(hostels.filter((value, index) => !value.pg)).splice(0, 2)} heading="Hostels" />
        <HomeMainField data={(hostels.filter((value, index) => value.pg)).splice(0, 2)} heading="PGs" />
      </div>
    </div>
  );
}

export default HomePage;
